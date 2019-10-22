/*
* @description : to find amount as to pay monthly loan instalment
* @param {int,int,int}, which has data information
* @return {data}, displays data
*/
exports.checkPayments = (P, Y, R) => {
    try {
        console.log(P)
        let n = 12 * Y;
        let r = R / (12 * 100);
        let payment = (P * r) / (1 - Math.pow((1 + r), -n));
        console.log(payment);
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}
