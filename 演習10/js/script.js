"use strict";

function getMinusNum(num){
    console.log("start");
    do {
        console.log("現在の値:" + num);
        num = num - 3;
    } while (num > 0);
    return ("end");
}

console.log(getMinusNum(10));
console.log(getMinusNum(-4));