const dow = require('../../Data Structure/Calender/dayOfWeekBL')
const LY = require('../../Data Structure/Calender/LeapYearBL')
const cal = require('../../Data Structure/Calender/calenderBL')
let m = parseInt(process.argv[2]);
let y = parseInt(process.argv[3]);
if (0 < m <= 12 && 0 < y <= 9999) {
    d0 = dow.dayOfWeek(1, m, y);
    console.log("day",d0);
}
let md;
if (LY.leapYear(y) && m == 2) {
    md = 29
}
else if (!LY.leapYear(y) && m == 2) {
     md = 28
}
else if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
     md = 31
}
else if ([4, 6, 9, 11].includes(m)) {
    md = 30
}
data = cal.calendar(d0, md);

data.forEach(element => {
    str = "";
    element.forEach(el => {
        str = str + el + ' ';
    })
    console.log(str, '\n');
});