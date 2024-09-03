/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      keyframes: {
        'bg-slide-1': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        'bg-slide-2': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },

        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },

      animation: {
        'bg-slide-1': 'bg-slide-1 80s linear -80s infinite',
        'bg-slide-2': 'bg-slide-2 80s linear -40s infinite',
        'bg-slide-1-reverse': 'bg-slide-2 80s linear -40s infinite reverse',
        'bg-slide-2-reverse': 'bg-slide-2 80s linear -40s infinite reverse',
        first: "moveVertical 5s ease infinite",
        second: "moveInCircle 12s reverse infinite",
        third: "moveInCircle 17s linear infinite",
        fourth: "moveHorizontal 7s ease infinite",
        fifth: "moveInCircle 22s ease infinite",
      },
    },
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
