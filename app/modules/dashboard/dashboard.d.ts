/// <reference path="../../../typings/tsd.d.ts"/>

declare module dashboard {

    /*services type defination*/

    interface ITestCaseService extends common.ICommonService {

    }

    interface ITestSuiteService extends common.ICommonService {

    }

    /*controllers type defination*/

    interface ITestCaseOverviewController extends common.IBaseCtrl {

    }

    interface ITestSuiteOverviewController extends common.IBaseCtrl {

    }

    interface IDashboardOverviewController extends common.IBaseCtrl {

    }

    /*scopes type defination*/

    interface ITestCaseOverviewScope extends common.IBaseScope {
        vm : ITestCaseOverviewController;
    }

    interface ITestSuiteOverviewScope extends common.IBaseScope {
        vm : ITestSuiteOverviewController;
    }

    interface IDashboardOverviewScope extends common.IBaseScope {
        vm : IDashboardOverviewController;
    }




}
