const defaultTheme = require('tailwindcss/defaultTheme');

const secondary = '#1134B1';
const green = {
  emerald: '#0F9C1D',
  lime: '#D0F224',
  DEFAULT: '#A5E3B9',
  primary: '#95BF47',
};
const blue = {
  sky: '#79DFFF',
};
const white = {
  DEFAULT: '#FFFFFF',
  'off-white': '#F4F4F4',
};
const ink = '#000000';
const gray = {
  DEFAULT: '#3D3F40',
  2: '#8D9091',
  3: '#CCCCCC',
  4: '#F4F4F4',
};
const reverse = '#FFFFFF';
const red = {
  1: '#E96A4E',
  2: '#E73E4D',
};
const shopPayPurple = '#5A31F4';

module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: false,
  variants: {
    extend: {},
  },
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: '370px',
    },
    extend: {
      boxShadow: {
        DEFAULT: '6px 6px 30px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        xl: '3.5rem',
      },
      spacing: {
        xs: '2px',
        sm: '4px',
        med: '8px',
        base: '12px',
        lg: '16px',
        xl: '24px',
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '30px',
        6: '40px',
        98: '37rem',
      },
      strokeWidth: {
        3: '3',
        4: '4',
      },
      maxWidth: {
        '1/3': '33.3%',
      },
      maxHeight: {
        100: '40rem',
      },
      gridTemplateColumns: {
        checkout: ' 100px auto;',
      },
      colors: {
        primary: green.primary,
        secondary,
        white,
        green,
        ink,
        gray,
        red,
        blue,
        'shop-pay-purple': shopPayPurple,
      },
      fontFamily: {
        title: ['Apfel Grotezk Bold'],
        primary: ['Apfel Grotezk'],
        paragraph: ['Shopify Sans'],
      },
      fontSize: {
        sm: ['14px', '16.8px'],
        base: ['16px', '22.4px'],
        lg: ['20px', '23px'],
        xl: ['28px', '33.6px'],
        '2xl': ['42px', '42px'],
        '3xl': ['58px', '52.2px'],
        '4xl': ['80px', '75.2px'],
        '5xl': ['120px', '108px'],
        mbase: ['16px', '20.8px'],
        mlg: ['18px', '16.2px'],
        mxl: ['22px', '26.4px'],
        m2xl: ['24px', '24px'],
        m3xl: ['28px', '33.6px'],
        m4xl: ['34px', '34px'],
        m5xl: ['42px', '37.8px'],
      },
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        'primary-start': blue.sky,
        'primary-end': reverse,
        'red-start': 'red-1',
        'red-end': 'red-2',
      }),
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: green.primary,
        secondary,
      }),
      backgroundImage: {
        'blob-image': "url('/src/assets/images/blob.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
