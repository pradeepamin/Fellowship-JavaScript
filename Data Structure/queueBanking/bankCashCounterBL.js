const bnk = require('../../Utility/queueUtility');
const read = require('readline-sync');

exports.banking = (amount, limit) => {

    var obj = new bnk.Queue();


    for (let i = 1; i <= limit; i++) {
        obj.enqueue(i);

    }
    do {
        let choice = read.question("Enter the option 1-Deposit, 2-Withdraw\n");
        if (choice == 1) {
            let cash = read.question("Enter the deposit amount\n");
            if (cash <= 0) {
                console.log("Enter the amount more than 0\n");

                cash = read.question("enter the depoit amount\n");
            }
            if (cash > 0) {

                amount = amount + parseInt(cash);
                console.log("Amount is=", amount);
                limit--;
            }
        }

            else if (choice == 2) {
                if (amount > 0) {
                    let withdraw =read.question ("Enter the money you want to withdraw");
                    if (withdraw > amount) {
                        console.log("Cash is not available please try later");
                        //withdraw=read.question("Enter the withdraw amount whithin--" +amount+ "\n");
                        obj.enqueue();

                    }
                    else {
                        amount = amount - parseInt(withdraw);
                        console.log("Amount is=", amount);
                        limit--;
                    }
                }
                else {
                    console.log("Amount is not avilable");
                }

            }
        

        //obj.enqueue();

    } while (limit != 0);

}
