"use strict";

function getDivision(x, y){
    if (!(typeof x == "number" && typeof y == "number")){
        return "数値を入力してください";
    } else if (y == 0){
        return "割る数に0を入れてはいけません";
    } else {
        return (x / y);
    }
}

console.log("xに文字列を入れた場合");
console.log(getDivision("x", 5));
console.log("yに文字列を入れた場合");
console.log(getDivision(20, "y"));
console.log("yに0を入れた場合");
console.log(getDivision(20, 0));
console.log("x=20、y=5を入れた場合");
console.log(getDivision(20, 5));