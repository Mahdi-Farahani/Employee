import defaultTheme from './default';
import { createMuiTheme } from '@material-ui/core';

const overrides = {
  typography: {
    body2: {
      fontSize: '16px',
    },
    body1: {
      fontSize: '14px',
    },
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.64rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.285rem',
    },
    h6: {
      fontSize: '1.142rem',
    },
  },
};

export default {
  default: createMuiTheme({ ...defaultTheme, ...overrides }),
};
