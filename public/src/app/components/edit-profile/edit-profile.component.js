(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditProfileCtrl', ['$scope', 'SpinnerService', 'UserService', 'toastr', function ($scope, SpinnerService, UserService, toastr) {
            $scope.DATE_FORMAT = 'YYYY-MM-DD';
            $scope.DATE_FORMAT_ERR_MESSAGE = 'INVALID DATE FORMAT!!!! TO BE CHANGED!!!'; //TODO change message
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

            function onSubmit() {
                // const {name, birthday} = $scope.profile;
                // const body = {
                //     name,
                //     birthday
                // };
                //
                // UserService
                //     .updateProfile(body)
                //     .then(() => {
                //         $scope.$emit('changeTab');
                //         toastr.success('Updated Successfully.', 'Success!');
                //     });
            }
        }])
        .component('editProfile', {
            templateUrl: './src/app/components/edit-profile/edit-profile.component.html',
            controller: 'EditProfileCtrl'
        });
})();