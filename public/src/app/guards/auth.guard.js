(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthGuard', ['$rootScope', '$state', function ($rootScope, $state) {
            const authGuardInstance = {};

            authGuardInstance.handleRouteChanges = function (ev, toState) {
                if (toState.auth && !$rootScope.currentUser) {
                    ev.preventDefault();
                    $state.go('login');

                    return;
                }

                if (toState.nonAuth && $rootScope.currentUser) {
                    ev.preventDefault();
                    $state.go('dashboard');
                }
            };

            return authGuardInstance;
        }]);
})();