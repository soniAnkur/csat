/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-ui-router"/>
/// <amd-dependency path="restangular"/>
/// <amd-dependency path="angular-bootstrap"/>
/// <amd-dependency path="angular-bootstrap-tpls"/>

"use-strict"
import AppCtrl = require("common/ctrl/AppCtrl")
//import RestangularProvider = require("common/providers/RestDataProvider")
import SessionStorageModule = require("session-storage/SessionStorageModule")
import UserSearchModule = require("user-search/UserSearchModule")
import DashboardModule = require("dashboard/DashboardModule")
import DashBoardOverviewController = require("dashboard/controllers/DashboardOverviewController");
import TestCaseOverviewController = require("dashboard/controllers/TestCaseOverviewController");
import TestSuiteOverviewController = require("dashboard/controllers/TestSuiteOverviewController");


export class Application {
    public static applicationName : string = "app";

    public static dependencies : Array<string> =
                      [
                          "ui.router" ,
                          "restangular" ,
                          "ui.bootstrap" ,
                          SessionStorageModule.SessionStorageModule.moduleName ,
                          UserSearchModule.UserSearchModule.moduleName,
                          DashboardModule.DashboardModule.moduleName
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
                        .state('dashboard' , {
                            url : '/dashboard' ,
                            parent : 'app' ,
                            abstract : true ,
                            templateUrl : 'modules/common/views/content.tpl.html' ,
                            controller : DashBoardOverviewController

                        }).state('dashboard.detail' , {
                            url : '' ,
                            views : {
                                'testCase@dashboard' : {
                                    templateUrl : "modules/dashboard/partials/testCase.tpl.html",
                                    controller: TestCaseOverviewController
                                } ,
                                'testSuite@dashboard' : {
                                    templateUrl : "modules/dashboard/partials/testSuite.tpl.html",
                                    controller: TestSuiteOverviewController
                                } ,
                                'tabs@dashboard' : {
                                    templateUrl : "modules/dashboard/partials/tabs.tpl.html"
                                    //controller: 'ActionCtrl'
                                }
                            }
                        });

                    $urlRouterProvider.otherwise("/dashboard");

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
        DashboardModule.DashboardModule.initialize();
    }
}

new Application().bootstrap();
