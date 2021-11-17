
<head>
    <meta charset="UTF-8">
    <title>Ülesanne 403</title>
</head>

<a href="../../phpRolan/test.php">tagasi...Ülesannete leht</a>
<h1>Ülesanne 403</h1>
<?php
//ilusad värvi nimed massiivis
$varv=array('LightSkyBlue', 'Gold', 'Crimson', 'Aqua', 'Chartreuse', 'DeepPink', 'OrangeRed');
//tsükliga kuvame värvi massiivist
for($i = 0; $i <7; $i++){
    echo "<span style='color: $varv[$i]' >$varv[$i]</span><br>";
}
?>