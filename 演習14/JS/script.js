"use strict";

window.onload = function(){
    document.getElementById("clickbutton").onclick = function(){
        let elm = document.getElementsByName("interest");
        let customer = document.getElementsByName("customer");
        if (elm[0].checked){
            alert(customer[0].value + "さん、回答ありがとうございます！ぜひ一緒においしいお店行きましょう！");
        } else if (elm[1].checked){
            alert(customer[0].value + "さん、回答ありがとうございます！残念です、他にも興味があれば教えてください！");
        }
    };
};