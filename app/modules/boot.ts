/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-ui-router"/>
/// <amd-dependency path="restangular"/>
/// <amd-dependency path="angular-bootstrap"/>
/// <amd-dependency path="angular-bootstrap-tpls"/>

"use-strict"
import AppCtrl = require("common/ctrl/AppCtrl")
import SessionStorageModule = require("session-storage/SessionStorageModule")
import UserSearchModule = require("user-search/UserSearchModule")


export class Application {
    public static applicationName : string = "app";

    public static dependencies : Array<string> =
                      [
                          "ui.router" ,
                          "restangular" ,
                          "ui.bootstrap" ,
                          SessionStorageModule.SessionStorageModule.moduleName ,
                          UserSearchModule.UserSearchModule.moduleName
                      ];

    public bootstrap() : void {

        this.initModules();

        angular.module(Application.applicationName , Application.dependencies);

        angular.module(Application.applicationName).
            config(["$stateProvider" , "$urlRouterProvider" , "$locationProvider" ,
                ($stateProvider : ng.ui.IStateProvider , $urlRouterProvider : ng.ui.IUrlRouterProvider , $locationProvider : ng.ILocationProvider) => {

                    $stateProvider
                        .state(Application.applicationName , {
                            abstract : true ,
                            url : "" ,
                            templateUrl : "modules/app.html" ,
                            controller : AppCtrl
                        })
                        .state('content' , {
                            url : '/content' ,
                            parent : 'app' ,
                            abstract : true ,
                            templateUrl : 'modules/common/views/content.tpl.html' ,

                        }).state('content.detail' , {
                            url : '' ,
                            views : {
                                'testCase@content' : {
                                    templateUrl : "modules/common/views/testCase.tpl.html"
                                    //controller: 'Graph2Ctrl'
                                } ,
                                'testSuite@content' : {
                                    templateUrl : "modules/common/views/testSuite.tpl.html"
                                    //controller: 'Graph1Ctrl'
                                } ,
                                'tabs@content' : {
                                    templateUrl : "modules/common/views/tabs.tpl.html"
                                    //controller: 'ActionCtrl'
                                }
                            }
                        });

                    $urlRouterProvider.otherwise("/content");

                }]);

        /*register controller*/
        angular.module(Application.applicationName).controller(AppCtrl.ID , AppCtrl);
        /*register controller*/

        /*bootstrap the application*/
        angular.bootstrap(document , [Application.applicationName]);
    }

    private initModules() : void {
        SessionStorageModule.SessionStorageModule.initialize();
        UserSearchModule.UserSearchModule.initialize();
    }
}

new Application().bootstrap();
