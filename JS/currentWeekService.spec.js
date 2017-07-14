/* Test Code */
describe("CurrentWeek Sevice:", function() {
    
    var CurrentWeek;
    
    beforeEach(module('UvT'));
    
    beforeEach(inject(function(_CurrentWeek_) {        
        /*setup the CurrentWeek service*/
        CurrentWeek = _CurrentWeek_;
    }));
        
    it('the getCurrentWeekNumber method returns a number greater then or equal to 1', function(){
        var currentWeek = CurrentWeek.getCurrentWeekNumber();
        /*use the typeOf function to determine if the varible is an object*/
        expect(currentWeek).toBeGreaterThan(1); 
    });


});