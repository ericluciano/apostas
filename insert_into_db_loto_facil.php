<?php
require_once('./db.php');
require_once('./SimpleXLS.php');

$queries = [];

function checkNumber($nums) {
    $newNumbers = array_map(function($n) {
        return ($n < 10 ) ? "0{$n}" : "{$n}";
    }, array_slice($nums, 2));
    return implode(",", $newNumbers);
}

function createQuery($item) {
    $item[17] = checkNumber($item);
    return $item;    
}

function formateDate($date) {
    $n = array_reverse(explode("-", str_replace("/", "-", $date)));
    return $n[0] . "-" . $n[1] . "-" .$n[2];    
}

if ( $xls = SimpleXLS::parse('lotofacil.xls') ) {
    print "<pre>";
    $arr = $xls->rows();
    // print_r($arr);
    // exit;
    
    foreach($arr as $index => $values):
        if($index >= 7) {
           foreach($values as $key => $val):
                if($key == 1) {
                    $values[$key] = formateDate($val);
                }
           endforeach;
           $queries[] = createQuery($values);           
        }
    endforeach;
    
} else {
    echo SimpleXLS::parseError();
}

$newQueries = array_reverse($queries);
// var_dump(array_reverse($queries));
// exit;

$nn = [];
array_push($nn, $newQueries[0], $newQueries[1]);

function insertMultipleRows($data, $pdo) {
    $stmt = $pdo->prepare("INSERT INTO apostas.lotofacil (concurso, data, bola_1, bola_2, bola_3, bola_4, bola_5, bola_6, bola_7, bola_8, bola_9, bola_10, bola_11, bola_12, bola_13, bola_14, bola_15, all_numbers) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        try {
            $pdo->beginTransaction();
            foreach ($data as $row)
            {
                $r = $stmt->execute($row);
            }
            $pdo->commit();
        }catch (Exception $e){
            $pdo->rollback();
            throw $e;
        }
}

insertMultipleRows($newQueries, $pdo);
//var_dump($nn);

?>