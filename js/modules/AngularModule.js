var mod = angular.module("AngularModule", []); // ngRoute

mod.service("DataService", DataService);
mod.directive("temperature", temperature);
mod.directive("temps", temps);
mod.filter("temperatureFilter", temperatureFilter);
mod.controller("FirstCtrl", FirstCtrl);
/*mod.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "/weather-app/index.html",
    controller: "HomeController"
  })
  .when("/page1", {
    templateUrl: "/comptebancaire/html/page1.html",
    controller: "HomeController"
  })
  .otherwise({
    redirectTo:"/"
  });
});
*/
