/// <reference path="../../../typings/tsd.d.ts" />

declare module common {

    interface IBaseCtrl {
        $scope : IBaseScope ;
    }

    interface IBaseScope extends ng.IScope {
        vm : IBaseCtrl;
    }

    interface IApplicationCtrl extends IBaseCtrl {
        getApplicationName() : string;
    }

    interface IApplicationScope extends IBaseScope {
        vm : IApplicationCtrl;
        applicationName : string;
        alerts : any;
    }

    interface ICommonDTO {

    }

    interface ICommonService {

    }

    interface ICommonDirective extends ng.IDirective{

    }

    interface IHttpHeaders {
        addContentTypeHeader() : IHttpHeaders;
        addAcceptHeader() : IHttpHeaders;
        addHeader (key:string, value:string);
        getValue() : {[s : string] : string};
    }

    interface IParams {
        addParam (key:string, value:string) : IParams;
        getValue() : {[s : string] : string};
    }

    interface IDataProvider<T extends ICommonDTO> {

        getEntity(url:string,
                  params?:string,
                  headers?:IHttpHeaders,
                  restService?:restangular.IService) : restangular.IPromise<T>;

        getAll(url:string,
               params?:string,
               headers?:IHttpHeaders,
               restService?:restangular.IService) : restangular.IPromise<T>;

        update<T extends ICommonDTO>(entity:T,
                                     url:string,
                                     params?:string,
                                     headers?:IHttpHeaders,
                                     restService?:restangular.IService) : restangular.IPromise<T[]>;
        delete(any,
               url:string,
               params?:string,
               headers?:IHttpHeaders,
               restService?:restangular.IService) : restangular.IPromise<any>;

    }

}