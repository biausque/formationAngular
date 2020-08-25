(function() {
    'use strict';

    angular
        .module('app')
        .filter('mycurrency', Currency)
        .filter('myround', Round);
        
    function Currency() {
        return function (value, symbol) {
            if(undefined===symbol) symbol='€';
            return ''+value+symbol;
        }
    }
    function Round() {
            return function (value,fractionsize) {
                if(undefined===fractionsize) fractionsize=2;
                var fractValue = value * Math.pow(10, fractionsize);
                var roundedVal=Math.round(fractValue);
                return roundedVal / Math.pow(10,fractionsize);
            }
    }
   

})();