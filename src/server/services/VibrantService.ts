import Vibrant from 'node-vibrant';
import * as fs from 'fs';
import { Palette } from 'node-vibrant/lib/color';
import { ParsedVibrantColors } from '../models/Vibrant';

export const convertRGBClrToHex = ({ rgb }: { rgb: string }) => {
  const rgbClr = rgb.split(',');
  const r = rgbClr[0];
  const g = rgbClr[1];
  const b = rgbClr[2];
  return ((Number(r) << 16) | (Number(g) << 8) | Number(b)).toString(16).toUpperCase();
};

export const parseVibrantColors = (palette: Palette): ParsedVibrantColors | undefined => {
  if (!palette) {
    return undefined;
  }

  return {
    Vibrant: convertRGBClrToHex({
      rgb: `rgb(${palette.Vibrant?.getRgb().map(color => Math.floor(color).toString())})`,
    }),
    Muted: convertRGBClrToHex({
      rgb: `rgb(${palette.Muted?.getRgb().map(color => Math.floor(color).toString())})`,
    }),
    DarkVibrant: convertRGBClrToHex({
      rgb: `rgb(${palette.DarkVibrant?.getRgb().map(color => Math.floor(color).toString())})`,
    }),
    DarkMuted: convertRGBClrToHex({
      rgb: `rgb(${palette.DarkMuted?.getRgb().map(color => Math.floor(color).toString())})`,
    }),
    LightVibrant: convertRGBClrToHex({
      rgb: `rgb(${palette.LightVibrant?.getRgb().map(color => Math.floor(color).toString())})`,
    }),
    LightMuted: convertRGBClrToHex({
      rgb: `rgb(${palette.LightMuted?.getRgb().map(color => Math.floor(color).toString())})`,
    }),
  };
};

export const getVibrantColors = async (filepath: string) => {
  const palette = await Vibrant.from(fs.readFileSync(filepath)).getPalette();
  return parseVibrantColors(palette);
};
