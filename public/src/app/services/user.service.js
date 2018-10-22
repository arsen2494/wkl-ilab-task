(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', ['$q', '$rootScope', 'AuthService', function ($q, $rootScope, AuthService) {
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

            return userServiceInstance;
        }]);
})();