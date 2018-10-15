(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditProfileCtrl', ['$scope', function ($scope) {

        }])
        .component('editProfile', {
            templateUrl: './src/app/components/edit-profile/edit-profile.component.html',
            controller: 'EditProfileCtrl'
        });
})();