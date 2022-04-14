module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/bg-hero.jpg')",
        'work': "url('/src/assets/bg-works.jpg')"
      }
    },
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
};
