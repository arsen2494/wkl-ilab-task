(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {
            $scope.email = '';
            $scope.password = '';
            $scope.onSubmit = onSubmit;
            $scope.inputHasError = inputHasError;
            $scope.loading = false;

            function onSubmit(form) {
                $scope.loading = true;
                const {email, password} = $scope;
                const credentials = {
                    email,
                    password
                };

                AuthService
                    .login(credentials)
                    .then(function (data) {
                        if (data.status === 200 && data.data.success) {
                            $location.path('/dashboard');
                        }
                    })
                    .catch(reason => {
                        if (reason.status === 400 && !reason.data.success) {
                            form.email.$error.wrong = true;
                        }
                    })
                    .finally(() => $scope.loading = false);
            }

            function inputHasError(form, fieldName) {
                if (form[fieldName].$invalid && form[fieldName].$touched || fieldName === 'email' && form.email.$error.wrong) {
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