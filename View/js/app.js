var app = angular.module("ganttApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "connexion.html",
      controller: "connexionCtrl"

    }).when("/Project", {
      templateUrl: "projectList.html"
    });
});
