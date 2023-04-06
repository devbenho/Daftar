module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          0: "#FFFFFF",
          50: "#E9F7FA",
          75: "#A6DFE8",
          100: "#82D1DF",
          200: "#4CBDD1",
          300: "#27B0C8",
          400: "#1B7B8C",
          500: "#186B7A",
        },

        text: {
          meta: "#5D6B82",
        },

        fontFamily: {
          custom: ['Poppins', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
