<?php
// andmed massiivis
$data=["nimi"=> "Rolan Maslennikov",
    "aadress"=>"Anni 8, Tallinn",
    "pilt"=>"anni.jpg",
    "koduleht"=>"https://maslennikov20.thkit.ee"];
?>

<h1>Ülesanne 401</h1>
<p> <b>
    <?=$data["nimi"]?>
    </b></p>

<p> <i>
        <?=$data["aadress"]?>
    </i></p>

<img src="<?=$data["pilt"]?>" alt="pildike">
<br>
<a href="<?=$data["koduleht"]?>" target="_blank">Rolan koduleht</a>
//massiiv array funktsiooniga
<h1>Ülesanne 401/var 2 - array() </h1>
<?php
$array=array("Rolan Maslennikov", "Tallinn, Anii 8", "anni.jpg", "maslennikov20.thkit.ee");
echo "<b>Nimi: ".$array[0]."</b><br>";
echo "<i>Aadress: ".$array[1]."</i><br>";
echo "<img src='$array[2]' alt='pildike'>";
echo "<br><a href='https://$array[3]'>Koduleht</a>"
?>
<br>

<a href="../../phpRolan/test.php">tagasi...Ülesannete leht</a>