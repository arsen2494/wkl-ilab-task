(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
            const baseState = {
                name: 'base',
                url: '/',
                redirectTo: 'login'
            };
            const loginState = {
                name: 'login',
                url: '/login',
                component: 'login'
            };
            const forgotPasswordState = {
                name: 'forgot-password',
                url: '/forgot-password',
                component: 'forgotPassword'
            };
            const dashboardState = {
                name: 'dashboard',
                url: '/dashboard',
                component: 'dashboard'
            };

            $locationProvider.html5Mode(true);
            $stateProvider.state(baseState);
            $stateProvider.state(loginState);
            $stateProvider.state(forgotPasswordState);
            $stateProvider.state(dashboardState);
        }]);
})();