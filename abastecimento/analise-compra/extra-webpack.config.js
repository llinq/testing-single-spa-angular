const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  config.output.jsonpFunction = '@mtcorp/abastecimento/analise-compra';
  
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.externals.push(
    /^@mtcorp\/*/,
  );

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
