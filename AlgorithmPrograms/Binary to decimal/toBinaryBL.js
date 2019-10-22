/*
* @description : convert form decimal to binary- (10 to 1010)
* @param {int}, which has data information
* @return {data}, displays data
*/
exports.toBinary = (n) => {
    try {
        let bin = "";
        while (n > 0) {
            let b = n % 2;
            bin = b + bin;
            n = parseInt(n / 2);
        }
        console.log(bin);
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}
