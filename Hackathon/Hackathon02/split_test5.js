let str = "racecar";

let chars = str.split("");

let reversedArr = chars.reverse();

let reversed = reversedArr.join("");

if (str === reversed) {
    console.log(str + " is a Palindrome");
} else {
    console.log(str + " is not a Palindrome");
}