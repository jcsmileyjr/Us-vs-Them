myApp.controller('inputController', ["$scope", "Players","TodayTotal","Team", function($scope, Players, TodayTotal, Team){
    
    /*use the Players service method to retrieved the shared currentPlayer object into the scope variable. */    
    $scope.currentPlayer = Players.getCurrentPlayer();

    /* use the scope's currentPlayer variable to get the playerName*/
    $scope.playerName = $scope.currentPlayer.playerName;
    
    /* use the scope's currentPlayer variable to get the jerseyNumber*/    
    $scope.jerseyNumber = $scope.currentPlayer.jerseyNumber;
    
    /* use the scope's currentPlayer variable to get the team's name*/    
    $scope.teamName = $scope.currentPlayer.teamName;
    
    /*Get today's date to ue in the title*/
    $scope.date = new Date();
    
    $scope.steps = 0;
    $scope.water = 0;
    $scope.vegetables = 0;
    $scope.physicalFitness = 0;   
    

    $scope.addStats = function(steps, water, vegetables, physicalFitness){
        
        TodayTotal.addCurrentTotal(steps, water, vegetables, physicalFitness);
        
        Players.updatePlayerTotalPoints();
        
        Team.updateTeams();
    }

    
}]);