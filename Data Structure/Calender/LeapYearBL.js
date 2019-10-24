module.exports={ 

    leapYear(year)
    {
        if(year > 999 && year < 10000)
        {
        if(year%4==0 && year%100!=0 || year%400==0)
        console.log(year+" is leap year");
        else
        console.log(year+" is not leap year");
        }
        else
        {
        console.log("In-valid input");
        }
    },
   
   }