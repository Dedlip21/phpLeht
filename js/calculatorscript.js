var vastus=document.getElementById("vastus")
var kogus=document.getElementById("kogus")

const  dollar=1.16;
const rub =84.20;
const sek=10.65;
const frank=1.077;

//перемножает
function calculate(val, currency){
    return(val * currency).toFixed(3)
    //toFixed - колько знаков после запятой
}

function radioChange(event){
    if (event.target.id=="dollar"){
        vastus.innerHTML=calculate(kogus.value, dollar) + "$";
        pilt.src="img/dollar.jpg";
    }
}
function radioChange2(event){
    if (event.target.id=="rub") {
        vastus.innerHTML = calculate(kogus.value, rub) + "₽";
        pilt.src="img/rouble.jpg";
    }
}
function radioChange3(event){
    if (event.target.id=="kroon") {
        vastus.innerHTML = calculate(kogus.value, sek) + "SEK";
        pilt.src="img/Rootsi kroon.jpg";
    }
}
function radioChange4(event){
    if (event.target.id=="frank") {
        vastus.innerHTML = calculate(kogus.value, frank) + "CHF";
        pilt.src="img/Sveitsi frank.gif";
    }
}
function selectOptionChange(event){
    var vastus2=document.getElementById("vastus2")
    var kogus2=document.getElementById("kogus2")

    const  dollar=1.16;
    const rub =84.20;
    const sek=10.65;
    const frank=1.077;
    var inputValue = kogus2.value;

    if(inputValue > 0){
        if (event.target.value==="dollar"){
            vastus2.innerHTML=calculate(kogus2.value, dollar) + "$";
        }
        else if (event.target.value==="rub"){
            vastus2.innerHTML=calculate(kogus2.value, rub) + "₽";
        }
        else if (event.target.value==="kroon"){
            vastus2.innerHTML=calculate(kogus2.value, sek) + "SEK";
        }
        else if (event.target.value==="frank"){
            vastus2.innerHTML=calculate(kogus2.value, frank) + "CHF";
        }
    }
    else{
        vastus2.innerHTML="Нельзя писать с минусом";
    }


}
function inputValutaText(){
    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");

    const  dollar=1.16;
    const rub =84.20;
    const sek=10.65;
    const frank=1.077;

    if (inputText==="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + "$";
    }
    else if (inputText==="rouble"){
        vastus3.innerHTML=calculate(inputValue, rub) + "₽";
    }
    else if (inputText==="kroon"){
        vastus3.innerHTML=calculate(inputValue, sek) + "SEK";
    }
    else if (inputText==="frank"){
        vastus3.innerHTML=calculate(inputValue, frank) + "CHF";
    }
}
function minu(event) {
    var vastus5=document.getElementById("vastus5")
    var kogus5=document.getElementById("kogus5")

    const  milisec=60000;
    const sec =60;
    const min=1;
    const hour=0.0166667;
    var inputValue = kogus5.value;

    if(inputValue > 0){
        if (event.target.value==="milisec"){
            vastus5.innerHTML=calculate(kogus5.value, milisec) + " милисекунд";
        }
        else if (event.target.value==="sec"){
            vastus5.innerHTML=calculate(kogus5.value, sec) + " секунд";
        }
        else if (event.target.value==="min"){
            vastus5.innerHTML=calculate(kogus5.value, min) + " минут";
        }
        else if (event.target.value==="hour"){
            vastus5.innerHTML=calculate(kogus5.value, hour) + " часов";
        }
    }
    else{
        vastus5.innerHTML="Нельзя писать с минусом";
    }
}