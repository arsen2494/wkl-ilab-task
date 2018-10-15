(function () {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ui.router.state.events',
            'toastr'
        ])
        .run(run);

    run.$inject = ['$rootScope', 'AuthService', 'AuthGuard'];

    function run($rootScope, AuthService, AuthGuard) {
        AuthService.initAuth();

        $rootScope.$on('$stateChangeStart', AuthGuard.handleRouteChanges);
    }
})();