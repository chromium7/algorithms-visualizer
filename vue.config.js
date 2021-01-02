module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Algorithms Visualizer";
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@/styles/base.scss';"
      }
    }
  }
};
