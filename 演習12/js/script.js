"use strict";

function getDataById(id){
    const elm = document.getElementById(id);
    return elm.innerText;
}

function getDataByName(name){
    const elm = document.getElementsByName(name);
    return elm.innerText;
}


//todo 複数選択を取得する際に改行なしでconsoleに出力する
function printMultipleDataById(id){
    const elm = document.getElementById(id).options;

    for (let i = 0; i < elm.length; i++){
        // console.log(elm.)
    }
}