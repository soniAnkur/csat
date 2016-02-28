/// <reference path = "../common.d.ts" />

class RestDataProvider<T extends common.ICommonDTO> implements common.IDataProvider<T> {

    static $inject: Array<string> = [
        "Restangular"
    ];

    constructor(private restAngularService: restangular.IService) {

    }

    getEntity(url:string , params:string , headers:common.IHttpHeaders , restService:restangular.IService):restangular.IPromise<T> {
        var restangular: restangular.IService = _.isUndefined(restService) ? this.restAngularService : restService;
        return restangular.customGET(url, params, headers);
    }

    getAll(url:string , params:string , headers:common.IHttpHeaders , restService:restangular.IService):restangular.IPromise<any> {
        var restangular: restangular.IService = _.isUndefined(restService) ? this.restAngularService : restService;
        return restangular.customGETLIST(url, params, headers);
    }

    update<T extends common.ICommonDTO>(entity:T , url:string , params:string , headers:common.IHttpHeaders , restService:restangular.IService):restangular.IPromise<T> {
        var restangular: restangular.IService = _.isUndefined(restService) ? this.restAngularService : restService;
        return restangular.customPUT(entity, url, params);
    }

    delete(any , url:string , params:string , headers:common.IHttpHeaders , restService:restangular.IService):restangular.IPromise<any> {
        var restangular: restangular.IService = _.isUndefined(restService) ? this.restAngularService : restService;
        return restangular.customDELETE(url, params, headers)
    }

}

//export = new RestDataProvider();