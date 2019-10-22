/*
* @description : convert form binary to decimal- (1010 to 10)
* @param {int}, which has data information
* @return {data}, displays data
*/
exports.toDecimal = (n) => {
    try {
        let dec = 0, i = 0;
        while (n != 0) {
            dec += n % 10 * Math.pow(2, i);
            n = parseInt(n / 10);
            i++;
        }
        console.log("Your Decimal number is from Binary ==>>" + dec);
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}
