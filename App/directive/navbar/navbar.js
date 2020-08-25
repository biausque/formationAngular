(function() {
    'use strict';

    angular
        .module('ModuleNavBar',[])
        .directive('navBar', Directive);

    //Directive.$inject = ['dependency1'];
    function Directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
           // bindToController: true,
           // controller: ControllerController,
           // controllerAs: 'vm',
           // link: link,
            restrict: 'EAC',
            templateUrl:'/App/directive/navBar/navBar.html'
            //template:'<div> Voicti ma directive </div>'
            //scope: {title:'Mon 1er site angularJS'}
        };
        return directive;
        
        
    }
    /* @ngInject */
    //function ControllerController () {
    //    //contenu 
    //}
})();