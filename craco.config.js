// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-100vh-fix"),
      ],
    },
  },
};
