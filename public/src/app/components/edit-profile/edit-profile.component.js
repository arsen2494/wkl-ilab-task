(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditProfileCtrl', ['$scope', 'SpinnerService', 'UserService', 'toastr', function ($scope, SpinnerService, UserService, toastr) {
            $scope.DATE_FORMAT = 'YYYY-MM-DD';
            $scope.loading = false;
            $scope.onSubmit = onSubmit;
            $scope.inputHasError = inputHasError;

            getProfile();

            function getProfile() {
                SpinnerService.showSpinner();
                UserService
                    .me()
                    .then(data => {
                        $scope.profile = JSON.parse(JSON.stringify(data));
                        SpinnerService.hideSpinner();
                    });
            }

            function inputHasError(formControl) {
                return {
                    'is-invalid': formControl.$invalid && formControl.$touched
                };
            }

            function onSubmit(form) {
                if (form.$valid) {
                    $scope.loading = true;

                    const {
                        name,
                        age,
                        birthday,
                        dayOfLogin,
                        dayOfNextNotification
                    } = $scope.profile;
                    const body = {
                        name,
                        age,
                        birthday,
                        dayOfLogin,
                        dayOfNextNotification
                    };

                    UserService
                        .updateProfile(body)
                        .then(() => {
                            $scope.$emit('changeTab');
                            toastr.success('Updated Successfully.', 'Success!');
                            $scope.loading = false;
                        });
                }
            }
        }])
        .component('editProfile', {
            templateUrl: './src/app/components/edit-profile/edit-profile.component.html',
            controller: 'EditProfileCtrl'
        });
})();