/// <reference path="../../../../typings/tsd.d.ts" />

'use strict'

class TestSuiteOverviewController implements dashboard.ITestSuiteOverviewController {

    public static ID = 'testSuiteOverviewController';

    public static $inject :Array<string> =
                      [
                          "$scope"
                      ]
    constructor(public $scope : dashboard.ITestSuiteOverviewScope) {
        $scope.vm =this;
    }
}

export = TestSuiteOverviewController;