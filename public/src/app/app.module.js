(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .run(run);

    run.$inject = ['AuthService'];

    function run(AuthService) {
        AuthService.initAuth();
    }
})();