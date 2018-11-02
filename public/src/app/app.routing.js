(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
            const baseState = {
                name: 'base',
                url: '/',
                redirectTo: 'login'
            };
            const loginState = {
                name: 'login',
                url: '/login',
                component: 'login',
                nonAuth: true
            };
            const forgotPasswordState = {
                name: 'forgot-password',
                url: '/forgot-password',
                component: 'forgotPassword',
                nonAuth: true
            };
            const dashboardState = {
                name: 'dashboard',
                url: '/dashboard',
                component: 'dashboard',
                auth: true
            };
            const userListState = {
                name: 'users',
                url: '/user-list',
                component: 'userList',
                auth: true
            };

            $locationProvider.html5Mode(true);
            $stateProvider.state(baseState);
            $stateProvider.state(loginState);
            $stateProvider.state(forgotPasswordState);
            $stateProvider.state(dashboardState);
            $stateProvider.state(userListState);
            $urlRouterProvider.otherwise("/login");
        }]);
})();