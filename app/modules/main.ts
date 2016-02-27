/// <reference path="../../typings/tsd.d.ts"/>

require.config({
    baseUrl : 'modules' ,
    paths : {
        angular : "/node_modules/angular/angular" ,
        "angular-ui-router" : "/node_modules/angular-ui-router/build/angular-ui-router" ,
        "angular-bootstrap" : "/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls" ,
        "angular-bootstrap-tpls" : "/node_modules/angular-ui-bootstrap/dist/ui-bootstrap" ,
        "restangular" : "/node_modules/restangular/src/restangular" ,
        "lodash" : "/node_modules/gulp/node_modules/vinyl-fs/node_modules/glob-watcher/node_modules/gaze/node_modules/globule/node_modules/lodash/dist/lodash.underscore" ,
        "boot" : "./boot"
    } ,
    shim : {
        "angular" : {
            exports : "angular"
        } ,

        "angular-ui-router" : ["angular"] ,

        "angular-bootstrap-tpls" : {
            deps : ["angular"]
        } ,

        "angular-bootstrap" : {
            deps : ["angular" , "angular-bootstrap-tpls"]
        } ,

        "restangular" : {
            deps : ["lodash" , "angular"]
        }
    } ,

    deps : [
        "./boot"
    ]
});
