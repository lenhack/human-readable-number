module.exports = function toReadable (number) {
    let newString = '';
    let hundreds = Math.trunc(number / 100);
    let dozens = Math.trunc(number / 10) - hundreds * 10;
    let units = number % 10;
    if (number == 0){
        newString += 'zero';
    }
    else if (hundreds == 1){
        newString += 'one hundred';
    } else if (hundreds == 2){
        newString += 'two hundred';
    } else if (hundreds == 3){
        newString += 'three hundred';
    } else if (hundreds == 4){
        newString += 'four hundred';
    } else if (hundreds == 5){
        newString += 'five hundred';
    } else if (hundreds == 6){
        newString += 'six hundred';
    } else if (hundreds == 7){
        newString += 'seven hundred';
    } else if (hundreds == 8){
        newString += 'eight hundred';
    } else if (hundreds == 9){
        newString += 'nine hundred';
    }
    if (hundreds != 0 && dozens != 0){
        newString += ' ';
    }

    if (dozens == 1){
        if (units == 0){
            newString += 'ten';
        } else if (units == 1){
            newString += 'eleven';
        } else if (units == 2){
            newString += 'twelve';
        } else if (units == 3){
            newString += "thirteen";
        } else if (units == 4){
            newString += 'fourteen';
        } else if (units == 5){
            newString += 'fifteen';
        } else if (units == 6){
            newString += 'sixteen';
        } else if (units == 7){
            newString += 'seventeen';
        } else if (units == 8){
            newString += 'eighteen';
        } else if (units == 9){
            newString += 'nineteen';
        }
    } else if (dozens >= 2 && dozens <= 9){
        if (dozens == 2){
            newString += 'twenty';
        } else if (dozens == 3){
            newString += 'thirty';
        } else if (dozens == 4){
            newString += 'forty';
        } else if (dozens == 5){
            newString += 'fifty';
        } else if (dozens == 6){
            newString += 'sixty';
        } else if (dozens == 7){
            newString += 'seventy';
        } else if (dozens == 8){
            newString += 'eighty';
        } else if (dozens == 9){
            newString += 'ninety';
        }

        if (units != 0){
            newString += ' ';
        }

        if (units == 1){
            newString += 'one';
        } else if (units == 2){
            newString += 'two';
        } else if (units == 3){
            newString += 'three';
        } else if (units == 4){
            newString += 'four';
        } else if (units == 5){
            newString += 'five';
        } else if (units == 6){
            newString += 'six';
        } else if (units == 7){
            newString += 'seven';
        } else if (units == 8){
            newString += 'eight';
        } else if (units == 9){
            newString += 'nine';
        }
    } else {
        if (hundreds != 0 && units != 0){
            newString += ' ';
        }

        if (units == 1){
            newString += 'one';
        } else if (units == 2){
            newString += 'two';
        } else if (units == 3){
            newString += 'three';
        } else if (units == 4){
            newString += 'four';
        } else if (units == 5){
            newString += 'five';
        } else if (units == 6){
            newString += 'six';
        } else if (units == 7){
            newString += 'seven';
        } else if (units == 8){
            newString += 'eight';
        } else if (units == 9){
            newString += 'nine';
        }
    }
    return newString;
}
