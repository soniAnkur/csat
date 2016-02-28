/// <reference path="../../../../typings/tsd.d.ts" />

'use strict'

import TestCaseService = require("dashboard/services/TestCaseService");

class TestCaseOverviewController implements dashboard.ITestCaseOverviewController {

    public static ID = 'testCaseOverviewController';

    public static $inject :Array<string> =
                      [
                          "$scope",
                          TestCaseService.ID
                      ]
    constructor(public $scope : dashboard.ITestCaseOverviewScope, private TestCaseService : dashboard.ITestCaseService) {
        $scope.vm =this;
        this.getAll();
    }

    getAll() : any {
        return this.TestCaseService.fetchJSON().then((testCases : Array<dashboard.ITestCaseDTO>) => {
            this.$scope.testCases = testCases;
        });
    }


}

export = TestCaseOverviewController;