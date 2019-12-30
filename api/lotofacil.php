<?php
header('Content-Type: application/json');
require_once('../db.php');
$data = json_decode(file_get_contents('php://input'), true);
$postLimitView = $data['limitView'];
$limitView = (isSet($postLimitView) && $postLimitView <= 300) ? $postLimitView : 10;
$queryLimit = "ORDER BY data DESC LIMIT $limitView";
if($limitView === 0 || is_numeric($postLimitView) === false) {
    $queryLimit = '';
}

function all($pdo, $queryLimit) {
    $stmt = $pdo->query("SELECT bola_1, bola_2, bola_3, bola_4, bola_5, bola_6, bola_7, bola_8, bola_9, bola_10, bola_11, bola_12, bola_13, bola_14, bola_15 "
            . "FROM apostas.lotofacil $queryLimit");
    $data = "";
    while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
        $data .=
            $row['bola_1'] . "," .
            $row['bola_2'] . "," .
            $row['bola_3'] . "," .
            $row['bola_4'] . "," .
            $row['bola_5'] . "," .
            $row['bola_6'] . "," .
            $row['bola_7'] . "," .
            $row['bola_8'] . "," .
            $row['bola_9'] . "," .
            $row['bola_10'] . "," .
            $row['bola_11'] . "," .
            $row['bola_12'] . "," .
            $row['bola_13'] . "," .
            $row['bola_14'] . "," .
            $row['bola_15'] . ",";
    }
    return $data;
}

$dados = rtrim(all($pdo, $queryLimit), ",");
print json_encode(["data" => $dados]);
?>