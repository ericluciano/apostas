<?php
header('Content-Type: application/json');
require_once "../db.php";

function validTables($name) {
    $tables = ["megasena", "lotofacil"];
    return in_array($name, $tables);
    
}

function minLengthToWin($actionName) {
    $actions = ["megasena" => 4, "lotofacil" => 13];
    return $actions[$actionName];
}

// 36,30,10,11,29,47
function check($data, $numbers, $action) {
    preg_match_all("/(?=($numbers))/", $data['all_numbers'], $matches);
    if(count($matches[1]) >= minLengthToWin($action)) {
        $data['sorted'] = implode(",", $matches[1]);
        $data['totalFounds'] = count($matches[1]);
        return $data;
    }
}

function checkResult($pdo, $action, $numbers, $concurso) {
    $result = [];
    $table = "apostas.{$action}";
    $where = '';
    if($concurso > 0) {
        $where = "WHERE concurso = " . $concurso;
    }
    
    $stmt = $pdo->query("SELECT * FROM $table $where;");
    while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
        $result[] = check($row, $numbers, $action);
    }
    return array_values(array_filter($result));    
}

$data = json_decode(file_get_contents('php://input'), true);
$numbers = str_replace(",", "|", $data["numbers"]);
$action = $data["action"];
$concurso = (int)$data["concurso"];

if(validTables($action)) {
    $response = ["data" => checkResult($pdo, $action, $numbers, $concurso)];    
} else {
    $response = "action not performed";
}
echo json_encode($response);

?>
