/// <reference path="../../../../typings/tsd.d.ts"/>

class UserSearchDirectiveService implements userSearch.IUserSearchDirectiveService {

    public static ID = "userSearchDirectiveService";

    static $inject = ["$http"];

    private users : userSearch.IUserDto;

    constructor(private $http : ng.IHttpService) {

    }
    public fetchUsersJSON() : ng.IPromise <any> {
        return this.$http.get("JSONData/users.json").then((users : any) => {
            return users.data;
        });
    }
}

export = UserSearchDirectiveService;