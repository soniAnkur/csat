'use strict'

export class SessionStorageService implements sessionStorage.ISessionStorageService {
    public static ID = 'session_storage_service';

    isSupported: boolean = false;

    applicationKey: string;

    constructor(applicationKey : string, private $window: angular.IWindowService) {
        this.applicationKey = applicationKey
        if (this.$window.sessionStorage) {
            this.isSupported = true;
        }
    }

    set<T>(key: string , value: T): void {

        if (this.isSupported) {
            return this.$window.sessionStorage.setItem(this.derivedKey(key) , JSON.stringify(value));
        }
    }

    get<T>(key: string , langCode: String[] , filterObject: sessionStorage.IFilterObject): T {

        if (this.isSupported) {
            return JSON.parse(this.$window.sessionStorage.getItem(this.derivedKey(key)));
        }
    }

    derivedKey(key: string): string {
        return this.applicationKey.concat(key);
    }
}