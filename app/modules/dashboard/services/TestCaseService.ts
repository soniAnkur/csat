/// <reference path="../../../../typings/tsd.d.ts"/>

class TestCaseService implements dashboard.ITestCaseService {


    public static ID = "testCaseService";

    static $inject = ["$http"];

    constructor(private $http : ng.IHttpService) {

    }

    public fetchJSON() : ng.IPromise<any> {
        return this.$http.get("JSONData/testCases.json").then((testcases : any) => {
            return testcases.data;
        });
    }
}

export = TestCaseService;