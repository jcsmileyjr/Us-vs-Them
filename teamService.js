/*service that creates and returns a teams array of objects*/
myApp.factory('Team', function(){
    /* Use this for services
    this.teams = [{"teamName":"Globe Trotters", "teamTotalPoints": 500}, {"teamName":"Almost Retire", "teamTotalPoints": 650}, {"teamName":"Bad Boys and Girls", "teamTotalPoints": 900}, {"teamName":"Cookie Cutters", "teamTotalPoints": 325}, {"teamName":"Rolling Stones", "teamTotalPoints": 875}];
    
    this.getTeams = function(){
        return this.teams;
    }
    */
    /*array of team objects*/
    var teams = [{"teamName":"Globe Trotters", "teamTotalPoints": 500}, {"teamName":"Almost Retire", "teamTotalPoints": 650}, {"teamName":"Bad Boys and Girls", "teamTotalPoints": 900}, {"teamName":"Cookie Cutters", "teamTotalPoints": 325}, {"teamName":"Rolling Stones", "teamTotalPoints": 875}];    
    
    return {
        /*function to return the teams object*/
        getTeams: function(){
            return teams;
        }        
    }
    
    
});