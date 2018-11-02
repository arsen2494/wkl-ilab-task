(function () {
    'use strict';

    angular
        .module('users')
        .controller('UserDropdownListCtrl', ['$scope', function ($scope) {

        }])
        .component('userDropdownList', {
            templateUrl: './src/app/components/user-dropdown-list/user-dropdown-list.component.html',
            controller: 'UserDropdownListCtrl'
        });
})();