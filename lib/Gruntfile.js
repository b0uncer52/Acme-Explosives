module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../js/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$", "XMLHttpRequest" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {"loadCats": true, "loadTypes": true, "loadProds": true} //name value pairs, allows to define global vars used in many files.
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
};