<?php
$valor = 0;
$mult = 0;
// Parametro: string => $txt
// Retorno: string => "<td>$txt</td>"
function create_table_cell($txt){
  return("<td> ". $txt ."</td>");
}

// Parametro: vetor => $cells (colunas de uma linha da tabela)
// Retorno: string => "<tr><td>$cells[0]</td><td>$cells[1]</td>...</tr>
// Deve utilizar a funcao create_table_cell
function create_table_row($cells, $valor){
  $retorno = "";
  $retorno .= "<tr>";
   $mult = $valor;
   $retorno .= ("<th>" . $valor ."</th>") ;

   for($j = 0;$j < $cells; $j++){
    $mult = $mult * $valor;
    $retorno .= create_table_cell($mult);
  }
  $valor += 1 ;
  $retorno .=("</tr>");
return $retorno;
}

// Parametro: matriz => $rows (linhas e celulas da tabela)
// Retorno: string => "<table class='table'><tr><td>$rows[0][0]</td><td>$rows[0][1]</td>...</tr><tr><td>$rows[1][0]</td><td>$rows[1][1]</td>...</tr>...</table>"
// Deve utilzar a funcao create_table_row
function create_table($rows){
  $retorno = "";
  $valor = 0;
  for($j = 0;$j < $rows; $j++){
    $valor += 1;
  $retorno .= create_table_row($rows, $valor);
  }

 return( '<table class="table table-dark"> '. $retorno.'</table>');

  
}

// Parâmetro: inteiro => $n (número de linhas da matriz)
// Retorno: matriz ($n x $n+1) => matriz de potência como no enunciado
function power_matrix($n){
  
  return $n;
    
}

?>
<!DOCTYPE html>
<html>
<head>
  <title>Teste PHP</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h1>Tabela de potências</h1>
  <!-- <table class="table table-dark">
  
   <?php
    // $n = 5;
    // $valor = 0;
  
    // for($i = 0;$i < $n; $i++){
    // echo("<tr>");
    // $valor += 1 ;
    // $mult = $valor;
    // echo("<th>" . $valor ."</th>") ;
    // for($j = 0;$j < $n; $j++){
    //   $mult = $mult * $valor;
    //   echo("<td> ". $mult ."</td>");
    // }
    // echo("</tr>");
  //}
  
  ?> 
  
  </table> -->
  
 
  <?php
    $n = 10;
    $m = power_matrix($n);
    echo (create_table($m));
  ?>
  </table>

</div>
</body>
</html>

