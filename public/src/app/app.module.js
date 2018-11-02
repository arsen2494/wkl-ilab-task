(function () {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ui.router.state.events',
            'toastr',
            'pascalprecht.translate',
            'users'
        ])
        .config(function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                files: [{
                    prefix: './src/lang/locale-',
                    suffix: '.json'
                }]
            });

            $translateProvider.useSanitizeValueStrategy(null);
            $translateProvider.preferredLanguage('en');
        })
        .run(run);

    run.$inject = ['$rootScope', 'AuthService', 'AuthGuard'];

    function run($rootScope, AuthService, AuthGuard) {
        AuthService.initAuth();
        $rootScope.$on('$stateChangeStart', AuthGuard.handleRouteChanges);
    }
})();