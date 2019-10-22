/*
* @description : taking two string to check for anagram
* @param {string,string}, which has data information
* @return {true or false}, /returning true or false
*/
exports.checkAnagram = (str1, str2) => {
    try {
        let s1 = str1.toLowerCase();
        let a1 = s1.split('').sort().join('');
        console.log(a1);

        let s2 = str2.toLowerCase();
        let a2 = s2.split('').sort().join('');
        console.log(a2);

        if (a1 === a2) {
            return true;
        }
        else
            return false;
    }
    catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}

/*
* @description : Take n Input value and return prime number and check for anagram
* @param {int,int}, which has data information to compare
* @return {true or false}, returning true or false
*/
exports.checkAnagram1 = (m, n) => {
    try {

        let a1 = m.split('').sort().join('');
        let a2 = n.split('').sort().join('');
        if (a1 === a2) {
            return true;
        }
        else
            return false;
    }
    catch (e) {
        console.log(e)
    }
}


/*
* @description : Prime numbers with given range
* @param {int}, which has data information to check prime
* @return {true or false}, returning true or false
*/
exports.checkPrimeNumber = (n) => {
    try {
        if (n == 0 || n == 1) {
            return false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }
    catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}

/*
* @description : Prime numbers with given range and check palindorme in it.
* @param {int}, which has data information to check prime
* @return {data}, returning data
*/
exports.checkPrimePalindrome = (alist) => {
    try {
        let blist = [];
        for (let i = 0; i < alist.length; i++) {
            let a = alist[i];
            let rev = 0;
            while (a > 0) {
                let r = a % 10;
                rev = rev * 10 + r;
                a = parseInt(a / 10);
            }
            if (rev == alist[i]) {
                blist.push(rev);
            }
        }
        return blist;
    }
    catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}

/*
* @description : Binary search for a given number.
* @param {int,int}, which has data information to check 
* @return {data}, returning the position
*/
exports.binarySearchInt = (arr, x) => {

    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = parseInt((l + r) / 2);
        if (arr[mid] == x)
            return mid;
        if (parseInt(arr[mid]) < x) {
            l = mid + 1;

        }
        else {
            r = mid = 1;
        }
    }
    return -1;
}

/*
* @description : Binary search for a given stirng.
* @param {string, string}, which has data information to check 
* @return {data}, returning the position
*/
exports.binarySearchString = (arr, key) => {

    let l = 0;
    let r = arr.length;
    let mid = Number((l + r) / 2);
    while (l <= r) {

        if (arr[mid] == key) {
            console.log("The Element " + key + " found at position-> " + mid);
            break;
        }
        else if (arr[mid] < key) {
            l = mid + 1;
        }

        else {
            r = mid - 1;
        }
        mid = Number((l + r) / 2);
    }
    if (l > r) {
        console.log("Element not found");
    }
}

/*
* @description : InsertionSort for given numbers
* @param {int}, which has data information
* @return {data}, returning sorted array
*/
exports.checkInsertionInt = (arr) => {
    let i, temp, j;
    for (i = 0; i < arr.length; i++) {
        temp = arr[i];
        j = i;
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j = j - 1;

        }
        arr[j] = temp;
    }
    console.log("Sorted Array\n")
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + "");
    }
}

/*
* @description : InsertionSort for given string
* @param {string}, which has data information
* @return {data}, returning sorted array
*/
exports.checkInsertionString = (arr) => {
    try {
        let i, temp, j;
        for (i = 0; i < arr.length; i++) {
            temp = arr[i];
            j = i;
            while (j > 0 && arr[j - 1] > temp) {
                arr[j] = arr[j - 1]
                j = j - 1;

            }
            arr[j] = temp;
        }
        console.log("Sorted Array-\n")
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i] + "");
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}

/*
* @description : bubble sort for given numbers
* @param {int}, which has data information
* @return {data}, returning sorted array
*/
exports.checkBubbleInt = (arr) => {
    try {
        let i, j, temp;
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i] + " ");
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}

/*
* @description : Bubble Sort for given string
* @param {string}, which has data information
* @return {data}, returning sorted array
*/
exports.checkBubbleString = (arr) => {
    try {
        let i, j, temp;
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.log("Sorted order\n")
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i] + "\n");
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}

// exports.fileCall = (path) => {
//     var fileStream = require('fs');
//     var f = fileStream.readFileSync(path, 'utf8');
//     var arr = f.split(' ');
//     return arr;
// }

// exports.writeFile = (filename, disp) => {
//     const fs = require('fs')
//     fs.writeFile(filename, disp, (err) => {
//         if (err) throw err;
//     })

// }

const fs = require('fs');
exports.fileCall = (filepath) => {
    try {
        text = fs.readFileSync(filepath);
        arr = text.toString().split(' ');
        return arr;
    } catch (e) {
        console.log(e);
    }
}
// /*----------------------------------------------------------------------------------------------------*/
exports.writeFile = (filepath, arr) => {
    try {
        fs.writeFileSync(filepath, arr.join(" "));
    } catch (e) {
        console.log(e);
    }
}





