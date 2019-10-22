module.exports={
    primeFact(num)
    {
        for(var i=2;i<=num;i++)
        {
            while(num%i==0)
            {
                console.log(i);
                num=num/i;
            }
            
        }
    },

}