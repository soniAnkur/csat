/// <reference path="../../../../typings/tsd.d.ts" />

'use strict'

class DashboardOverviewController implements dashboard.IDashboardOverviewController {

    public static ID = 'dashBoardOverviewController';

    public static $inject :Array<string> =
                                          [
                                              "$scope"
                                          ]
    constructor(public $scope : dashboard.IDashboardOverviewScope) {
        $scope.vm =this;
    }
}

export = DashboardOverviewController;