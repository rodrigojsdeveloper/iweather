import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      colors: {
        gray: {
          100: '#FAFAFA',
          200: '#BFBFD4',
          300: '#ABABC4',
          400: '#7F7F98',
          500: '#3B3B54',
          600: '#1E1E29',
          700: '#1C1C27',
          800: '#16161F',
          900: '#13131A',
        },
        white: '#FFFFFF',
        blueLight: '#8FB2F5',
        transparent: 'transparent',
      },
      maxWidth: {
        56: '56px',
        431: '431px',
        716: '716px',
      },
      width: {
        67: '67px',
      },
      height: {
        49: '49px',
        54: '54px',
        56: '56px',
        64: '64px',
        67: '67px',
        176: '176px',
        276: '276px',
        292: '292px',
        304: '304px',
        396: '396px',
        398: '398px',
        586: '586px',
        690: '690px',
      },
      borderRadius: {
        def: '8px',
      },
      backgroundImage: {
        backgroundWeather: "url('./assets/background.svg')",
      },
      fontSize: {
        'heading-hg': [
          '96px',
          {
            lineHeight: '100%',
            fontWeight: 'font-extrabold',
          },
        ],
        'heading-xl': [
          '48px',
          {
            lineHeight: '120%',
            fontWeight: 'font-extrabold',
          },
        ],
        'heading-lg': [
          '32px',
          {
            lineHeight: '140%',
            fontWeight: 'font-bold',
          },
        ],
        'heading-md': [
          '20px',
          {
            lineHeight: '140%',
            fontWeight: 'font-bold',
          },
        ],
        'heading-sm': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: 'font-bold',
          },
        ],
        'heading-xs': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: 'font-bold',
          },
        ],
        't-lg': [
          '20px',
          {
            lineHeight: '140%',
            fontWeight: 'font-medium',
          },
        ],
        't-md': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: 'font-medium',
          },
        ],
        't-sm': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: 'font-medium',
          },
        ],
        't-xs': [
          '12px',
          {
            lineHeight: '140%',
            fontWeight: 'font-medium',
          },
        ],
      },
      boxShadow: {
        def: '0px 4px 30px 0px #00000040',
      },
    },
  },
  plugins: [],
}
export default config
