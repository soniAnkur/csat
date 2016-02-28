/// <reference path="../../../../typings/tsd.d.ts" />

'use strict'

class TestCaseOverviewController implements dashboard.ITestCaseOverviewController {

    public static ID = 'testCaseOverviewController';

    public static $inject :Array<string> =
                      [
                          "$scope"
                      ]
    constructor(public $scope : dashboard.ITestCaseOverviewScope) {
        $scope.vm =this;
    }
}

export = TestCaseOverviewController;