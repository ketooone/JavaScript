"use strict";

function changeCustomer(id, customer){
    let elm = document.getElementById(id);

    elm.value = customer;
}

function changeColor(name){
    let elm = document.getElementsByName(name);

    elm[0].checked = true;
    elm[1].checked = false;
}

function changeBloodtype(id){
    let elm = document.getElementById(id);

    elm[0].selected = true;
    elm[2].selected = false;
}

function changeHobby(id){
    let elm = document.getElementById(id);

    elm[0].selected = false;
    elm[1].selected = true;
    elm[2].selected = false;
    elm[3].selected = true;
}

changeCustomer("customer", "ふるねすはなこ");
changeColor("color");
changeBloodtype("bloodtype");
changeHobby("hobby");