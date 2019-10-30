var file=require("fs");
var util=require('../../Utility/oopsUtility');
function inventory()
{
    try{

        var data=file.readFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/inventory.json')
        var object=JSON.parse(data);
        util.inventoryObj(object);
        // console.log(object);

    }catch(error){
        console.log(e.name);
        console.log(e.message);

    }
}
inventory();