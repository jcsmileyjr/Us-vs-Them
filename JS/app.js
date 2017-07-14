var myApp = angular.module('UvT', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/logIn');

    $stateProvider
        .state('logIn', {
            url:'/logIn',
            templateUrl: 'Log-In/logIn.html',
            controller: "logInController"
        })
        .state('input', {
            url:'/input',
            templateUrl: 'Input/input.html',
            controller: "inputController"        
        })
        .state('stats', {
            url: '/stats',
            templateUrl: 'Stats/stats.html',
            controller: "statsController"
        })
        .state('logOut', {
            url: '/logOut',
            templateUrl: '',
            controller: function($state, Auth, TodayTotal){
                TodayTotal.clearTodayTotal();
                Auth.logOutAuthenticate();
                $state.go('logIn');
            }
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


