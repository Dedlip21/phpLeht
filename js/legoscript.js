function kustutamine(){
    var lego=document.getElementById("lego").getContext("2d");
    lego.clearRect(0, 0, 500, 400);
}

function joonista(){
    var lego=document.getElementById("lego").getContext("2d");
}

function jalad(){
    var jala=document.getElementById("lego").getContext("2d");
    jala.fillStyle="#2C5579";
    jala.fillRect(110, 80, 22, 40); /*lego.fillRect(x, y, ширина,  высота)*/
    jala.fillRect(133, 80, 22, 40); /*lego.fillRect(x, y, ширина,  высота)*/
}

function saapad(){
    var saapad=document.getElementById("lego").getContext("2d");
    saapad.fillStyle="#606060";
    saapad.fillRect(110, 120, 22, 8); /*lego.fillRect(x, y, ширина,  высота)*/
    saapad.fillRect(133, 120, 22, 8); /*lego.fillRect(x, y, ширина,  высота)*/
}


function keha(){
    var keha=document.getElementById("lego").getContext("2d");
    keha.strokeStyle = "#5ADADB";
    keha.fillStyle="#5ADADB";
    keha.beginPath();
    keha.fillRect(110, 40, 45, 40);/*lego.fillRect(x, y, ширина,  высота)*/
    keha.fillRect(85, 40, 25, 15);/*lego.fillRect(x, y, ширина,  высота)*/
    keha.fillRect(155, 40, 25, 15);/*lego.fillRect(x, y, ширина,  высота)*/
    keha.fill();
    keha.stroke();


}

function pea(){
    var pea=document.getElementById("lego").getContext("2d");
    var p=pea;
    pea.strokeStyle = "#F4D88E";
    pea.fillStyle="#F4D88E";
    pea.beginPath();
    pea.fillRect(110, 10, 45, 30);/*lego.fillRect(x, y, ширина,  высота)*/
    pea.fill();
    pea.stroke();


    p.strokeStyle = "#F4D88E";
    p.fillStyle="#F4D88E";
    p.beginPath();
    p.lineTo(145,40);
    p.lineTo(133,45);
    p.lineTo(120,40);
    p.fill();
    p.stroke();
}

function silm(){
    var silm=document.getElementById("lego").getContext("2d");
    var silm2=silm

    silm.strokeStyle = "blue";
    silm.fillStyle="blue";
    silm.beginPath();
    silm.fillRect(138, 21, 6, 4);
    silm.fillRect(120, 21, 6, 4);
    silm.fill();
    silm.stroke();

    silm2.strokeStyle = "white";
    silm2.fillStyle="white";
    silm2.beginPath();
    silm2.fillRect(144, 21, 6, 4);
    silm2.fillRect(114, 21, 6, 4);
    silm2.fill();
    silm2.stroke();
}


function suu(){
    var suu=document.getElementById("lego").getContext("2d");
    suu.beginPath();
    suu.fillStyle="#593D22";
    suu.strokeStyle = "#593D22";
    suu.fillRect(120, 29, 24, 4);
    suu.fill();
    suu.stroke();


}

function hair(){
    var hair=document.getElementById("lego").getContext("2d");


    hair.strokeStyle = "#7B512A ";
    hair.fillStyle="#7B512A ";
    hair.beginPath();
    hair.fillRect(110, 10, 45, 5);/*lego.fillRect(x, y, ширина,  высота)*/
    hair.fillRect(110, 10, 5, 8);/*lego.fillRect(x, y, ширина,  высота)*/
    hair.fillRect(150, 10, 5, 8);/*lego.fillRect(x, y, ширина,  высота)*/
    hair.fill();
    hair.stroke();

}

function kasi(){
    var kasi=document.getElementById("lego").getContext("2d");

    kasi.strokeStyle = "#F4D88E";
    kasi.fillStyle="#F4D88E";
    kasi.beginPath();
    kasi.fillRect(85, 55, 25, 35);/*lego.fillRect(x, y, ширина,  высота)*/
    kasi.fillRect(155, 55, 25, 35);/*lego.fillRect(x, y, ширина,  высота)*/
    kasi.fill();
    kasi.stroke();


}

function nina(){
    var nina=document.getElementById("lego").getContext("2d");

    nina.strokeStyle = "#C2844A";
    nina.fillStyle="#C2844A";
    nina.beginPath();
    nina.fillRect(126, 25, 12, 4);
    nina.fill();
    nina.stroke();
}


function joonista(){
    jalad();
    saapad();
    keha();
    pea();
    silm();
    suu();
    hair();
    kasi();
    nina();
}