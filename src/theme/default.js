import tinycolor from 'tinycolor2';

//Color
const primary = '#654062';
const secondary = '#35e6a5';
const warning = '#FFC260';
const success = '#3CD4A0';
const info = '#9013FE';

const lightenRate = 7.5;
const darkenRate = 15;

export default {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: '#FFFFFF',
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    text: {
      primary: '#4A4A4A',
      secondary: '#6E6E6E',
      hint: '#B9B9B9',
    },
    background: {
      default: '#F6F7FF',
      light: '#F3F5FF',
    },
  },

  //overrides Methods
  overrides: {
    MuiTableCell: {
      head: {
        color: '#fff',
        backgroundColor: '#654062',
      },
    },

    MuiPaper: {
      root: {
        '&:hover': {
          boxShadow: '0px 0px 18px 0px',
          backgroundColor: '#35e6a5',
        },
      },
    },

    MuiCardMedia: {
      root: {
        transition: '.4s ease',
        '&:hover ': {
          opacity: '0.6',
        },
      },
    },
  },
};
