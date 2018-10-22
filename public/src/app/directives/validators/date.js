(function () {
    'use strict';

    const DATE_REGEXP_1 = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/; // YYYY-MM-DD
    const DATE_REGEXP_2 = /^(([0-9])|([0-2][0-9])|([3][0-1]))\s(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4}$/; // DD-MMMM-YYYY
    const DATE_REGEXP_3 = /^(([0-9])|([0-2][0-9])|([3][0-1]))-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{2}$/; // DD-MMM-YY

    angular
        .module('app')
        .directive('date', function () {
            return {
                require: 'ngModel',
                link: function (scope, el, attrs, ctrl) {
                    ctrl.$validators.date = function (modelValue, viewValue) {
                        if (ctrl.$isEmpty(modelValue)) {
                            return true;
                        }

                        if (DATE_REGEXP_1.test(modelValue) || DATE_REGEXP_2.test(modelValue) || DATE_REGEXP_3.test(modelValue)) {
                            return true;
                        }

                        return false;
                    }
                }
            };
        })
})();