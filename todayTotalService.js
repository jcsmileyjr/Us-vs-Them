/*Service to add curent players total points today, save information as a object, and return this information to to player service*/
myApp.factory('TodayTotal', function($state){
    
    /*object to hold currrent player today's total*/
    var todayTotal = {"currentTotal":0};
    
        return {
        /*function to retrieve and return the todayTotal object curentTotal property */
            getTodayTotal: function(){
                return todayTotal.currentTotal;
            },
            
            addCurrentTotal: function(steps, water, vegetables, physicalFitness){
                var stepsPoints = ((steps/2000)*10); /*10 point for every 2000 steps*/
                var waterPoints = ((water/2)*5); /*5 point for every 2 cups of water*/
                var vegetablesPoints = (vegetables*5); /*5 point for every 2 cups of water*/
                var pfPoints = ((physicalFitness/20)*10); /*20 points for every 20 minutes*/
                
                var currentTotal = stepsPoints + waterPoints + vegetablesPoints + pfPoints;
                
                todayTotal.currentTotal = currentTotal;
                
                
                $state.go('stats');
            }
        }
});