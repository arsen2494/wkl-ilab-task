(function () {
    'use strict';

    angular
        .module('users')
        .controller('UserDropdownItemCtrl', ['$scope', function ($scope) {

        }])
        .component('userDropdownItem', {
            templateUrl: './src/app/components/user-dropdown-item/user-dropdown-item.component.html',
            controller: 'UserDropdownItemCtrl'
        });
})();