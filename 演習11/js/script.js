"use strict";

function printDataByName(name){
    const elm = document.getElementsByName(name);
    for (let i = 0; i < elm.length; i = i + 2){
        console.log(elm[i].innerText + "位:" + elm[i + 1].innerText);
    }
}
printDataByName("ranking");