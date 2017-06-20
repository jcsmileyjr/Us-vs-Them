
myApp.factory('Players', function(){

    var players = [{"jerseyNumber":"7", "teamName": "Globe Trotters", "playerTotalPoint":"240", "playerName":"Nick Cage"}, {"jerseyNumber":"1", "teamName": "Globe Trotters", "playerTotalPoint":"200", "playerName":"Bob Dylan"}, {"jerseyNumber":"2", "teamName": "Almost Retire", "playerTotalPoint":"250", "playerName":"Dole White"}, {"jerseyNumber":"3", "teamName": "Bad Boys and Girls", "playerTotalPoint":"85", "playerName":"Bertha Sings"}, {"jerseyNumber":"4", "teamName": "Cookie Cutters", "playerTotalPoint":"280", "playerName":"Mary Beth Loy"}, {"jerseyNumber":"5", "teamName": "Rolling Stones", "playerTotalPoint":"390", "playerName":"Nate Shorts"}, {"jerseyNumber":"6", "teamName": "Globe Trotters", "playerTotalPoint":"220", "playerName":"Pink Panther"}];
    
    var currentPlayer = {};
    
    var jerseyNumber = 1;

    return {
        /*function to retrieve the players array object*/
        getPlayers: function(){
            return players;
        },
        
        /* function to update the currentPlayer shared object with the jerseyNumber retreived at log-in*/
        updateCurrentPlayer: function(){
            var newPlayers = players;
            for(var i=0; i<newPlayers.length;i++){
                if(jerseyNumber==newPlayers[i].jerseyNumber){
                currentPlayer = newPlayers[i];
                return currentPlayer;
                }/*End of if statement*/
            }/*End of for loop*/
        },/*End of updateCurrentPlayer*/         
        
        /*function to retreive the currentPlayer object*/        
        getCurrentPlayer: function(){            
            return currentPlayer;
        },/*End of getCurrentPlayer function*/
        
        getPlayerTeamRank: function(){
            var playersOnTeam = [];
            for(var i=0;i<players.length;i++){
                if(players[i].teamName == currentPlayer.teamName){
                    playersOnTeam.push(players[i]);
                }/*End of if statement*/
            }/*End of for loop*/

            /*sorting the playersOnTeam array from highest to lowest based on the playerTotalPoint property*/
            playersOnTeam.sort(function(a, b){
                return b.playerTotalPoint - a.playerTotalPoint;
            });

            for(var j=0;j<playersOnTeam.length;j++){
                console.log(playersOnTeam[j].jerseyNumber);
                console.log(currentPlayer.jerseyNumber);
                if(currentPlayer.jerseyNumber == playersOnTeam[j].jerseyNumber){
                    return playersOnTeam.indexOf(playersOnTeam[j]) + 1;
            }/*End of if statement*/
            }/*End of j's for loop*/                  
            
        }/*End of getPlayerTeamRank method*/
    }/*End of Players Factory object return*/
    
    
});