(function () {
    'use strict';

    angular
        .module('app')
        .controller('DashboardCtrl', ['$scope', 'SpinnerService', 'UserService', function ($scope, SpinnerService, UserService) {
            $scope.tabs = {
                PROFILE: 'profile',
                EDIT_PROFILE: 'edit-profile'
            };
            $scope.currentTab = $scope.tabs.PROFILE;
            $scope.changeTab = changeTab;

            me();

            function changeTab(tab) {
                $scope.currentTab = tab;
            }

            function me() {
                UserService
                    .me()
                    .then(function (data) {
                        $scope.user = data;
                    });
            }

        }])
        .component('dashboard', {
            templateUrl: './src/app/components/dashboard/dashboard.component.html',
            controller: 'DashboardCtrl'
        });
})();