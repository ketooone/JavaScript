"use strict";

window.onload = function(){
    document.getElementById("clickbutton").onclick = function(){
        let elm = document.getElementsByName("interest");
        let table = document.getElementById("table");
        let syainname = table.rows[0].cells[1].innerText;
        if (elm[0].checked){
            alert(syainname + "さん、回答ありがとうございます！ぜひ一緒に山登りしましょう！");
        } else if (elm[1].checked){
            alert(syainname + "さん、回答ありがとうございます！残念です、他にも興味があれば教えてください！");
        }
    };
};