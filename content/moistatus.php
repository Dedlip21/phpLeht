<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>...mõistatus</h1>
<<?php
echo "<h1>Tere himmikust!</h1>";
$tekst="Täna on esimene PHP tund";
echo $tekst;
echo "<br>";
echo "<h2> Matemaatika tehed. Mõistatus.</h2>";
echo "<h3> Arva ära kaks arvu!</h3>";
$arv1=5;
$arv2=10;
//kahe arvude liitmine +
echo "Kui liidame kokku, vastus on ".($arv1+$arv2);
echo "<br>";
//jagamine
echo "Kui esimene arv jagame teise arvuga, siis vastuseks ".($arv1-$arv2);
echo "<br>";
//esimene ruudus
echo "Esimene arv ruudus on ".pow($arv1, 2);
echo "<br>";
//lahutamine
echo "Kui teisest arvustlahutada esimene, siis vastus on ".($arv2 / 2);
echo "<br>";
//korrutis
echo "Kahe arvude korrutis = ".($arv1*$arv2);
echo "<br>";
echo "<a href='vastus.php'>Õige vastused</a>";

echo "<br>";
echo "<h2>Arva ära EESTI LINNANIMI</h2>";
echo "<br>";
$nimi="Tartu";
$nimi2="See on Tartu";
//teksti pikkus
echo "<br>Linnanimi pikkus: ".strlen($nimi);
//Suur linnanimi täht
echo "<br>Läbiv suurtäht: ".strtoupper($nimi);
//esimene täht
echo "<br>Linnanimi esimene täht: ".substr($nimi, 0, 1);

echo "<br>Shuffle: ".str_shuffle($nimi);

echo "<br>Chunk split: ".chunk_split($nimi, 1, "-");
?>
</body>
</html>

