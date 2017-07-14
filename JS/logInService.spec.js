    /* Test Code */
describe("LogIn Sevice:", function() {
    
    var LogIn;
    
    beforeEach(module('UvT'));
    
    beforeEach(inject(function(_LogIn_) {        
        /*setup the Log-In service*/
        LogIn = _LogIn_;
    }));
    
    it('if given a correct jerseyNumber and password, a "true" is return', function(){
        var jerseyNumber = 1;
        var password = 1;
        
        /*use the LogIn service method to return either true or false if the login matches a element in the credentials databases*/
        var pass = LogIn.logIn(jerseyNumber, password);
        
        /*check if the pass variable is true */
        expect(pass).toBe(true); 
    });
    
    it('if given a incorrect jerseyNumber and password, a "false" is return', function(){
        var jerseyNumber = 0;
        var password = 0;
        
        /*use the LogIn service method to return either true or false if the login matches a element in the credentials databases*/
        var pass = LogIn.logIn(jerseyNumber, password);
        
        /*check if the pass variable is false*/
        expect(pass).toBe(false); 
    });
    
    it('if given a correct jerseyNumber and incorrect password, a "false" is return', function(){
        
        var jerseyNumber = 1;
        var password = 0;
        
        /*use the LogIn service method to return either true or false if the login matches a element in the credentials databases*/
        var pass = LogIn.logIn(jerseyNumber, password);
        
        /*check if the pass variable is false*/
        expect(pass).toBe(false); 
    });
    
    it('if given a incorrect jerseyNumber and correct password, a "false" is return', function(){
        
        var jerseyNumber = 0;
        var password = 1;
        
        /*use the LogIn service method to return either true or false if the login matches a element in the credentials databases*/
        var pass = LogIn.logIn(jerseyNumber, password);
        
        /*check if the pass variable is false*/
        expect(pass).toBe(false); 
    });    


});