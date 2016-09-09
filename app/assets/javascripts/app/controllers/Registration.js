angular
  .module("learnplace")
  .controller("RegistrationController", function($scope, $http, $state, Auth, $location){

    $scope.register = function() {
      // used angular devise to login
      // https://github.com/cloudspace/angular_devise#authregistercreds
      Auth.register($scope.user).then(function (response) {
            // after login, redirect to schools
            $location.path("schools_index");
            // $state.go('schools_index')

        }, function (response) {
            // show errors to a user
            $scope.errors = JSON.stringify(response.data.errors);
            // $scope.sign_up_status = "alert alert-danger";
            // $scope.sign_up_message = "Unable to complete registration";
            // fadeAlert("#sign_up_alert");
        });
    }

    // function fadeAlert(id) {
    //   $(id).fadeTo(3000, 0);
    // }
  });

