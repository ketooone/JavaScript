"use strict";

function getCustomerDataById(id){
    const elm = document.getElementById(id);
    return elm.value;
}

function getColorDataByName(name){
    const elm = document.getElementsByName(name);
    for (let i = 0; i < elm.length; i++){
        if (elm[i].checked){
            return elm[i].value;
        }
    }
    return null;
}

function getBloodtypeDataById(id){
    const elm = document.getElementById(id).options;
    for (let i = 0; i < elm.length; i++){
        if (elm[i].selected){
            return elm[i].innerText;
        }
    }
}

//todo 複数選択を取得する際に改行なしでconsoleに出力する
function getMultipleDataById(id){
    const elm = document.getElementById(id).options;
    let selects = [elm.length]; //selectされた要素だけを入れる関数
    let j = 0;

    for (let i = 0; i < elm.length; i++){
        if (elm[i].selected){
            selects[j] = elm[i].innerText;
            j++;
        }
    }
    return selects;
}

function setMultipleDataToText(data){
    let text = "";

    for (let i = 0; i < data.length; i++){
        text += data[i];
        if (i != data.length - 1){
            text += "と";
        }
    }
    return text;
}

console.log(getCustomerDataById("customer") + "さん、こんにちは！");
console.log(getColorDataByName("color") + "が選択されています");
console.log(getBloodtypeDataById("bloodtype") + "が選択されています");
let data = getMultipleDataById("hobby"); //趣味のデータを配列で取得
let text = setMultipleDataToText(data); //配列をテキストに変換
console.log(text + "が選択されています");