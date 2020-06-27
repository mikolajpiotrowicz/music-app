import * as fs from 'fs';
import { ParsedVibrantColors } from '../models/Vibrant';
import { logger } from './Logger';

export const sortedVibrantColors = [
  'Vibrant',
  'Muted',
  'DarkVibrant',
  'DarkMuted',
  'LightVibrant',
  'LightMuted',
];

export const VibrantFilenameDecoratorService = (path: string, colors: ParsedVibrantColors) =>
  new Promise((resolve, reject) => {
    const extIndex = path.lastIndexOf('.');
    const newPath = `${path.substr(0, extIndex)}${sortedVibrantColors.map(
      colorName => `${colors[colorName]}`,
    )}${path.substr(extIndex, path.length)}`
      .replace(',', '')
      .replace('.mp3', '.jpg')
    fs.rename(path, newPath, err => {
      if (err) {
        reject(`Something went wrong in renaming, ${err}`);
      }
      console.log(`VibrantFilenameDecoratorService newPath: ${newPath}`);
      resolve(newPath);
    });
  });
