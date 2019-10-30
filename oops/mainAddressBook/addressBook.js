let AddressBook = require('../mainAddressBook/addressBookBL')
//creating a object of the addressbook
let addressObject = new AddressBook();
//parsing json into json object
addressObject.jsonParse('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/oops/mainAddressBook/address.json');
//adding address to the addressbook

const read = require('readline-sync');

var choice = read.question("Enter you choice\n 1: Add Record\n 2: search \n 3: update\n 4: Delete\n");
switch (parseInt(choice)) {
    case 1: let fname = read.question("Enter the first fname\n");
        let lname = read.question("Enter the first lname\n");
        let hno = read.question("Enter the first house no\n");
        let place = read.question("Enter the first place\n");
        let dis = read.question("Enter the first district\n");
        addressObject.addAddress(fname, lname, hno, place, dis);
        break;
    case 2: let nameSearch = read.question("Enter the name you want to search\n");
        addressObject.search(nameSearch);
        break;
    case 3: let nameUpdate = read.question("Enter the name you want to update\n");
        addressObject.update(nameUpdate);
        break;

    case 4:let nameDelete = read.question("Enter the name you want to Delete\n"); 
    addressObject.delet(nameDelete);
    break;

}

//searching the address
// addressObject.search("manoj");
// //update the data of the addressbook
// addressObject.update("archana naval");
// //deleting the data in the addressbook
// addressObject.delet("archana");
// //save data back the json file
// addressObject.jsonSave();