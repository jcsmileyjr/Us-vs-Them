
    
    /* Test Code */
describe("Team Sevice:", function() {
    var Team;
    beforeEach(module('UvT'));
    beforeEach(inject(function(_Team_) {
        Team = _Team_;
    }));

    it('check number of teams with getTeam function', function(){
        var numberOfTeams = Team.getTeams();
       expect(numberOfTeams.length).toEqual(5); 
    });
    
    it('getTeam() return an array/object', function(){
        var numberOfTeams = Team.getTeams();
       expect(typeof numberOfTeams).toBe('object'); 
    });
});