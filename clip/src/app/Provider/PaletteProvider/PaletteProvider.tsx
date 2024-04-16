'use client';

import { ThemeProvider } from 'styled-components';
import { THEME } from './Palette';

export default function PaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
}
