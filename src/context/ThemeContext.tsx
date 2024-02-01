import { createContext } from "react";
import { DefaultTheme } from "@react-navigation/native";

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00B7C5',
    background: '#F5F6FA',
    card: '#131A37',
  },
};

export const ThemeContext = createContext(defaultTheme);