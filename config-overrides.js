const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin('babel-plugin-component-identification', config);

  return config;
};
