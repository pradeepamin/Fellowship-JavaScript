
const Impt = require('../../Utility/utility')
exports.primeTwoD = (n) => {
    let arr1 = [];

    for (let i = 0; i < n / 100; i++) {

        let arr = [];
        {
            for (let j = i * 100; j <= (i + 1) * 100; j++) {
                if (Impt.checkPrimeNumber(j))                 //check in util method
                    arr.push(j);
            }

        }
        arr1.push(arr);
        //console.log(arr1);
    }
    arr1.forEach(a => {

        var str = "";
        a.forEach(b => {

            str = str + b + " ";
        })
        console.log(str);
    })

}
