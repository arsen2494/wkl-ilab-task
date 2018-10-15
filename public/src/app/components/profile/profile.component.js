(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProfileCtrl', ['$scope', function ($scope) {

        }])
        .component('profile', {
            templateUrl: './src/app/components/profile/profile.component.html',
            controller: 'ProfileCtrl'
        });
})();