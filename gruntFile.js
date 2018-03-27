module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'main.min.js': ['main.js']
				}
			}
		}
	});

		grunt.registerTask('weather', ['uglify']);

	/* grunt.initConfig({
		uglify: {
			my_target: {
				options: {
					sourceMap: true,
					sourceMapName: 'path/to/sourcemap.map'
					},
				files: {
				'dest/output.min.js': ['src/input.js']
				}
			}
		}
	});*/
} 

