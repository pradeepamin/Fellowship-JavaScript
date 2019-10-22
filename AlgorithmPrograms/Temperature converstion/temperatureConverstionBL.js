/*
* @description : To find temperaturConversion with given value
* @param {int,int}, which has data information
* @return {data}, returning data
*/
exports.Conversion = (n, C) => {
    try {
        switch (parseInt(n)) {
            case 1:
                let f = (C * 9 / 5) + 32;
                console.log("The temprature in farneheight->" + f);
                break;
            case 2:
                let F = C;
                let c = (F - 32) * (5 / 9);
                console.log("The temprature in celcious->" + c);
                break;
            default:
                console.log("Invaild input");
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}

