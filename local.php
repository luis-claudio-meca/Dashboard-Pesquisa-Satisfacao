<?php
 session_start(); # Deve ser a primeira linha do arquivo


function Conect(){



$servername = "localhost";
$database = "db_pesqorganizacao";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
return $conn;
}

function FecharDB($conn){
    mysqli_close($conn); 
}


function DadosRespostas($conn){
$respostas = array();
$sql = "SELECT * FROM registro_pesquisa";
if ($result = mysqli_query($conn , $sql )) {

   while( $row = mysqli_fetch_array($result))
        array_push($respostas,$row );

   $json_respostas = json_encode($respostas);
    mysqli_free_result($result);
}
$_SESSION['respostas'] = $json_respostas;   
}

function DadosSetor($conn){
    $respostas = array();
    $sql = "SELECT * FROM setor";
    if ($result = mysqli_query($conn , $sql )) {
    
       while( $row = mysqli_fetch_array($result))
            array_push($respostas,$row );
    
       $json_respostas = json_encode($respostas);
        mysqli_free_result($result);
    }
    $_SESSION['setor'] = $json_respostas;   
    }

    function DadosTurno($conn){
        $respostas = array();
        $sql = "SELECT * FROM turno";
        if ($result = mysqli_query($conn , $sql )) {
        
           while( $row = mysqli_fetch_array($result))
                array_push($respostas,$row );
        
           $json_respostas = json_encode($respostas);
            mysqli_free_result($result);
        }
        $_SESSION['turno'] = $json_respostas;   
        }
        function DadosCategorias($conn){
            $respostas = array();
            $sql = "SELECT * FROM categoria";
            if ($result = mysqli_query($conn , $sql )) {
            
               while( $row = mysqli_fetch_array($result))
                    array_push($respostas,$row );
            
               $json_respostas = json_encode($respostas);
                mysqli_free_result($result);
            }
            $_SESSION['categorias'] = $json_respostas;   
            }
            function DadosQuestoes($conn){
                $respostas = array();
                $sql = "SELECT * FROM pergunta";
                if ($result = mysqli_query($conn , $sql )) {
                
                   while( $row = mysqli_fetch_array($result))
                        array_push($respostas,$row );
                
                   $json_respostas = json_encode($respostas);
                    mysqli_free_result($result);
                }
                $_SESSION['perguntas'] = $json_respostas;   
                }


               
            
            
               
                            

$con = Conect(); 
DadosRespostas($con);
DadosSetor($con);
DadosCategorias($con);
DadosTurno($con);
DadosQuestoes($con);
FecharDB($con);

?>