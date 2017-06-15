myApp.controller('statsController',function($scope){
    
    $scope.teams = [{"teamName":"Globe Trotters", "teamTotalPoints": 500}, {"teamName":"Almost Retire", "teamTotalPoints": 650}, {"teamName":"Bad Boys and Girls", "teamTotalPoints": 900}, {"teamName":"Cookie Cutters", "teamTotalPoints": 325}, {"teamName":"Rolling Stones", "teamTotalPoints": 875} ];
    
    /* player profile section*/
    $scope.jerseyNumber = 5;
    $scope.teamName = "Globe Trotters";
    $scope.currentWeek = 2;
    
    /* player stats section*/
    $scope.todayTotal = 45;
    $scope.playerTotalPoints = 200;
    $scope.playerTeamRank = 2;
    $scope.playerGameRank = 10;
    
});