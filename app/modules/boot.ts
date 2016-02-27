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
                                                   SessionStorageModule.SessionStorageModule.moduleName,
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

                        .state("app.sidebar" , {
                            url : "/sidebar" ,
                            template : '<div class="alert alert-success"><h1>check the session storage</h1></div>' +
                             '<input type="button" value="test" ng-click="vm.saveData()">'
                        })

                        .state("app.content" , {
                            url : "/content" ,
                            template : '<div class="alert alert-success"><h2>User Search</h2></div>' +
                                '<user-search data-ng-model="test" class="user-search-plugin"></user-search>'

                        });

                    $urlRouterProvider.otherwise("/sidebar");

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
