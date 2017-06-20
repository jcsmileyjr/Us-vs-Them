
myApp.factory('CurrentPlayer', function(Players){

    var currentPlayer = {};    
    
    return {
        upDateCurrentPlayer: function(){
            var players = Players.getPlayers();
            console.log(players);
        }        
    }
    
    
});