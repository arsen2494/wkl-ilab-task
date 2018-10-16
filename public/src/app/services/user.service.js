(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', ['$q', '$rootScope', function ($q, $rootScope) {
            const userServiceinstance = {};

            userServiceinstance.me = function () {
                const defer = $q.defer();

                setTimeout(() => {
                    defer.resolve($rootScope.currentUser);
                }, 3000);

                return defer.promise;
            };

            return userServiceinstance;
        }]);
})();