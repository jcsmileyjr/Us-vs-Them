
myApp.factory('Team', function(){
    /* Use this for services
    this.teams = [{"teamName":"Globe Trotters", "teamTotalPoints": 500}, {"teamName":"Almost Retire", "teamTotalPoints": 650}, {"teamName":"Bad Boys and Girls", "teamTotalPoints": 900}, {"teamName":"Cookie Cutters", "teamTotalPoints": 325}, {"teamName":"Rolling Stones", "teamTotalPoints": 875}];
    
    this.getTeams = function(){
        return this.teams;
    }
    */
    var teams = [{"teamName":"Globe Trotters", "teamTotalPoints": 500}, {"teamName":"Almost Retire", "teamTotalPoints": 650}, {"teamName":"Bad Boys and Girls", "teamTotalPoints": 900}, {"teamName":"Cookie Cutters", "teamTotalPoints": 325}, {"teamName":"Rolling Stones", "teamTotalPoints": 875}];    
    
    return {
        getTeams: function(){
            return teams;
        }        
    }
    
    
});