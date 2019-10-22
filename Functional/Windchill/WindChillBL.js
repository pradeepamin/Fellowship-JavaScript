module.exports={

    windchill(t,v)
    {
        try
        {
            if(v>120 || v<3)
            {
                console.log("Invalid should not be between 3-120");
            }
            else
            {
                
                    if(Math.abs(t)>50)
                    
                    {
                        console.log("t is larger than 50 in absolute value");
                    }
                    else
                    {
                    var w=35.74+0.6215*t+(0.4275*t-35.75)*(Math.pow(v,0.5));
                    return w;
                    //console.log(w);
                    }
                    console.log(Math.abs(t));
            }
        }
        catch(e)
        {
            console.log(e.message);
            console.log(e.name);
        }

    },

}