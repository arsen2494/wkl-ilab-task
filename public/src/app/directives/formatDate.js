(function () {
    'use strict';

    angular
        .module('app')
        .directive('formatDate', function () {
            return {
                require: 'ngModel',
                scope: {
                    formatDate: '@'
                },
                link: function (scope, el, attrs, ctrl) {
                    const pattern = scope.formatDate;

                    ctrl.$formatters.push(formatter);

                    function formatter() {
                        return moment(ctrl.$modelValue).format(pattern);
                    }
                }
            }
        })
})();