(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', ['$q', '$rootScope', 'AuthService', function ($q, $rootScope, AuthService) {
            const userServiceinstance = {};

            userServiceinstance.me = function () {
                const defer = $q.defer();

                setTimeout(() => {
                    defer.resolve($rootScope.currentUser);
                }, 3000);

                return defer.promise;
            };

            userServiceinstance.updateProfile = function (body) {
                const defer = $q.defer();
                const user = {
                    ...$rootScope.currentUser,
                    ...body,
                    age: new Date().getFullYear() - new Date(body.birthday).getFullYear()
                };

                AuthService.setAuth(user);
                defer.resolve(user);

                return defer.promise;
            };

            return userServiceinstance;
        }]);
})();