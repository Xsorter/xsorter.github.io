module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ' '
      },
        basic: {
        src: ['js/src/*.js'],
        dest: 'js/dist/main.js',
      },
        extras: {
        src: ['css/src/*.css'],
        dest: 'css/dist/main.css',
      }
    },
    uglify: {
      my_target: {
        files: {
        'js/dist/output.min.js': 'js/dist/main.js',
      }
    }
  },
    cssmin: {
      target: {
        files: {
        'css/dist/main.min.css': 'css/dist/main.css',
      }
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};