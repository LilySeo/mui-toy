import { createTheme } from '@mui/material/styles';
import { defaultComponent } from './components';
import { darkPalette, lightPalette } from './palette';
import { defaultTypography } from './typography';

const darkTheme = createTheme(
  Object.assign(
    darkPalette,
    defaultTypography,
    defaultComponent(darkPalette.palette),
    {
      shape: {
        borderRadius: 5,
      },
    },
    {
      shadows: ['none', '0 1px 4px 0 rgba(0, 0, 0, 0.1)'],
    },
  ),
);

const lightTheme = createTheme(
  Object.assign(
    lightPalette,
    defaultTypography,
    defaultComponent(lightPalette.palette),
    {
      shape: {
        borderRadius: 5,
      },
    },
    {
      shadows: ['none', '0 1px 4px 0 rgba(0, 0, 0, 0.1)'],
    },
  ),
);

export { darkTheme, lightTheme };
