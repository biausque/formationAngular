(function() {
    'use strict';

    angular
        .module('app')
        .directive('monPanier', Directive);

    // Directive.$inject = ['dependency1'];
    function Directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            templateUrl:'/App/directive/panier/panier.html'
            
        };
        return directive;
        
    }
})();