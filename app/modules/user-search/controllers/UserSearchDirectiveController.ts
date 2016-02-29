/// <reference path="../../../../typings/tsd.d.ts" />

'use strict'

import UserSearchDirectiveService = require("user-search/services/UserSearchDirectiveService");
import UserSearch = require("user-search/user-Search");

class UserSearchDirectiveController implements userSearch.IUserSearchDirectiveController {

    public static ID : string = "userSearchDirectiveController";
    public static POPOVER_TEMPLATE_URL : string = "modules/user-search/partials/popover.tpl.html";

    private popoverConfig : userSearch.IPopoverConfig;
    public selectedUser : userSearch.IUserDto;
    public static $inject : Array<string> =
                      [
                          '$scope' ,
                          UserSearchDirectiveService.ID

                      ];

    constructor(public $scope : userSearch.IUserSearchDirectiveScope , private userSearchService : userSearch.IUserSearchDirectiveService) {
        this.$scope.vm = this;
        this.$scope.popoverConfig = new UserSearch.PopoverConfig(UserSearchDirectiveController.POPOVER_TEMPLATE_URL ,
                                                            "Search - Users" ,
                                                            "outsideClick" ,
                                                            undefined);
        this.fetchUsers();
    }

    public fetchUsers() : void {
        this.userSearchService.fetchUsersJSON().then((users : userSearch.IUserDto) => {
            this.$scope.users = users;
        });
    }

    public onSelect(user : userSearch.IUserDto) : void {
        console.log(user);
        this.selectedUser = user;
    }

}
export = UserSearchDirectiveController;