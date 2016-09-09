angular
  .module("learnplace")
  .controller("NavbarController", NavbarController);

function NavbarController($scope, Auth, $log){

  // used to show/hide login links in the view
  $scope.isSignedIn = Auth.isAuthenticated;

  //shows an email of logged user
  Auth.currentUser().then(function(response){
    $scope.email = response.email;
    // $scope.logout = Auth.logout;
  }, function(){

  });

  // logout by using angular devise library
  $scope.logout = function() {
      alert("you logout");

    Auth.logout().then(function(oldUser) {
            alert(oldUser.username + "you're signed out now.");
        }, function(error) {
            // An error occurred logging out.
    });
  }

  // $scope.signedIn = function(){
  //     return $scope.email;
  //   };
};
