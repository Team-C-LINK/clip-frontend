'use client';

import { ThemeProvider } from 'styled-components';
import { PALETTE } from './Palette';

export default function PaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={PALETTE}>{children}</ThemeProvider>;
}
