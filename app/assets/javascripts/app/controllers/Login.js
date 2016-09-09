angular
  .module("learnplace")
  .controller("LoginController", function($scope, $state, Auth){
    $scope.login = function() {
      // used angular devise to login
      // https://github.com/cloudspace/angular_devise#authlogincreds-config
      Auth.login($scope.user).then(function (response) {
        // after login, redirect to schools
        $state.go('home.schools_index')
      }, function (response) {
        $scope.error = response.data.error;
      });
    }
  });

