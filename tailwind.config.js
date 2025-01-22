/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#247BAF',
          hover: '#1d6291',
          light: '#E5F0F7'
        },
        success: {
          DEFAULT: '#217346',
          hover: '#1a5c38',
          light: '#E8F2EC'
        },
        danger: {
          DEFAULT: '#F24D4F',
          hover: '#e13436',
          light: '#FDE7E7'
        },
        neutral: {
          DEFAULT: '#E0E1E0',
          hover: '#d1d2d1',
          dark: '#4A4B4A'
        },
        accent: {
          DEFAULT: '#FFE066',
          hover: '#ffd733',
          light: '#FFF5CC',
          secondary: '#FF9F66'  // New warm accent color
        }
      }
    },
  },
  plugins: [],
}

