import { colord } from 'colord'

export function getColor(color: string) {
  return {
    DEFAULT: color,
    hover: colord(color).lighten(0.1).toHex(),
    pressed: colord(color).darken(0.1).toHex(),
    disabled: colord(color).lighten(0.1).toHex(),
    text: colord(color).brightness() >= 0.8 ? '#000' : '#fff',
    textDisabled: colord(colord(color).brightness() >= 0.8 ? '#000' : '#fff').grayscale().toHex(),
  }
}
