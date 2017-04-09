var app = angular.module("ganttApp", ["ngRoute", "ngMaterial"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/user",
      controller: "connexionCtrl"

    }).when("/Project", {
      templateUrl: "/project",
      controller: "projectListCtrl"
    });
});
