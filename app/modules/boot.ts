/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-ui-router"/>
/// <amd-dependency path="restangular"/>

"use-strict"
import AppCtrl = require("common/ctrl/AppCtrl")
import SessionStorageModule = require("session-storage/SessionStorageModule")


export class Application {
    public static applicationName : string = "app";

    public bootstrap() : void {

        this.initModules();

        angular.module(Application.applicationName ,
            [
                "ui.router" ,
                "restangular" ,
                SessionStorageModule.SessionStorageModule.moduleName
            ]);

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

                        .state("app.sidebar" , {
                            url : "/sidebar" ,
                            template : '<div class="alert alert-success"><h1>Hello this is the welcome page</h1></div>'
                        })

                        .state("app.content" , {
                            url : "/content" ,
                            template : '<div class="alert alert-success"><h1>I am in content 2</h1></div>' +
                                        '<input type="button" value="test" ng-click="vm.saveData()">'
                        });

                    $urlRouterProvider.otherwise("/sidebar");

                }]);

        /*register controller*/
        angular.module(Application.applicationName).controller(AppCtrl.ID , AppCtrl);
        /*register controller*/

        /*bootstarp the application*/
        angular.bootstrap(document , [Application.applicationName]);
    }

    private initModules() : void {
        SessionStorageModule.SessionStorageModule.initialize();
    }
}
