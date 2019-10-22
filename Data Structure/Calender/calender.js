var util = require('util');
var utility = require('../../../../../../admin1/Documents/prp/javaScript_FR-master/Utility/utility');
var path = require('../../../../../Documents/prp/javaScript_FR-master/DataStructure_Utility/bintree')
var readline = require('readline-sync');
/**
 * Function defination.
 */
function calender() {
    var month = readline.questionInt("Enter the month : ");
    var year = readline.questionInt("Enter the year : ")
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = utility.dayOfWeek(1, month, year);
    var leap = path.leap(year);

    if (leap == true) {
        dates[2] = 29;
    }
    console.log();
    console.log("          " + months[month - 1] + " " + year);

    for (var i = 0; i < week.length; i++) {
        util.print(week[i] + "  ");
    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        util.print(" ");
    }

    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) {
            util.print(" " + i + "   ");
        }

        if (i > 9) {
            util.print("" + i + "   ")
        }

        if ((i + day) % 7 == 0) {
            console.log();
        }
    }
    console.log("\n\n");
}
/**
 * function calls
 */
calender();