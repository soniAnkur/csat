/// <reference path="../../../typings/tsd.d.ts" />

'use strict'

import SessionStorageProvider = require("session-storage/providers/SessionStorageProvider")
import SessionStorageService = require("session-storage/services/SessionStorageService")

export class SessionStorageModule {
    public static moduleName : string = "session-storage";

    public static initialize() : void {
        angular.module(SessionStorageModule.moduleName, []);

        /* register controllers */

        /* register services */
        angular.module(SessionStorageModule.moduleName)
            .provider(SessionStorageProvider.SessionStorageProvider.ID, new SessionStorageProvider.SessionStorageProvider());

        /*configuration block*/
        angular.module(SessionStorageModule.moduleName).config([SessionStorageProvider.SessionStorageProvider.ID.concat("Provider"),($sessionStorageProvider : sessionStorage.ISessionStorageServiceProvider) => {
            $sessionStorageProvider.setPrefix("abc");
        }]);

        /*bootstrap the module*/
        //angular.bootstrap(document , [SessionStorageModule.moduleName]);
    }
}