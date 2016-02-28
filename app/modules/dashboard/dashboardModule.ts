/// <reference path="../../../typings/tsd.d.ts" />

'use strict'

import DashBoardOverviewController = require("dashboard/controllers/DashboardOverviewController");
import TestCaseOverviewController = require("dashboard/controllers/TestCaseOverviewController");
import TestSuiteOverviewController = require("dashboard/controllers/TestSuiteOverviewController");
import TestSuiteService = require("dashboard/services/TestSuiteService");
import TestCaseService = require("dashboard/services/TestCaseService");

export class DashboardModule {
    public static moduleName : string = "dashboard";

    public static initialize() : void {

        angular.module(DashboardModule.moduleName , []);

        /* register controllers */
        angular.module(DashboardModule.moduleName)
            .controller(DashBoardOverviewController.ID , DashBoardOverviewController)
            .controller(TestCaseOverviewController.ID , TestCaseOverviewController)
            .controller(TestSuiteOverviewController.ID , TestSuiteOverviewController);


        /* register services */
        angular.module(DashboardModule.moduleName).factory(TestSuiteService.ID , [
            "$http" , ($http : ng.IHttpService) => {
                return new TestSuiteService($http);
            }]);

        angular.module(DashboardModule.moduleName).factory(TestCaseService.ID , [
            "$http" , ($http : ng.IHttpService) => {
                return new TestCaseService($http);
            }]);

        /*register directives*/

    }
}