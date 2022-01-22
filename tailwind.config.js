module.exports = {
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.html.haml",
      "./app/**/*.js", "./app/**/*.jsx"],
    options: {
      safelist: {
        greedy: ["/safe$/"],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
