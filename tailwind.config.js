/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'custom-radial': 'radial-gradient(circle at left center, #5C45FD, black)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          dark:'#332688',
          DEFAULT: '#5C45FD',
        },
        secondary: '#A89BFF',
      },
      boxShadow: {
        'custom': '0 12px 20px -5px rgba(92, 69, 253, 0.75), 0 8px 10px -5px rgba(92, 69, 253, 0.5)', // Adjust as needed
      },
      dropShadow: {
        'custom': '0px 7px 20px #5C45FD',
        'lg':'0px 7px 20px #5C45FD',
        'illust': '20px 20px 60px #5C45FD'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 27s linear infinite',
      },
    },
  },
  plugins: [],
}
