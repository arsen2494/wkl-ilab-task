(function () {
    'use strict';

    angular
        .module('users')
        .controller('UserChoosenCtrl', ['$scope', function ($scope) {

        }])
        .component('userChoosen', {
            templateUrl: './src/app/components/user-choosen/user-choosen.component.html',
            controller: 'UserChoosenCtrl'
        });
})();