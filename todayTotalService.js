/*Service to add curent players total points today, save information as a object, and return this information to to player service*/
myApp.factory('TodayTotal', function(){
    
    /*object to hold currrent player today's total*/
    var todayTotal = {"currentTotal":45};
    
        return {
        /*function to retrieve and return the todayTotal object curentTotal property */
            getTodayTotal: function(){
                return todayTotal.currentTotal;
            }
        }
});