const numberToReversedDigits = (number) => {
    number = number + "";
    return number.split("").reverse().map(Number);

}

export default numberToReversedDigits
