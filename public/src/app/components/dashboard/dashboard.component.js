(function () {
    'use strict';

    angular
        .module('app')
        .controller('DashboardCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {
            $scope.tabs = {
                PROFILE: 'profile',
                EDIT_PROFILE: 'edit-profile'
            };
            $scope.currentTab = $scope.tabs.PROFILE;
            $scope.changeTab = changeTab;

            function changeTab(tab) {
                $scope.currentTab = tab;
            }

        }])
        .component('dashboard', {
            templateUrl: './src/app/components/dashboard/dashboard.component.html',
            controller: 'DashboardCtrl'
        });
})();