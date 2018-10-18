(function () {
    'use strict';

    angular
        .module('app')
        .directive('uniqueUsername', ['$q', '$timeout', function ($q, $timeout) {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ctrl) {
                    const usernames = ['User', 'Username'];

                    ctrl.$asyncValidators.uniqueUsername = function (modelValue, viewValue) {
                        if (ctrl.$isEmpty(modelValue)) {
                            return $q.resolve();
                        }

                        const defer = $q.defer();

                        $timeout(function () {
                            if (usernames.indexOf(modelValue) === -1) {
                                defer.resolve();
                            } else {
                                defer.reject();
                            }
                        }, 3000);

                        return defer.promise;
                    }
                }
            };
        }]);
})();