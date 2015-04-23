module.exports = function (grunt) {
    grunt.initConfig({
        ngAnnotate: {
            options: {
                singleQuotes: false
            },
            app: {
                files: {
                    "./app/scripts/pc.js": [
                        "./app/scripts/app.js",
                        "./app/scripts/components/**/*.js",
                        "./app/scripts/services/**/*.js"
                    ]
                }
            }
        },
        uglify: {
            min: {
                files: {
                    "./app/scripts/pc.min.js": [
                        "./app/scripts/pc.js"
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ng-annotate");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", "run",
    ["ngAnnotate", "uglify"]);
};