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
        .factory('AuthService', ['$http', '$window', '$location', 'AuthTokenService', function ($http, $window, $location, AuthTokenService) {
            const authServiceInstance = {};

            authServiceInstance.currentUser = null;

            function setAuth(user) {
                AuthTokenService.setToken(user);
                authServiceInstance.currentUser = user;
            }

            function decodeUser() {
                return JSON.parse(atob($window.sessionStorage.getItem('token')));
            }

            authServiceInstance.login = function (credentials) {
                return $http
                    .post('/api/auth/login', credentials)
                    .then(function (data) {
                        setAuth(data.data.user);

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
                    $location.path('/login');
                } else {
                    const user = this.getCurrentUser();
                    setAuth(user);
                    $location.path('/dashboard');
                }
            };

            return authServiceInstance;
        }]);
})();