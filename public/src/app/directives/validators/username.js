(function () {
    'use strict';

    const CAMEL_CASE_REGEXP = /(.+?)([A-Z])/;

    angular
        .module('app')
        .directive('username', function () {
            return {
                require: 'ngModel',
                link: function (scope, el, attrs, ctrl) {
                    ctrl.$validators.username = function (modelValue, viewValue) {
                        if (ctrl.$isEmpty(modelValue)) {
                            return true;
                        }

                        if (CAMEL_CASE_REGEXP.test(viewValue)) {
                            return false;
                        }

                        return true;
                    }
                }
            };
        });
})();