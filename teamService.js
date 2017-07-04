/*service that creates and returns a teams array of objects*/
myApp.factory('Team', function(TodayTotal, Players ){
    /* Use this for services
    this.teams = [{"teamName":"Globe Trotters", "teamTotalPoints": 500}, {"teamName":"Almost Retire", "teamTotalPoints": 650}, {"teamName":"Bad Boys and Girls", "teamTotalPoints": 900}, {"teamName":"Cookie Cutters", "teamTotalPoints": 325}, {"teamName":"Rolling Stones", "teamTotalPoints": 875}];
    
    this.getTeams = function(){
        return this.teams;
    }
    */
    /*array of team objects*/
    var teams = [{"teamName":"Globe Trotters", "teamTotalPoints": 660}, {"teamName":"Almost Retire", "teamTotalPoints": 650}, {"teamName":"Bad Boys and Girls", "teamTotalPoints": 485}, {"teamName":"Cookie Cutters", "teamTotalPoints": 680}, {"teamName":"Rolling Stones", "teamTotalPoints": 790}];    
    
    return {
        /*function to return the teams object*/
        getTeams: function(){
            return teams;
        },
        
        /*function to update the teams array by using the current players new todayTotal. This is added to the teams teamTotalPoints property*/
        updateTeams: function(){
            /*Use the Players service to get the current player object*/
            var currentPlayer = Players.getCurrentPlayer();
            
            /*match the current's player teamName to a team array element*/
            for(var i=0;i<teams.length;i++){
                if(currentPlayer.teamName==teams[i].teamName){
                    /*adds the todayTotal points to the teams points*/
                    return teams[i].teamTotalPoints += TodayTotal.getTodayTotal();
                }/*End of if statement*/
            }/*End of for loop*/
        }/*End of updateTeams function*/
    }
    
    
});