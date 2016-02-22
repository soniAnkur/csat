/// <reference path="../../../../typings/tsd.d.ts"/>

"use-strict"

import SessionStorageProvider = require("session-storage/providers/SessionStorageProvider")

class AppCtrl implements common.IApplicationCtrl {

    public static ID : string = "concept_appCtrl"

    static $inject : Array<string> = [
        "$scope" ,
        "session_storage_provider"
    ]

    constructor(public $scope : common.IApplicationScope , public sessionStorageProvider : sessionStorage.ISessionStorageService) {
        this.$scope.vm = this;
        this.$scope.applicationName = "Concepts"
        this.sessionStorageProvider = sessionStorageProvider;
    }

    public getApplicationName() : string {
        return this.$scope.applicationName;
    }

    public saveData() : void {
        this.sessionStorageProvider.set("a" , "aaaa");
        this.getData();
    }

    public getData() : void {
        console.log(this.sessionStorageProvider.get("a" , undefined , undefined));
    }
}

export = AppCtrl;
