/// <reference path="../../../typings/tsd.d.ts" />

declare module userSearch {

    interface IUserSearchDirectiveService {
        fetchUsersJSON() : ng.IPromise<IUserDto>;
    }

    interface IUserSearchDirectiveScope extends common.IBaseScope {
        vm : IUserSearchDirectiveController ;
        users : IUserDto;
        popoverConfig: userSearch.IPopoverConfig;
    }

    interface IUserSearchDirectiveController extends common.IBaseCtrl {
        selectedUser : userSearch.IUserDto;
        fetchUsers() : void;
        onSelect(user : userSearch.IUserDto) : void;
    }

    interface IUserDto extends common.ICommonDTO {

    }

    interface IPopoverConfig {
        templateUrl : string;
        title : string;
        trigger : string;
        content : string;
    }

}