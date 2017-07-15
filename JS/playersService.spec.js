/* Test Code */
describe("Players and TodayTotal Sevice:", function() {
    var Players;
    var TodayTotal;
    beforeEach(module('UvT'));
    beforeEach(inject(function(_Players_, _TodayTotal_ ) {        
        /*setup the Players service*/
        Players = _Players_;
        
        /*setup the TodayTotal service*/
        TodayTotal = _TodayTotal_;
    }));
        
    it('The getPlayers function retrieves an array of objects', function(){
        /*uses the Players service's getPlayers method to return the players array*/
        var players = Players.getPlayers();
        
        /*use the typeOf function to determine if the varible is an object*/
        expect(typeof players).toBe('object'); 
    });

    it('currentPlayer object can be updated with logged-in player jerseyNumber', function(){
        /*setup jerseyNumber of mock logged-in player */
        Players.updateJerseyNumber(1);
        var jerseyNumber = Players.getJerseyNumber();
        
        /*setup currentPlayer object */
        var currentPlayer = {};
        
        /*update currentPlayer object */
        currentPlayer = Players.updateCurrentPlayer();
        
        /*get the currentPlayer's playerName property equal Bob Dylan*/
        expect(currentPlayer.playerName).toEqual("Bob Dylan");
    });
    
    it('currentPlayer object can be retrieved', function(){
        /*use the Players service method getCurrentPlayer to return currentPlayer object*/
        var newPlayer = Players.getCurrentPlayer();
        
        /*use the typeOf function to determine if the varible is an object*/
        expect(typeof newPlayer).toBe('object');
    });
    
    it('team ranking of the currentPlayer is returned', function(){
        /*setup jerseyNumber of mock logged-in player */
        Players.updateJerseyNumber(1);
        var jerseyNumber = Players.getJerseyNumber();
        
        /*setup currentPlayer object */
        var currentPlayer = {};
        
        /*update currentPlayer object */
        currentPlayer = Players.updateCurrentPlayer();
        
        /*uses the Players service's getPlayerTeamRanks method to return the team rank of the currentPlayer (jerseyNumber 1)*/
        var teamRank = Players.getPlayerTeamRank();
        
        /*test if teamRank is 3*/
        expect(teamRank).toBe(3);
    });
    
    it('game ranking of the currentPlayer is returned', function(){
        /*setup jerseyNumber of mock logged-in player */
        Players.updateJerseyNumber(1);
        var jerseyNumber = Players.getJerseyNumber();
        
        /*setup currentPlayer object */
        var currentPlayer = {};
        
        /*update currentPlayer object */
        currentPlayer = Players.updateCurrentPlayer();
        
        /*uses the Players service's getPlayerGameRanks method to return the game rank of the currentPlayer (jerseyNumber 1)*/
        var gameRank = Players.getPlayerGameRank();
        
        /*test if teamRank is not 1*/
        expect(gameRank).not.toBe(1);
        expect(gameRank).toBe(7); 
    });
    
    it('currentPlayer object peoperty playerTotalPoints can be updated', function(){
        /*setup jerseyNumber of mock logged-in player */
        Players.updateJerseyNumber(1);
        var jerseyNumber = Players.getJerseyNumber();
        
        /*setup currentPlayer object */
        var currentPlayer = {};
        
        /*update currentPlayer object */
        currentPlayer = Players.updateCurrentPlayer();
        
        /*uses the Players service's getPlayers method to return the players array*/
        var players = Players.getPlayers();
        
        /*test to show original currentPlayer's playerTotalPoints is 200*/
        expect(currentPlayer.playerTotalPoint).toBe(200);
        
        TodayTotal.addCurrentTotal(10000,14,5,60);
        
        /*use the Players service method updatePlayerTotalPoints to update the players array*/
        Players.updatePlayerTotalPoints();
        
        /*update currentPlayer object */
        currentPlayer = Players.updateCurrentPlayer();        
        
        /*test to show currentPlayer object in the array has been updated by todayTotal. (the TodayToal service use a mock amount of 45.*/        
        expect(currentPlayer.playerTotalPoint).toBe(340);
        
    });
});