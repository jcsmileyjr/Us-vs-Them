/*service that creates, returns, updates a teams array of objects and a currentPlayer object. There is a method to get the team ranking and game ranking of the currentPlayer*/
myApp.factory('Players', function(TodayTotal){

    /*array of player objects*/
    var players = [{"jerseyNumber":7, "teamName": "Globe Trotters", "playerTotalPoint":240, "playerName":"Nick Cage"}, {"jerseyNumber":1, "teamName": "Globe Trotters", "playerTotalPoint":200, "playerName":"Bob Dylan"}, {"jerseyNumber":2, "teamName": "Almost Retire", "playerTotalPoint":650, "playerName":"Dole White"}, {"jerseyNumber":3, "teamName": "Bad Boys and Girls", "playerTotalPoint":485, "playerName":"Bertha Sings"}, {"jerseyNumber":4, "teamName": "Cookie Cutters", "playerTotalPoint":680, "playerName":"Mary Beth Loy"}, {"jerseyNumber":5, "teamName": "Rolling Stones", "playerTotalPoint":790, "playerName":"Nate Shorts"}, {"jerseyNumber":6, "teamName": "Globe Trotters", "playerTotalPoint":220, "playerName":"Pink Panther"}];
    
    var currentPlayer = {};
    
    var jerseyNumber = 0;

    return {
        /*function to update jerseyNumber*/
        updateJerseyNumber: function(newJerseyNumber){
            jerseyNumber = newJerseyNumber;    
        },
            
        /*function to return the jerseyNumber*/
        getJerseyNumber: function(){
            return jerseyNumber;
        },
        
        /*function to retrieve the players array object*/
        getPlayers: function(){
            return players;
        },
        
        /* function to update the currentPlayer shared object with the jerseyNumber retreived at log-in*/
        updateCurrentPlayer: function(){
            
            var newPlayers = players;
            for(var i=0; i<newPlayers.length;i++){
                /*match the jersetyNumber from log-In a jerseyNumber in the players array*/
                if(jerseyNumber==newPlayers[i].jerseyNumber){
                /*If a match is found, the current player object is transfer into the currentPlayer object*/    
                currentPlayer = newPlayers[i];
                return currentPlayer;
                }/*End of if statement*/
            }/*End of for loop*/
        },/*End of updateCurrentPlayer*/         
        
        /*function to retreive the currentPlayer object*/        
        getCurrentPlayer: function(){            
            return currentPlayer;
        },/*End of getCurrentPlayer function*/
        
        /*a method that gets all the team members of the current player from the players array to find the current rank of the current player compared to other team members.*/
        getPlayerTeamRank: function(){
            /*create an array to hold team members of the currentPlayer object*/
            var playersOnTeam = [];
            /*use a for loop in the players array to place all players objects matching the teamName of the currentPlayer object into a playersOnTeam array of objects.*/
            for(var i=0;i<players.length;i++){
                if(players[i].teamName == currentPlayer.teamName){
                    playersOnTeam.push(players[i]);
                }/*End of if statement*/
            }/*End of for loop*/

            /*decending sort the playersOnTeam array, based on the playerTotalPoint property, using a array.sort compare method.*/
            playersOnTeam.sort(function(a, b){
                return b.playerTotalPoint - a.playerTotalPoint;
            });

            /*use a for loop to search the sorted playersOnTeam array for the jerseyNumber of the currentPlayer object. If found, return the array.indexOf to get the current index plus 1 to get the rank. */
            for(var j=0;j<playersOnTeam.length;j++){
                if(currentPlayer.jerseyNumber == playersOnTeam[j].jerseyNumber){
                    return playersOnTeam.indexOf(playersOnTeam[j]) + 1;
            }/*End of if statement*/
            }/*End of j's for loop*/ 
        },/*End of getPlayerTeamRank method*/
        
        /*a method to calculate number of team mates on a team*/
        getNumberOfTeamMembers: function(){
            /*create an array to hold team members of the currentPlayer object*/
            var playersOnTeam = [];
            /*use a for loop in the players array to place all players objects matching the teamName of the currentPlayer object into a playersOnTeam array of objects.*/
            for(var i=0;i<players.length;i++){
                if(players[i].teamName == currentPlayer.teamName){
                    playersOnTeam.push(players[i]);
                }/*End of if statement*/
            }/*End of for loop*/
            return playersOnTeam.length;
        },
        
        /*a method to calculate number of players in the game*/
        getNumberOfGameMembers: function(){
            return players.length;
        },
        
        /*a method that gets the current rank of the current player compared to all players in the game.*/        
        getPlayerGameRank: function(){
            /*decending sort the players array, based on the playerTotalPoint property, using a array.sort compare method.*/
            players.sort(function(a, b){
                return b.playerTotalPoint - a.playerTotalPoint;
            })/* End of sort*/
            
            /*use a for loop to search the sorted players array for the jerseyNumber of the currentPlayer object. If found, return the array.indexOf to get the current index plus 1 to get the rank. */
            for(var j=0;j<players.length;j++){
                if(currentPlayer.jerseyNumber == players[j].jerseyNumber){
                    return players.indexOf(players[j]) + 1 ;
            }/*End of if statement*/
            }/*End of j's for loop*/             
        },/*End of getPlayerGameRank function*/
        
        /*use the TodayTotal service to get the current player today's total. This amount is added to the current player playerTotalPoints porperty. The players array is then updated*/
        updatePlayerTotalPoints: function(){
            /*retreied todayTotal amount from TotayTotal service*/
            var currentTotal = TodayTotal.getTodayTotal();
            
            /*find the currentPlayer the players array and add the currentTotal variable to the currentPlayer's playerTotalPoint*/
            for(var i=0; i<players.length;i++){
                /*match the jersetyNumber from log-In a jerseyNumber in the players array*/
                if(currentPlayer.jerseyNumber==players[i].jerseyNumber){
                
                /*If a match is found, the currentTotal is added the matching player playerTotatPoint property. */      
                players[i].playerTotalPoint += currentTotal;
                return;
                }/*End of if statement*/
            }/*End of for loop*/
            
        }
    }/*End of Players Factory object return*/
    
    
});