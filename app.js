var myApp = angular.module('UvT', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/logIn');

    $stateProvider
        .state('logIn', {
            url:'/logIn',
            templateUrl: 'views/logIn.html'
        })
        .state('input', {
            url:'/input',
            templateUrl: 'views/input.html'
        })
        .state('stats', {
            url: '/stats',
            templateUrl: 'views/stats.html',
            controller: "statsController"
        })
     
    
}]);

myApp.controller('mainController', function($scope){
});