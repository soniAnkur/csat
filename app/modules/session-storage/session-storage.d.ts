/// <reference path="../../../typings/tsd.d.ts" />

declare module sessionStorage {

    interface ISessionStorageServiceProvider extends angular.IServiceProvider {
        /*
         will set up the prefix for the session storage values
         * @param prefix will act as prefix to key to sessionStorage
         * prefix is used to avoid accidental overriding of data. within the application
         */
        setPrefix(prefix:string) : void;

        /**
         * Setter for the storageType
         * @param storageType sessionStorage. default: sessionStorage
         */
        setStorageType(storageType:string) : ISessionStorageServiceProvider;
    }

    interface ISessionStorageService {
        /**
         * Checks if cookies are enabled in the browser.
         * Returns: Boolean
         */
        isSupported : boolean;

        applicationKey : string;

        set<T>(key:string , value:T): void;

        /**
         * Directly get a value from session storage.
         * @param key
         * @param langCode the language code
         */
        get<T>(key:string , langCode:String[] , filterObject?:IFilterObject): T;

        /**
         * Return derived key from the application key
         * @param application key
         */
        derivedKey(applicationKey : string): string ;

        /**
         * clears the session storage
         */
        derivedKey(key : string): string ;

    }

    interface IFilterObject {
        /* will be taken care later */
    }


    // Interface describing the members that the provider's service offers
    interface IGreetingService {
        getGreeting(): string;
    }
}

