(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', ['$http', function ($http) {
            const userServiceinstance = {};

            userServiceinstance.me = function () {
                return $http
                    .get('/api/auth/me');
            };

            return userServiceinstance;
        }]);
})();