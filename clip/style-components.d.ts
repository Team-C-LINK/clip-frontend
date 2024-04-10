import 'styled-components';
import { ThemeType } from './src/app/Provider/PaletteProvider/Palette';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
