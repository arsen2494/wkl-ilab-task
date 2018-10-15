(function () {
    'use strict';

    angular
        .module('app')
        .controller('ForgotPasswordCtrl', ['$scope', function ($scope) {

        }])
        .component('forgotPassword', {
            templateUrl: './src/app/components/forgot-password/forgot-password.component.html',
            controller: 'ForgotPasswordCtrl'
        })
})();