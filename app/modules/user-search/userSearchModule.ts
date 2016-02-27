/// <reference path="../../../typings/tsd.d.ts" />

'use strict'

import UserSearchDirective = require("user-search/directives/UserSearchDirective");
import UserSearchService = require("user-search/services/UserSearchDIrectiveService");
import UserSearchController = require("user-search/controllers/UserSearchDirectiveController");

export class UserSearchModule {
    public static moduleName : string = "user-search";

    public static initialize() : void {

        angular.module(UserSearchModule.moduleName , []);

        /* register controllers */
        angular.module(UserSearchModule.moduleName).controller(UserSearchController.ID , UserSearchController)

        /* register services */
        angular.module(UserSearchModule.moduleName).factory(UserSearchService.ID , [
            "$http" , ($http : ng.IHttpService) => {
                return new UserSearchService($http);
            }]);

        /*register directives*/

        angular.module(UserSearchModule.moduleName).directive(UserSearchDirective.ID , () => {
            return new UserSearchDirective()
        });
    }
}