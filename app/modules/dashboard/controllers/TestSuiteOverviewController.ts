/// <reference path="../../../../typings/tsd.d.ts" />

'use strict'

import TestSuiteService = require("dashboard/services/TestSuiteService");

class TestSuiteOverviewController implements dashboard.ITestSuiteOverviewController {

    public static ID = 'testSuiteOverviewController';

    public static $inject :Array<string> =
                      [
                          "$scope",
                          TestSuiteService.ID
                      ]
    constructor(public $scope : dashboard.ITestSuiteOverviewScope, private TestSuiteService : dashboard.ITestSuiteService) {
        $scope.vm =this;
        this.getAll();
    }

    getAll() : any {
        return this.TestSuiteService.fetchJSON().then((testSuites : Array<dashboard.ITestSuiteDTO>) => {
            console.log(testSuites);
            console.log("TestSuiteOverviewController");

            this.$scope.testSuites = testSuites;
        })
    }
}

export = TestSuiteOverviewController;