/*service to get the current week of the challenge since the start Date (startDate variable minus the current Date). This amount is placed in numberOfDays variable then divide by 7 to get currentWeek. The solution to the problem was found at http://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates-using-javascript  */
myApp.service('CurrentWeek', function(){
    this.getCurrentWeekNumber = function(){
    /*get current date at log-In */
    this.currentDate = new Date();
        
    /*get the start date of the challenge */
    this.startDate= new Date("6/1/2017");
    
    /*get the minutes in a day */
    this.oneDay = 24*60*60*1000; 
        
    /*Used the date.getTime() to get and subtract the milliseconds of startDate and currentDate. This is divided by the oneDay variable and rounded (Math.round) to the nearest Interger turned positive (Math.abs)*/
    this.numberOfDays = Math.round(Math.abs((this.currentDate.getTime() - this.startDate.getTime())/(this.oneDay)));
    if(this.numberOfDays <= 7)
        return this.currentWeek = 1; /*If challenge just started, it will output 1 instead of 0*/
    else
        return this.currentWeek = Math.round(this.numberOfDays/7);/*round to nearest Interger the number of Days divided by 7*/
    }
});/*End of CurrentWeek service*/