myApp.controller('logInController', ["$scope", "LogIn",  function($scope, LogIn){
    
    $scope.message = "";    

    $scope.signIn = function(jerseyNumber, password){
        $scope.jerseyNumber = jerseyNumber;
        $scope.password = password;
        
        LogIn.logIn($scope.jerseyNumber, $scope.password);
        $scope.pass = LogIn.getPass();

        if($scope.pass===false){
            $scope.message = "Log In attemped has Failed";
        }/*End of if statement*/
    };    
}]);