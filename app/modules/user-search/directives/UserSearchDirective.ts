/// <reference path="../../../../typings/tsd.d.ts" />

import UserSearchDirectiveController = require("user-search/controllers/UserSearchDirectiveController");

class UserSearchDirective implements common.ICommonDirective {

    public static ID = "userSearch";
    private static TEMPLATE_URL : string = 'modules/user-search/partials/userSearchDirective.tpl.html';

    public static $inject : Array<string> = [];
    public templateUrl = UserSearchDirective.TEMPLATE_URL;
    public scope = {};
    public restrict : string = "AEC";

    public controller = UserSearchDirectiveController.ID;

    public link : ($scope : ng.IScope , element : ng.IAugmentedJQuery , attrs : ng.IAttributes , controller : any) => void;

    constructor() {
        console.log("::: Initializing the directive ::::" + UserSearchDirective.ID);
    }
}

export = UserSearchDirective;
