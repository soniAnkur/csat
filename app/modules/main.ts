/// <reference path="../../typings/tsd.d.ts"/>


require.config({
    baseUrl : 'modules',
    paths : {
        angular : "/node_modules/angular/angular",
        "angular-ui-router" : "/node_modules/angular-ui-router/build/angular-ui-router",
        "restangular" : "/node_modules/restangular/src/restangular",
        "lodash" : "/node_modules/gulp/node_modules/vinyl-fs/node_modules/glob-watcher/node_modules/gaze/node_modules/globule/node_modules/lodash/dist/lodash.underscore",
        "boot":"./boot"
    },
    shim : {
        "angular" : {
            exports : "angular"
        },

        "angular-ui-router" : ["angular"],

        "restangular" : {
            deps : ["lodash", "angular"]
        }
    },

    deps : [
        "./boot"
        ]
});

requirejs(["boot"],function(boot){
    new boot.Application().bootstrap();
});