"use strict";

window.onload = function(){
    document.getElementById("clickbutton").onclick = function(){
        let elm = document.getElementsByName("interest");
        if (elm[0].checked){
            let table = document.getElementById("table");
            let syainname = table.rows[0].cells[1].innerText;
            alert(syainname + "さん、回答ありがとうございます！ぜひ一緒に山登りしましょう！");
        }
    };
};