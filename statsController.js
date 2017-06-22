
myApp.controller('statsController', ["$scope", "Team", "Players","CurrentWeek", "TodayTotal", function($scope, Team, Players, CurrentWeek, TodayTotal){
    
    /*use the Team service method to get the teams array*/
    $scope.teams = Team.getTeams();

    /*use the Players service method to update the shared currentPlayer object (in the service) based on the log-in jerseyNumber enter*/
    Players.updateCurrentPlayer();
    
    /*use the Players service method to retrieved the shared currentPlayer object into the scope variable. */
    $scope.currentPlayer = Players.getCurrentPlayer();
    

    /* player profile section*/    
    /* use the scope's currentPlayer variable to get the jerseyNumber*/
    $scope.jerseyNumber = $scope.currentPlayer.jerseyNumber;
    
    /* use the scope's currentPlayer variable to get the team's name*/
    $scope.teamName = $scope.currentPlayer.teamName;
    
    /* use the CurrentWeek service to get the current week*/
    $scope.currentWeek = CurrentWeek.getCurrentWeekNumber();
    
    /* player stats section*/
    /*TEMP SETUP: get's today total points from the input page*/
    $scope.todayTotal = TodayTotal.getTodayTotal();
    /* use the scope's currentPlayer variable to get the playerTotalPoints*/
    $scope.playerTotalPoints = $scope.currentPlayer.playerTotalPoint;
    $scope.playerTeamRank = Players.getPlayerTeamRank();
    $scope.playerGameRank = Players.getPlayerGameRank();
    
}]);