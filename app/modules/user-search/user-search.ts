'use strict'

export class PopoverConfig implements userSearch.IPopoverConfig {
    constructor(public templateUrl : string, public title : string, public trigger, public content?){
        this.templateUrl = templateUrl;
        this.title = title;
        this.trigger = trigger;
        this.content = content;
    }

}