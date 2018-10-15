(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', ['$scope', function ($scope) {

        }])
        .component('app', {
            templateUrl: `./src/app/app.component.html`,
            controller: 'AppCtrl'
        });
})();