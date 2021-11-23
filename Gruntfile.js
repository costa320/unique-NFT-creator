module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    bump: {
      options: {
        files: ["package.json"],
        updateConfigs: [],
        commit: false, // dont commit
        commitMessage: "Release v%VERSION%",
        commitFiles: ["package.json"],
        createTag: true,
        tagName: "v%VERSION%",
        tagMessage: "Version %VERSION%",
        push: false, // dont push
        pushTo: "",
        gitDescribeOptions: "--tags --always --abbrev=1 --dirty=-d",
        globalReplace: false,
        prereleaseName: false,
        metadata: "",
        regExp: false,
      },
    },
    move: {
      /*  distVersionUpdate: {
          src: "./dist",
          dest: "./dist_<%= pkg.version %>",
        },
        demoVersionFileUpdate: {
          src: [""],
          dest: "./demo/version_<%= pkg.version %>",
        }, */
    },

    copy: {
      /* I18Locales: {
        files: [
          {
            expand: true,
            cwd: "public/locales",
            src: "**",
            dest: "dist/locales/",
          },
        ],
      }, */
      /*  demoMain: {
        files: [
          { expand: true, src: "assets/*", dest: "demo/" },
          { expand: true, src: "loader/*", dest: "demo/" },
          {
            expand: true,
            cwd: "dist/<%= pkg.version %>/",
            src: "**",
            dest: "demo/build/",
          },
        ],
      },
      docsInBuild: {
        files: [{ expand: true, src: "doc/**", dest: "build/" }],
      },
      newBuildInDist: {
        files: [
          {
            expand: true,
            src: "build/**",
            dest: "dist/",
          },
        ],
      }, */
    },
    clean: {
      /* deleteDist: ["dist_<%= pkg.version %>"], */
    },
    rename: {
      /*  demoFolderVersion: {
          files: [
            {
              src: ["demo/version_*.md"],
              dest: "demo/version_<%= pkg.version %>.md",
            },
          ],
        },
        newBuildVersionUpdate: {
          files: [
            {
              src: "./dist/build",
              dest: "./dist/<%= pkg.version %>",
            },
          ],
        },
        newDocVersionUpdate: {
          files: [
            {
              src: "./docs/doc",
              dest: "./docs/<%= pkg.version %>",
            },
          ],
        }, */
    },
  });

  /* loading external module */
  grunt.loadNpmTasks("grunt-bump");
  grunt.loadNpmTasks("grunt-move");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-rename");
  // Default task(s).
  /*   grunt.registerTask("default", ["move:distVersionUpdate"]); */
};

/* grunt bump
  >> Version bumped to 0.0.2
  
  grunt bump:patch
  >> Version bumped to 0.0.3
  
  grunt bump:minor
  >> Version bumped to 0.1.0
  
  grunt bump
  >> Version bumped to 0.1.1
  
  grunt bump:major
  >> Version bumped to 1.0.0 */
