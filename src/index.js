module.exports = function check(str, bracketsConfig) {
    let arrayForCheck = str.split('');

    let arrayTest = [];

    let res;
    for(let i = 0; i < arrayForCheck.length; i++) {
        res = false;

        for(let row = 0; row < bracketsConfig.length; row++) {
            if(bracketsConfig[row][0] === bracketsConfig[row][1]) {
                if(arrayForCheck[i] === bracketsConfig[row][0]) {
                    if(arrayTest[arrayTest.length - 1] === bracketsConfig[row][0]) {
                        arrayTest.pop();
                        res = true;
                        break;
                    }
                    else {
                        arrayTest.push(arrayForCheck[i]);
                        res = true;
                        break;
                    }
                }
            }

            if(arrayForCheck[i] === bracketsConfig[row][0]) {
                arrayTest.push(arrayForCheck[i]);
                res = true;
                break;
            }

            if(arrayForCheck[i] === bracketsConfig[row][1]) {
                if(arrayTest.pop() !== bracketsConfig[row][0]) {
                    return false;
                }
                else {
                    res = true;
                    break;
                }
            }
        }

        if(res === false) {
            return false;
        }
    }

    if(arrayTest.length > 0) {
        return false;
    }

    return true;
}
