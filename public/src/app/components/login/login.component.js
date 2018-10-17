(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {
            $scope.email = '';
            $scope.password = '';
            $scope.onSubmit = onSubmit;
            $scope.inputHasError = inputHasError;

            function onSubmit() {
                const {email, password} = $scope;
                const credentials = {
                    email,
                    password
                };

                // TODO validate form
                AuthService
                    .login(credentials)
                    .then(function (data) {
                        if (data.status === 200 && data.data.success) {
                            $location.path('/dashboard');
                        }
                    });
            }

            function inputHasError(form, fieldName) {
                if (form[fieldName].$invalid && form[fieldName].$touched) {
                    return {
                        'is-invalid': true
                    }
                }

                return false;
            }
        }])
        .component('login', {
            templateUrl: './src/app/components/login/login.component.html',
            controller: 'LoginCtrl'
        });
})();