const { Mixin } = require('hops');
const {WebWorkerPlugin} = require('@remote-ui/web-workers/webpack');


class MyMixin extends Mixin {
  configureBuild(webpackConfig, {jsLoaderConfig}, target) {
    if (target === 'node') {
      return webpackConfig;
    }

    console.log(require.resolve('@remote-ui/web-workers/webpack'))

    webpackConfig.output.globalObject = 'self';
    webpackConfig.plugins.unshift(new WebWorkerPlugin());
    jsLoaderConfig.options.plugins.push(require.resolve('@remote-ui/web-workers/babel'));
    // webpackConfig.module.rules[0].oneOf[0].use[0].options.plugins.push(require.resolve('@remote-ui/web-workers/babel'));

    return webpackConfig;
  }
}

module.exports = MyMixin;
