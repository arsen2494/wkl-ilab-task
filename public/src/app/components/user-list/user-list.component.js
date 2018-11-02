(function () {
    'use strict';

    angular
        .module('users')
        .controller('UserListCtrl', ['$scope', 'UserService', function ($scope, UserService) {
            $scope.users = [];

            init();

            function init() {
                getUsers();
            }

            function getUsers() {
                UserService
                    .getAll()
                    .then(response => $scope.users = response.data);
            }
        }])
        .component('userList', {
            templateUrl: './src/app/components/user-list/user-list.component.html',
            controller: 'UserListCtrl'
        });
})();