const refernceQueue = require('../../Utility/queueUtility');
var obj = new refernceQueue.Queue();

exports.checkpalindrome = (palindrome) => {
    let obj = new refernceQueue.Queue();

    for (let i = 0; i < palindrome.length; i++) {
        obj.enqueue(palindrome[i]);

    }
    //obj.show();
    let reverseString = "";

    while (!obj.isEmpty()) {
        let rearDel = obj.deleteLast();
        reverseString = reverseString + rearDel.data;
    }
    console.log("After Reverse=", reverseString);

    if (reverseString == palindrome) {
        console.log(true);

    }
    else {
        console.log(false);
    }
}
