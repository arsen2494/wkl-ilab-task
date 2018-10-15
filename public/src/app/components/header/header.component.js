(function () {
    'use strict';

    angular
        .module('app')
        .controller('HeaderCtrl', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {
            $scope.onLogout = onLogout;
            $scope.currentUser = AuthService.currentUser;

            function onLogout() {
                AuthService.logout();
                $location.path('/');
            }
        }])
        .component('headerComponent', {
            templateUrl: './src/app/components/header/header.component.html',
            controller: 'HeaderCtrl'
        });
})();