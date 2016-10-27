'use strict';

module.exports = function(config) {
    config.set({
        //logLevel: config.LOG_DEBUG,
        basePath: '',

        frameworks: ['jspm', 'mocha', 'chai'],

        preprocessors: {
          'public/!(jspm_packages)/**/*.js': ['typescript', 'sourcemap', 'coverage'],
          'public/fswd.js': ['typescript', 'sourcemap', 'coverage'],
          'test/client/**/*.js': ['typescript']
        },

        exclude: [], // hmm??

        jspm: {
          meta: {
            'jspm_packages/github/angular/angular.js': {
              format:  'global',
              exports: 'angular'
            },
            'jspm_packages/gitub/angular/angular-mocks.js': {
              format: 'global',
              deps:   'angular'
            }
          },
          loadFiles: ['test/client/**/*-spec.js'],
          serveFiles: ['public/**/*.js']
        },

        proxies: {
          '/public': '/base/public',
          '/test': '/base/test',
          '/jspm_packages': '/base/public/jspm_packages'
        },

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
