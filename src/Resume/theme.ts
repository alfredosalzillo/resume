import { createContext, useContext } from 'react';

type Palette = {
  primary: {
    main: string,
    text: string,
  },
  common: {
    black: string,
    white: string,
  },
  text: string,
  background: string,
}
export type Theme = {
  type: 'light' | 'dark',
  palette: Palette,
}

const defaultTheme: Theme = {
  type: 'light',
  palette: {
    primary: {
      main: '#062065',
      text: '#FFFFFF',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    text: '#000000',
    background: '#FFFFFF'
  }
}

export const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = (): Theme => useContext(ThemeContext);
