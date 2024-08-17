/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: ['active'],
      'colors': {
        light: '#f5f7fe',
        transparent: '#ffffff00',
        primary: '#19578e',
        gehra: '#276678',
        neela: '#1687A7',
        asmani: '#D3OEA',
        chitta: '#F6F5F5'
      },
    },
  },
  plugins: [],
};
