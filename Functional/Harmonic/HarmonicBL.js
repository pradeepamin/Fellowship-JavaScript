module.exports={

    harmonic_series(n)
    {
        var harmonic=1;
        for(var i=2;i<n;i++)
        {
            var harmonic=harmonic+1/i;  
        }
        return harmonic;
    },

}