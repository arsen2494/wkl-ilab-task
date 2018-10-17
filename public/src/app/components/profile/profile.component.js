(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProfileCtrl', ['$scope', 'UserService', 'SpinnerService', function ($scope, UserService, SpinnerService) {
            getProfile();

            function getProfile() {
                SpinnerService.showSpinner();
                UserService
                    .me()
                    .then(data => {
                        $scope.profile = data;
                        SpinnerService.hideSpinner();
                    });
            }
        }])
        .component('profile', {
            templateUrl: './src/app/components/profile/profile.component.html',
            controller: 'ProfileCtrl'
        });
})();