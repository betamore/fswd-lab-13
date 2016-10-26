'use strict';

module.exports = function(config) {
    config.set({
        //logLevel: config.LOG_DEBUG,
        basePath: '',

        frameworks: ['jspm', 'mocha', 'chai'],

        preprocessors: {
          'public/!(jspm_packages)/**/*.js': ['typescript', 'sourcemap', 'coverage'],
          'public/*.js': ['typescript', 'sourcemap', 'coverage'],
          'test/client/**/*.js': ['typescript']
        },

        // files: [
        //     'system.js',
        //     'config.js'
        // ],

        exclude: [], // hmm??

        jspm: {
          // config: 'public/config.js',
          loadFiles: ['test/client/**/*-spec.js'],
          serveFiles: ['public/**/*.js']
        },

        proxies: {
          '/test/': '/base/test/',
          '/jspm_packages/': '/base/public/jspm_packages/',
          '/public': '/base/public/',
        },
        // proxies: {
        //   '/public': '/base/public',
        //   '/test': '/base/test',
        //   '/jspm_packages': '/base/public/jspm_packages'
        // },

        port: 9876,

        colors: true,

        autoWatch: true,

        browsers: ['PhantomJS'],

        captureTimeout: 60000,

        singleRun: true,

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            moduleName: 'templates'
        },

        reporters: ['spec', 'coverage'],

        coverageReporter: {
            // instrumenters: { isparta: require('isparta') },
            // instrumenter: {
            //     '**/*.js': 'isparta'
            // },
            dir: 'coverage',
            reporters: [
                {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'coverage.xml'
                },
                {
                    type: 'lcov'
                },
                {
                    type: 'lcovonly',
                    subdir: '.',
                    file: 'lcov.info'
                }
            ]
        }
    });
};
