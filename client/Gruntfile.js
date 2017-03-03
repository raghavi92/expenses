module.exports = function (grunt)  {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		browserify: {
			options: {
				debug: true,
				transform: [['babelify',{presets: ['es2015','react']}]]
			},
			www: {
				files: [{
                    "expand": true,
                    "cwd": "app/",
                    "src": ["**/*.js",'**/*.jsx'],
                    "dest": "www/",
                    "ext": ".js"
                }]
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, flatten: true, cwd:'app/', src: '**.min.css', dest: 'www/', filter: 'isFile'},
					{src: 'app/index.html', dest: 'www/index.html'}
				]
			}
		},
		watch: {
			html: {
				files: ['app/index.html'],
				tasks: ['copy']
			},
			js: {
				files: ['app/**/*.{jsx,js}'],
				tasks: ['browserify']
			},
			styles: {
				files: ['app/styles/*.scss'],
				tasks: ['sass']
			}
		},
		sass: {
			www: {
				files: [{
					expand: true,
					cwd: "app/styles/",
					src: ["*.scss"],
					dest: "www/",
					ext: ".css"
				}]
			}
		},
		connect: {
			server: {
				options: {
					base: 'www'
				}
			}
		}
	});
	grunt.registerTask('default', ['copy','sass', 'browserify:www', 'connect', 'watch']);
};
