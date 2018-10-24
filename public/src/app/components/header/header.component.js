(function () {
    'use strict';

    angular
        .module('app')
        .controller('HeaderCtrl', ['$scope', '$location', '$translate', 'AuthService', function ($scope, $location, $translate, AuthService) {
            $scope.onLogout = onLogout;
            $scope.languageKeys = {
                EN: 'en',
                RU: 'ru'
            };
            $scope.changeLanguage = changeLanguage;

            function onLogout() {
                AuthService.logout();
                $location.path('/');
            }

            function changeLanguage(key) {
                $translate.use(key);
            }
        }])
        .component('headerComponent', {
            templateUrl: './src/app/components/header/header.component.html',
            controller: 'HeaderCtrl'
        });
})();