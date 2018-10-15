(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', ['$http', '$rootScope', function ($http, $rootScope) {
            const userServiceinstance = {};

            userServiceinstance.me = function () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve($rootScope.currentUser);
                    }, 3000);
                })
            };

            return userServiceinstance;
        }]);
})();