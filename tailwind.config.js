module.exports = {
  purge: {
    content: ["./app/**/*.html.haml", "./app/**/*.js", "./app/**/*.jsx"],
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
