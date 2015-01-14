/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    js: {
      vendor: [
        "vendor/bower/zepto/zepto.js",
        "vendor/bower/underscore/underscore.js",
        "vendor/bower/backbone/backbone.js"
      ],
      app: [
        "app/js/structure.js",
        "app/js/models/**/*.js",
        "app/js/views/**/*.js",
        "app/js/app.js"
      ]
    }

    // As an example, to override the file patterns for
    // the order in which to load third party JS libs:
    //
    // js: {
    //   vendor: [
    //     "vendor/js/underscore.js",
    //     "vendor/js/**/*.js"
    //   ]
    // }

  };
};
