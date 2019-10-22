module.exports={

    distancePoint(x,y)
    {
        try{
    
        var distance = Math.sqrt(x*x + y*y);
        return distance;
        }
        catch(e)
        {
            console.log(e.message);
            console.log(e.name);
        }
    }    
    


}