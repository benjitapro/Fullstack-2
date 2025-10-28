const webpackConfig = require('./webpack.config.cjs');

module.exports = function(config) {
  config.set({
    // Frameworks que usaremos
    frameworks: ['jasmine', 'webpack'],

    files: [
      'src/**/*.test.js', 
      'src/**/*.test.jsx'
    ],

    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap'],
      'src/**/*.test.jsx': ['webpack', 'sourcemap']
    },

    // conf de Webpack
    webpack: webpackConfig,

    // reportes
    reporters: ['progress', 'coverage'],
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage', 
      'karma-sourcemap-loader'
    ],

    coverageReporter: {
      reporters:[
        {type:'text-summary'},
        { type:'html', dir: 'coverage/'}
      ]
    },
    
    browsers: ['Chrome'], 

    singleRun: true, 

    logLevel: config.LOG_INFO,
  });
};