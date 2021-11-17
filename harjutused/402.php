
<head>
    <meta charset="UTF-8">
    <title>Ülesanne 402</title>
</head>
<a href="../../phpRolan/test.php">tagasi...Ülesannete leht</a>
<h1>Ülesanne 402</h1>
<h2>1. 20 Checkbox tsükliga</h2>
<?php
$i=1;
while($i<=20){
    echo "<input type='checkbox' id='$i' name='box[]' value='$i'>";
    echo "<label for='$i'>box ".$i."</label><br>";
    $i++;
}
?>

<h2>2. 20 Tekstikasti tsükliga</h2>
<?php
$i=1;
while($i<=20) {
    echo "<input type='cell' id=c'$i' name='cell[]'>";
    echo "<label for=c'$i'>cell " . $i . "</label><br>";
    $i++;
}

?>

<h2>3. 20 Radionupud tsükliga</h2>
<?php
$r=1;
while($r<=20){
    echo "<input type='radio' id=r'$r' name='value[]' value='$r'>";
    echo "<label for=r'$r'>value ".$r."</label><br>";
    $r++;
}

?>
