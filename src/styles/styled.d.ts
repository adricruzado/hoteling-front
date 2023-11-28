import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      accent: string;
      accentLight: string;
      light: string;
    };
    typography: {
      mainFont: string;
      secondaryFont: string;
    };
  }
}
