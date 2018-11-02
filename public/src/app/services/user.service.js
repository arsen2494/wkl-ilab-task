(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', ['$q', '$rootScope', '$http', 'AuthService', function ($q, $rootScope, $http, AuthService) {
            const userServiceInstance = {};

            userServiceInstance.me = function () {
                const defer = $q.defer();

                setTimeout(() => {
                    defer.resolve($rootScope.currentUser);
                }, 3000);

                return defer.promise;
            };

            userServiceInstance.updateProfile = function (body) {
                const defer = $q.defer();
                const user = {
                    ...$rootScope.currentUser,
                    ...body
                };

                AuthService.setAuth(user);
                setTimeout(() => defer.resolve(user), 3000);

                return defer.promise;
            };

            userServiceInstance.getAll = function () {
                return $http.get('/api/users');
            }

            return userServiceInstance;
        }]);
})();