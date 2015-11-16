module.exports = function(grunt) {
  require('time-grunt')(grunt);
  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'],
      options:{
        esnext: true
      }
    },
    sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss'
        }
      }
    },
    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5, 
        title: "Portfolio", 
        success: true, 
        duration: 3 
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.task.run('notify_hooks');
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};