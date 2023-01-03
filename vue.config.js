const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production' ? 'https://zer0b2.github.io/new-vue-app/docs/' : '/',
  indexPath: 'https://zer0b2.github.io/new-vue-app/docs/'
});
