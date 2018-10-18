(function () {
    'use strict';

    const INTEGER_REGEXP = /^-?\d+$/;

    angular
        .module('app')
        .directive('integer', function () {
            return {
                require: 'ngModel',
                scope: {
                    integer: '='
                },
                link: function (scope, el, attrs, ctrl) {
                    ctrl.$validators.integer = function (modelValue, viewValue) {
                        const betweenArray = scope.integer;

                        if (ctrl.$isEmpty(modelValue)) {
                            return true;
                        }

                        if (INTEGER_REGEXP.test(viewValue)) {
                            if (!betweenArray) {
                                return true;
                            } else if (Array.isArray(betweenArray) && betweenArray.length === 2) {
                                const start = betweenArray[0];
                                const end = betweenArray[1];

                                if (modelValue >= start && modelValue <= end) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        }

                        return false;
                    };
                }
            };
        });
})();