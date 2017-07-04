myApp.controller('statsController', ["$scope", "Team", "Players","CurrentWeek", "TodayTotal", function($scope, Team, Players, CurrentWeek, TodayTotal){
    
    /*use the Team service method to get the teams array*/
    $scope.teams = Team.getTeams();

    /*use the Players service method to update the shared currentPlayer object (in the service) based on the log-in jerseyNumber enter
    Players.updateCurrentPlayer();*/
    
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
    /*Use the TodayTotal service to get today total points from the input page*/
    $scope.todayTotal = TodayTotal.getTodayTotal();
    
    /* use the scope's currentPlayer variable to get the playerTotalPoints*/
    $scope.playerTotalPoints = $scope.currentPlayer.playerTotalPoint;
    
    /*use the Players service method to player's team rank. */
    $scope.playerTeamRank = Players.getPlayerTeamRank();
    
     /* use the Players service method to calculate number of team mates on a team*/
    $scope.numberOfTeamMembers = Players.getNumberOfTeamMembers();
    
    /*use the Players service method to player's game rank. */
    $scope.playerGameRank = Players.getPlayerGameRank();
    
    /* use the Players service method to calculate number of players in the game*/
    $scope.numberOfGameMembers = Players.getNumberOfGameMembers();
    
}]);