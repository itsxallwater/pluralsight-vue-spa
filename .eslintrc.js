module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module"
  },
  extends: "standard",
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"]
  },
  plugins: ["html"]
};
