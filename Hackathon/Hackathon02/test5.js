function isArmstrong(num) {
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + digit * digit * digit;
        temp = (temp - (temp % 10)) / 10;
    }

    return sum === num;
}

console.log(isArmstrong(153));