(function () {
    'use strict';

    angular
        .module('app')
        .controller('DashboardCtrl', ['$scope', function ($scope) {
            $scope.tabs = {
                PROFILE: 'profile',
                EDIT_PROFILE: 'edit-profile'
            };
            $scope.currentTab = $scope.tabs.PROFILE;
            $scope.changeTab = changeTab;
            $scope.$on('changeTab', () => changeTab($scope.tabs.PROFILE));

            function changeTab(tab) {
                $scope.currentTab = tab;
            }
        }])
        .component('dashboard', {
            templateUrl: './src/app/components/dashboard/dashboard.component.html',
            controller: 'DashboardCtrl'
        });
})();