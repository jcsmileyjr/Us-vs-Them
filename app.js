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

myApp.run(function($transitions, Auth) {
  $transitions.onStart({ to: 'input'}, function(trans) {
    var auth = trans.injector().get('Auth');
    if (Auth.getAuthenticate()==false) {
      // User isn't authenticated. Redirect to a new Target State
      return trans.router.stateService.target('logIn');
    }
  });
    
  $transitions.onStart({ to: 'stats'}, function(trans) {
    var auth = trans.injector().get('Auth');
    if (Auth.getAuthenticate()==false) {
      // User isn't authenticated. Redirect to a new Target State
      return trans.router.stateService.target('logIn');
    }
  });    
})


