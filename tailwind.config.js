/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '310px', 'max': '1023px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'lg': { 'min': '1024px', 'max': '2560px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {
      backgroundImage: {
        bgImgB: 'url(./images/bg-header-desktop.svg)',
        bgImg: 'url(./images/bg-header-mobile.svg)'
      },
      colors: {
        Darkcyan: "hsl(180, 8%, 52%)",
        vDarkcyan: "hsl(180, 14%, 20%)",
        green: "hsl(180, 29%, 50%)",
        background: " hsl(180, 52%, 96%)",
        gCyan: " hsl(180, 31%, 95%)"
      }
    },
  },
  plugins: [],
}

