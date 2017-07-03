var myApp = angular.module('UvT', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/logIn');

    $stateProvider
        .state('logIn', {
            url:'/logIn',
            templateUrl: 'views/logIn.html',
            controller: "logInController"
        })
        .state('input', {
            url:'/input',
            templateUrl: 'views/input.html',
            controller: "inputController"
        })
        .state('stats', {
            url: '/stats',
            templateUrl: 'views/stats.html',
            controller: "statsController"
        })
     
    
}]);


