(function () {
    'use strict';

    angular
        .module('app')
        .factory('SpinnerService', ['$rootScope', function ($rootScope) {
            const spinnerServiceInstance = {};

            spinnerServiceInstance.showSpinner = function () {
                $rootScope.showSpinner = true;
            };

            spinnerServiceInstance.hideSpinner = function () {
                $rootScope.showSpinner = false;
            };

            return spinnerServiceInstance;
        }]);
})();