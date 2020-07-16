import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { StringOrNumber } from '../types/StringOrNumber';

export function formatDate(date: Date, formatStr: string) {
  return format(date, formatStr, {
    locale: pt,
  });
}

export function firstLetterToUpperCase(text:string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getOpenWeatherIconUrl(icon:string) {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

export function hexToRgba(hex: string, A?: number) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgbObj = result ? {
    R: parseInt(result[1], 16),
    G: parseInt(result[2], 16),
    B: parseInt(result[3], 16),
  } : null;
  let colorString: string | null = null;
  if (rgbObj) {
    const { R, G, B } = rgbObj;
    colorString = `rgba(${R}, ${G}, ${B}, ${A !== undefined ? A : 1})`;
  }
  return colorString;
}

export function getFormattedDegrees(degrees: number) {
  return degrees.toFixed(1);
}
