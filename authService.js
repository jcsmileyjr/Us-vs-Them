/*service that help authenticate a player at logIn and allow or rescrit page access*/
myApp.factory('Auth', function($state){
    
    /*sets the object's state as false*/
    var authenticate= {authenticated:false};
    
    return{
        
        updateAuthenticate: function(){
            authenticate.authenticated = true;
        },
        
        getAuthenticate: function(){
            return authenticate.authenticated;
        }
        
    }/*end of service return methods*/
});