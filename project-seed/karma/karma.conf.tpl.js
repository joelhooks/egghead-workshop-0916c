module.exports = function ( karma ) {
  karma.set({
    /** 
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'build/vendor.js',
      //start
      ,//end
      'src/**/*.js',
      //'build/app/**/*.js',
      //'build/common/**/*.js',
      {pattern: 'data/**/*.json', watched: true, served: true, included: false}
    ],
    exclude: [
      'src/assets/**/*.js',
      'src/modules/**/*.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: ['karma-htmlfile-reporter', 'karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-osx-reporter', 'karma-junit-reporter' ],

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',
    logLevel: karma.LOG_DEBUG,
    /** 
     * Disable file watching by default.
     */
    autoWatch: true,
    singleRun: false,

    reporters: ['progress', 'html'],

    htmlReporter: {
      outputFile: 'tests/units.html'
    },



    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'Chrome'
    ]
  });
};

