import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%',
          scrollbarColor: '#999997 #999997',
          scrollbarWidth: 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#999997',
          borderRadius: '2px 0px 0px 2px',
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          fontFamily: 'Poppins, sans-serif',
          backgroundColor: '#151521',
        },
        button: {
          fontFamily: 'Poppins, sans-serif',
        },
        ul: {
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        },
        input: {
          fontFamily: 'Poppins, sans-serif',
          outline: 'none',
          '&:focus': {
            outline: 'none',
          },
          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            margin: 0,
          },
          '&[type=number]': {
            '-webkit-appearance': 'textfield',
            '-moz-appearance': 'textfield',
          },
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export const colors = {
  blackPrimary: '#181c32',
  blackSecondary: '#151521',
  grayPrimary: '#474761',
  graySecondary: '#1e1e2d',
  grayTertiary: '#1b1b29',
  grayQuaternary: '#92929f',
  grayQuinary: '#2b2b40',
  graySenary: '#323248',
  graySeptenary: '#6d6d80',
  grayOctonary: '#565674',
  redPrimary: '#f64e60',
  whitePrimary: '#fff',
  bluePrimary: '#3699ff',
  blueSecondary: '#187de4',
  blueTertiary: '#00b2ff',
  blueQuaternary: '#212e48',
  greenPrimary: '#0bb783',
};

export const fonts = {
  size: {
    desktop: {
      h1: 23,
      h2: 19.5,
      p: 16,
      input: 15,
      inputLabel: 14,
      inputError: 12,
      button: 15,
      span: 15,
    },
    mobile: {
      h1: 17,
      h2: 16,
      p: 15,
      input: 14,
      inputLabel: 13,
      inputError: 11,
      button: 14,
      span: 14,
    },
  },
  weight: {
    desktop: {
      h1: 600,
      h2: 600,
      p: 500,
      input: 500,
      inputLabel: 600,
      inputError: 400,
      button: 500,
      span: 600,
    },
    mobile: {
      h1: 600,
      h2: 600,
      p: 500,
      input: 500,
      inputLabel: 600,
      inputError: 400,
      button: 500,
      span: 600,
    },
  },
  lineHeight: {
    desktop: {
      h1: '27px',
      h2: '29px',
      p: '24px',
      input: '23px',
      inputLabel: '21px',
      inputError: '18px',
      button: '23px',
      span: '22.5px',
    },
    mobile: {
      h1: '20px',
      h2: '24px',
      p: '22px',
      input: '21px',
      inputLabel: '19px',
      inputError: '16px',
      button: '21px',
      span: '21px',
    },
  },
};

export default theme;
