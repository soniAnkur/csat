'use strict'

import SessionStorageService = require('session-storage/services/SessionStorageService');

export class SessionStorageProvider implements sessionStorage.ISessionStorageServiceProvider {

    public static ID = 'session_storage_provider';

    public applicationKey : string = 'default';

    public static $inject: string[] = ["$window"];

   public $get($window): SessionStorageService.SessionStorageService {
        return new SessionStorageService.SessionStorageService(this.applicationKey, $window);
    }

    setPrefix(prefix: string): void {
        this.applicationKey = prefix;
    }

    setStorageType(storageType: string): sessionStorage.ISessionStorageServiceProvider {

        /*TODO implement factory method for storage type*/

        return undefined;

    }

}