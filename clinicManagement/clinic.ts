/********************************************************************
* @Execution    : esktop/Pradeep/FelloshipJavaScript/TypeScript/clinicManagement
* @description  : Clinic management
* @overview     : TypeScript 
* @file         : clinic>ts
* @author       : PRADEEP B AMIN <pradeepbamin5gmail.com>
* @version      : 2.7.2
* @since        : 25-Nov-2019
*
*********************************************************************/
declare var require: any
var read = require('readline-sync');
var fs = require('fs');
/**
 * @param patient @param doctor store information and manage list 
 */
function clinique() {
    fs.readFile('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/TypeScript/clinicManagement/clinic.json', function (err, data) {
        if (err) throw err
        else
        var clinique = JSON.parse(data);
        console.log("1.ADD Appointment\n2.PRINTLIST\n3.SEARCH\n4.EXIT");
        let option: number = read.question('Enter the option:');
        switch (option) {
            case 1:
                console.log("*Doctors Available*");
                console.log(clinique.Doctors);
                var Name: string = read.question('Patient Name: ');
                var ID: number = Math.random() * 10;
                var mobNo: number = read.question('Mobile Number: ');
                var Age: number = read.question('age : ');
                var Appointed_To = read.question('whose appointment u want: ');
                clinique.Patients.push(
                    {
                        "Name": Name,
                        "ID": ID,
                        "mobNo": mobNo,
                        "Age": Age,
                        "Appointed_To": Appointed_To
                    })
                console.log("Appointment Added Successfully...");
                fs.writeFile('/home/admin1/Desktop/Pradeep/FelloshipJavaScript/TypeScript/clinicManagement/clinic.json', JSON.stringify(clinique));
                break;
        }
    })
} clinique();