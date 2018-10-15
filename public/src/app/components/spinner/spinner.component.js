(function () {
    'use strict';

    angular
        .module('app')
        .controller('SpinnerCtrl', function () {
        })
        .component('spinner', {
            templateUrl: './src/app/components/spinner/spinner.component.html',
            controller: 'SpinnerCtrl'
        })
})();