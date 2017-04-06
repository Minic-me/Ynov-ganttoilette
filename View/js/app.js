var app = angular.module("ganttApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "Views/signup.html",
      controller: "signInCtrl"

    }).when("/Project", {
      templateUrl: "Views/projectList.html"
    });

});
