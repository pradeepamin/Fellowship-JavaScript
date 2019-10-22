module.exports={

namereplace(str)
{
    var str_length = str.length;
    
   if( str_length>3 && str >= "a" && str <= "z" || str >= "A" && str <= "Z")
               {
               var str1="Hi <<UserName>> how r u ";
               var result=str1.replace("<<UserName>>",str);
               console.log(result);
}
               else
            {
            console.log("Please enter minimum 3 character");
            }
              
    },
 }

            
          
            
        


