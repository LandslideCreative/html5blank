module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/foundation/**/*.js', 'src/vendor/**/*.js', 'src/scripts.js'],
        dest: 'dev/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dev/<%= pkg.name %>-unprefixed.css' : 'scss/app.scss'
        }
      }
    },

    autoprefixer: {
      single_file: {
        src: 'dev/<%= pkg.name %>-unprefixed.css',
        dest: 'dist/<%= pkg.name %>.min.css'
      }
    },

    watch: {
      grunt: { files: ['Grunfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      styles: {
        files: 'dev/<%= pkg.name %>-unprefixed.css',
        tasks: ['autoprefixer']
      },

      javascript: {
        files: ['src/foundation/**/*.js', 'src/vendor/**/*.js', 'src/scripts.js'],
        tasks: ['concat', 'uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  
  grunt.registerTask('default', ['sass', 'autoprefixer', 'concat', 'uglify', 'watch']);
}