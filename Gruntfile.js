module.exports = function(grunt){
    
    //CONFIGURE
    grunt.initConfig({
        nodewebkit: {
            options: {
                build_dir: './build', // Where the build version of my node-webkit app is saved
                mac: false, // We don't need mac
                win: true, // We want to build it for win
                linux32: false, // We don't need linux32
                linux64: false // We don't need linux64
            },
            src: ['./src/**/*'] // Your node-webkit app
        },
    });
    
    //LOAD
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    
    //TASKS
    grunt.registerTask('default', ['nodewebkit']);    
    
};