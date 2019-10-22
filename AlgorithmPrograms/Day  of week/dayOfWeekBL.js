/*
* @description : To find day of the week
* @param {int,int,int}, which has data information
* @return {int}, returning a int, which contains week days
*/
exports.dayOfWeek = (d, m, y) => {
    try {
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
        let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return week[d0];
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}
