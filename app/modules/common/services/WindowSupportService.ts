/// <amd-dependency="ngSmoothScroll"/>
'use strict'
class WindowSupportService {
    public static ID : string = 'windowSupportService';

    public static $inject : Array<string> = [
        '$window' ,
        'smoothScroll'
    ]

    constructor (private $window : ng.IWindowService,
    private smoothScroll : any) {
        /*TODO npm install ng smooth scroll*/
    }
}