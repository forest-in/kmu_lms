module.exports = {
  // publicPath: './',
  // assetsDir: './',

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/assets/lms-scss/variable.scss';
        `
      }
    }
  }


}