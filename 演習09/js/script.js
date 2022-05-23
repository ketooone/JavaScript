"use strict";

function getMinusNum(num){
    console.log("start");
    if (num <= 0){
        console.log("現在の値:" + num);
    }
    while (num > 0){
        console.log("現在の値:" + num);
        num = num - 3;
    }
    return ("end");
}

console.log(getMinusNum(10));
console.log(getMinusNum(-4));