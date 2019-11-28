"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var read = require('readline-sync');
var file = require('fs');
var Person = /** @class */ (function () {
    function Person(firstname, lname, city, state) {
        this.firstname = firstname;
        this.lastname = lname;
        this.city = city;
        this.state = state;
    }
    return Person;
}());
exports.Person = Person;
//inheriting Person class
var AddressBook = /** @class */ (function (_super) {
    __extends(AddressBook, _super);
    function AddressBook(firstname, lname, city, state, phnum, zip) {
        var _this = _super.call(this, firstname, lname, city, state) || this;
        _this.phonenumber1 = phnum;
        _this.zip = zip;
        return _this;
    }
    AddressBook.prototype.writeJson = function (datawrite) {
        return file.writeFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/TypeScript/adressBook/book.json', JSON.stringify(datawrite));
    };
    // create new address book function
    AddressBook.prototype.addPerson = function (data) {
        var fname = read.question("Enter firstname of person :");
        var lname = read.question("Enter lastname of person :");
        var city1 = read.question("Enter city of person:");
        var state1 = read.question("Enter state of person:");
        var phonenum1 = read.question("Enter phonenumber:");
        var zip = read.question("Enter zip code:");
        // create object of Person class
        var o = new AddressBook(fname, lname, city1, state1, phonenum1, zip);
        console.log("data: ", data);
        console.log("object: ", o);
        /**
        * push each value into json
        */
        data.Person.push(o);
        // write data into json file
        this.writeJson(data);
    };
    // updating address book function
    AddressBook.prototype.updatePerson = function (data) {
        var name = read.question("enter Firstname of person :");
        for (var index1 = 0; index1 < data.Person.length; index1++) {
            if (data.Person[index1].firstname == name) {
                var index = data.Person.indexOf(data.Person[index1]);
                console.log(" select which information to be update ");
                console.log("1: To change First Name");
                console.log("2: To change Last Name");
                console.log("3: To change Phone Number");
                console.log("4: To change city");
                console.log("5: To change state");
                console.log("6: To change Zip");
                var num1 = read.questionInt("select any number:\n");
                switch (num1) {
                    case 1:
                        this.firsname(data, index);
                        break;
                    case 2:
                        this.lasname(data, index);
                        break;
                    case 3:
                        this.phonenumber(data, index);
                        break;
                    case 4:
                        this.city1(data, index);
                        break;
                    case 5:
                        this.state1(data, index);
                        break;
                    case 6:
                        this.zipcode(data, index);
                        break;
                }
            }
        }
    };
    // update first name
    AddressBook.prototype.firsname = function (data, index) {
        var fname1 = read.question("Enter the First name to be changed:");
        data.Person[index].firstname = fname1;
        this.writeJson(data);
    };
    // update last name
    AddressBook.prototype.lasname = function (data, index) {
        var lname1 = read.question("Enter the Last name to be changed:");
        data.Person[index].lastname = lname1;
        this.writeJson(data);
    };
    // update phone number
    AddressBook.prototype.phonenumber = function (data, index) {
        var phonenumber1 = read.question("Enter phonenumber to be changed:");
        data.Person[index].phonenumber = phonenumber1;
        this.writeJson(data);
    };
    // update city
    AddressBook.prototype.city1 = function (data, index) {
        var cityname = read.question("enter changed city name");
        data.Person[index].city = cityname;
        this.writeJson(data);
    };
    // update city
    AddressBook.prototype.state1 = function (data, index) {
        var statename = read.question("enter the changed state name");
        data.Person[index].state = statename;
        this.writeJson(data);
    };
    // update zipcode
    AddressBook.prototype.zipcode = function (data, index) {
        var zipcode = read.question("enter the name changed zip code");
        data.Person[index].zip = zipcode;
        this.writeJson(data);
    };
    // removing or deleting particulor person
    AddressBook.prototype.removeperson = function (data) {
        var name = read.question("Enter the name of person to remove from address book ");
        var person = data.Person;
        for (var index1 in person) {
            if (data.Person[index1].firstname == name) {
                var index = data.Person.indexOf(data.Person[index1]);
                // This will remove the object that name of the person
                var dd = data.Person.splice(index, 1);
                console.log("deleted person details : " + dd);
            }
            this.writeJson(data);
        }
    };
    /*
        This function sort the firstName
    */
    AddressBook.prototype.sortfname = function (data) {
        var fname = data.Person;
        function sortbyfname(a, b) {
            if (a.personfname == b.personfname)
                return 0;
            if (a.personfname > b.personfname)
                return 1;
            if (a.personfname < b.personfname)
                return -1;
        }
        var result = fname.sort(sortbyfname);
        console.log(result);
    };
    AddressBook.prototype.sortzip = function (data) {
        var refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);
    };
    AddressBook.prototype.printadd = function (data) {
        var person = data.Person;
        for (var key in person) {
            console.log(person[key]);
        }
    };
    return AddressBook;
}(Person));
exports.AddressBook = AddressBook;
exports["default"] = AddressBook;
