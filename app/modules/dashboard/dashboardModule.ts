/// <reference path="../../../typings/tsd.d.ts" />

'use strict'

import DashBoardOverviewController = require("dashboard/controllers/DashboardOverviewController");
import TestCaseOverviewController = require("dashboard/controllers/TestCaseOverviewController");
import TestSuiteOverviewController = require("dashboard/controllers/TestSuiteOverviewController");

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

        /*register directives*/

    }
}