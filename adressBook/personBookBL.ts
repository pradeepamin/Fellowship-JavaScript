//Bussiness Logic
declare let require: any
const read = require('readline-sync')
let file = require('fs');
export class Person {
    firstname: string;
    lastname: string;
    city: string;
    state: string;
    constructor(firstname, lname, city, state) {
        this.firstname = firstname;
        this.lastname = lname;
        this.city = city;
        this.state = state;

    }
}
//inheriting Person class
export class AddressBook extends Person {
    phonenumber1: number;
    zip: number;
    constructor(firstname, lname, city, state, phnum, zip) {
        super(firstname, lname, city, state);
        this.phonenumber1 = phnum;
        this.zip = zip;
    }
    writeJson(datawrite) {
        return file.writeFileSync('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/TypeScript/adressBook/book.json', JSON.stringify(datawrite))
    }
    // create new address book function
    addPerson(data) {
        try {
            let fname: string = read.question("Enter firstname of person :")
            let lname: string = read.question("Enter lastname of person :")
            let city1: string = read.question("Enter city of person:")
            let state1: string = read.question("Enter state of person:")
            let phonenum1: number = read.question("Enter phonenumber:")
            let zip: number = read.question("Enter zip code:")
            // create object of Person class
            let o: any = new AddressBook(fname, lname, city1, state1, phonenum1, zip)
            console.log("data: ", data);
            console.log("object: ", o);
            /**
            * push each value into json
            */
            data.Person.push(o);
            // write data into json file
            this.writeJson(data);
        } catch (e) {
            console.log(e);
        }
    }
    // updating address book function
    updatePerson(data) {
        try {
            let name: string = read.question("enter Firstname of person :")
            for (let index1 = 0; index1 < data.Person.length; index1++) {
                if (data.Person[index1].firstname == name) {
                    let index = data.Person.indexOf(data.Person[index1]);
                    console.log(" select which information to be update ")
                    console.log("1: To change First Name")
                    console.log("2: To change Last Name")
                    console.log("3: To change Phone Number")
                    console.log("4: To change city")
                    console.log("5: To change state")
                    console.log("6: To change Zip")
                    let num1: number = read.questionInt("select any number:\n")
                    switch (num1) {
                        case 1: this.firsname(data, index)
                            break;
                        case 2: this.lasname(data, index)
                            break;
                        case 3: this.phonenumber(data, index)
                            break;
                        case 4: this.city1(data, index)
                            break;
                        case 5: this.state1(data, index)
                            break;
                        case 6: this.zipcode(data, index)
                            break;
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
    // update first name
    firsname(data, index) {
        try {
            let fname1: string = read.question("Enter the First name to be changed:")
            data.Person[index].firstname = fname1
            this.writeJson(data);
        } catch (e) {
            console.log(e);
        }
    }
    // update last name
    lasname(data, index) {
        let lname1: string = read.question("Enter the Last name to be changed:")
        data.Person[index].lastname = lname1
        this.writeJson(data);


    }
    // update phone number
    phonenumber(data, index) {
        let phonenumber1: number = read.question("Enter phonenumber to be changed:")
        data.Person[index].phonenumber = phonenumber1
        this.writeJson(data);
    }
    // update city
    city1(data, index) {
        let cityname: string = read.question("enter changed city name")
        data.Person[index].city = cityname
        this.writeJson(data);
    }
    // update city
    state1(data, index) {
        let statename: string = read.question("enter the changed state name")
        data.Person[index].state = statename
        this.writeJson(data);
    }
    // update zipcode
    zipcode(data, index) {
        let zipcode: number = read.question("enter the name changed zip code")
        data.Person[index].zip = zipcode
        this.writeJson(data);
    }
    // removing or deleting particulor person
    removeperson(data) {
        try {
            let name: string = read.question("Enter the name of person to remove from address book ")
            let person: any = data.Person;
            for (let index1 in person) {
                if (data.Person[index1].firstname == name) {
                    let index = data.Person.indexOf(data.Person[index1]);
                    // This will remove the object that name of the person
                    let dd = data.Person.splice(index, 1);
                    console.log("deleted person details : " + dd);
                }
                this.writeJson(data);
            }
        } catch (e) {
            console.log(e);
        }
    }
    /*
        This function sort the firstName
    */
    sortfname(data) {
            let fname = data.Person;
            function sortbyfname(a, b) {
                if (a.personfname == b.personfname)
                    return 0
                if (a.personfname > b.personfname)
                    return 1
                if (a.personfname < b.personfname)
                    return -1
            }
            var result = fname.sort(sortbyfname);
            console.log(result);
    }
    sortzip(data) {
            let refer = data.Person;
            function sortbyzip(a, b) {
                return (a.zip - b.zip);
            }
            var result = refer.sort(sortbyzip);
            console.log(result);
    }
    printadd(data) {
        try {
            var person = data.Person
            for (const key in person) {
                console.log(person[key])
            }
        } catch (e) {
            console.log(e);
        }
    }
}
export default AddressBook;