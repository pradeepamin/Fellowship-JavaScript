module.exports={

powertwo(n)
{
    try{
            if(n>0 && n<32)
            {
                var power=0;
                for(var i=1;i<n;i++)
                {
                power=Math.pow(2,i);
                console.log(power);
                }
            }
            else
            {
            console.log("Overflow over Int");
            }
        }
        catch(e)
        {
        console.log(e.message);
        console.log(e.name);
        }                                                                                                                                  
    
},
}
