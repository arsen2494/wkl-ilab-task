(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthTokenService', ['$window', function ($window) {
            const authTokenServiceInstance = {};

            authTokenServiceInstance.setToken = function (token) {
                if (token) {
                    $window.sessionStorage.setItem('token', encodeUser(token));
                } else {
                    $window.sessionStorage.removeItem('token');
                }
            };

            function encodeUser(user) {
                return btoa(JSON.stringify(user));
            }

            return authTokenServiceInstance;
        }])
        .factory('AuthService', [
            '$rootScope',
            '$http',
            '$window',
            '$location',
            '$filter',
            'toastr',
            'AuthTokenService',
            function ($rootScope, $http, $window, $location, $filter, toastr, AuthTokenService) {
                const authServiceInstance = {};

                function setAuth(user) {
                    AuthTokenService.setToken(user);
                    $rootScope.currentUser = user;
                }

                function decodeUser() {
                    return JSON.parse(atob($window.sessionStorage.getItem('token')));
                }

                authServiceInstance.login = function (credentials) {
                    return $http
                        .post('/api/auth/login', credentials)
                        .then(function (data) {
                            setAuth(data.data.user);
                            const message = `${$filter('translate')('HELLO')} ${$rootScope.currentUser.name}.`;
                            const title = `${$filter('translate')('SUCCESS')}!`;

                            toastr.success(message, title);

                            return data;
                        });
                };

                authServiceInstance.logout = function () {
                    setAuth(null);
                };

                authServiceInstance.getCurrentUser = function () {
                    return decodeUser();
                };

                authServiceInstance.isLoggedIn = function () {
                    return !!$window.sessionStorage.getItem('token');
                };

                authServiceInstance.initAuth = function () {
                    if (!this.isLoggedIn()) {
                        setAuth(null);
                    } else {
                        const user = this.getCurrentUser();
                        setAuth(user);
                    }
                };

                authServiceInstance.setAuth = setAuth;

                return authServiceInstance;
            }]);
})();