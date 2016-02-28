/// <reference path="../../../typings/tsd.d.ts"/>

declare module dashboard {

    /*services type defination*/

    interface ITestCaseService extends common.ICommonService {
        fetchJSON() : ng.IPromise<any>;
    }

    interface ITestSuiteService extends common.ICommonService {
        fetchJSON() : ng.IPromise<any>;
    }

    /*controllers type defination*/

    interface ITestCaseOverviewController extends common.IBaseCtrl {
        getAll() : ng.IPromise<any>;
    }

    interface ITestSuiteOverviewController extends common.IBaseCtrl {

        getAll() : ng.IPromise<any>;
    }

    interface IDashboardOverviewController extends common.IBaseCtrl {

    }

    /*scopes type defination*/

    interface ITestCaseOverviewScope extends common.IBaseScope {
        testCases : Array <ITestCaseDTO>;
        vm : ITestCaseOverviewController;
    }

    interface ITestSuiteOverviewScope extends common.IBaseScope {
        testSuites : Array <ITestSuiteDTO>;
        vm : ITestSuiteOverviewController;
    }

    interface IDashboardOverviewScope extends common.IBaseScope {
        vm : IDashboardOverviewController;
    }

    /*dtos*/

    interface IBusinessDTO extends common.ICommonDTO {
        id : string;
        name : string;
        code : string;

        tags : Array<ITagsModel>;
    }

    interface ITestStepDTO extends IBusinessDTO {

        /*todo add other fields @ARPIT*/
        sequenceNumber : string;
    }

    interface ITestCaseDTO extends IBusinessDTO {
        sequenceNumber : string;
        testSteps : Array<ITestStepDTO>;
    }

    interface ITestSuiteDTO extends IBusinessDTO {
        testCases : Array<ITestCaseDTO>;
    }

    interface ITagsModel extends IBusinessDTO {

    }


}
