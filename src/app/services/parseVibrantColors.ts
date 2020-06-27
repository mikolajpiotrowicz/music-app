import { Palette } from 'node-vibrant/lib/color';

export interface ParsedVibrantColors {
  Vibrant: string;
  Muted: string;
  DarkVibrant: string;
  DarkMuted: string;
  LightVibrant: string;
  LightMuted: string;
}

export const parseVibrantColors = (palette: Palette): ParsedVibrantColors | undefined => {
  if (!palette) {
    return undefined;
  }

  return {
    Vibrant: `rgb(${palette.Vibrant?.getRgb().map(color => Math.floor(color).toString())})`,
    Muted: `rgb(${palette.Muted?.getRgb().map(color => Math.floor(color).toString())})`,
    DarkVibrant: `rgb(${palette.DarkVibrant?.getRgb().map(color => Math.floor(color).toString())})`,
    DarkMuted: `rgb(${palette.DarkMuted?.getRgb().map(color => Math.floor(color).toString())})`,
    LightVibrant: `rgb(${palette.LightVibrant?.getRgb().map(color =>
      Math.floor(color).toString(),
    )})`,
    LightMuted: `rgb(${palette.LightMuted?.getRgb().map(color => Math.floor(color).toString())})`,
  };
};
