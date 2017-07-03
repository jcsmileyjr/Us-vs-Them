/*service that checks against a database of log-In objects, returns jerseyNumber to playerService, and returns a yes/no to open app*/
myApp.factory('LogIn', function($state, Players){

    /*array of player log-in objects*/
    var credentials = [{"jerseyNumber":1, "password": 1}, {"jerseyNumber":2, "password": 2}, {"jerseyNumber":3, "password": 3}, {"jerseyNumber":5, "password": 4}, {"jerseyNumber":5, "password": 5}, {"jerseyNumber":6, "password": 6}, {"jerseyNumber":7, "password": 7}];    
    
    var pass= "";
    
    
    return {
        /*function to update pass*/
        updatePass: function(newPass){
            pass= newPass;    
        },
            
        /*function to return pass*/
        getPass: function(){
            return pass;
        },
        /*function to validate log-In page input against the credential array. */
        logIn: function(jerseyNumber, password){
            for(var i=0;i<credentials.length;i++){
                
                /*test if both parameters is validated against the current element in the credential array*/
                if(jerseyNumber==credentials[i].jerseyNumber && password==credentials[i].password){
                    /*use a Players service method to update the global jeresyNumber variable in the service*/
                    Players.updateJerseyNumber(jerseyNumber);
                    
                    /*use the Players service method to update the shared currentPlayer object (in the service) based on the log-in jerseyNumber enter*/
                    Players.updateCurrentPlayer();                    
                    
                    $state.go('input');
                    
                    /*returns a true which pass the logIn function*/
                    return pass= true;
                }                
            }/*End of for loop*/
            /*return a false which fails the logIn function*/
            return pass = false;
        }/*End of logIn function*/        
    }/*End of LogIn Service return*/    
});