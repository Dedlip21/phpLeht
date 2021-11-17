<head>
    <meta charset="UTF-8">
    <title>405</title>
    <style>
        table,td{
            border: solid 10px;
            background-color: grey;
        }
        td{
            border: solid 4px;
            padding: 11px;
            text-align: center;
            background-color: greenyellow;
            text-shadow: black;
            text-outline: darkseagreen 1px;
        }

    </style>
</head>

<h1>Ülesanne 405 - Korrutustabel 2 tsükliga</h1>
<?php
echo "<table>";
for($i=1;$i <=10;$i++){
    echo "<tr>";
    for($j=1; $j <=10;$j++){
        $val=$i*$j;
        echo "<td>".$val."</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>
