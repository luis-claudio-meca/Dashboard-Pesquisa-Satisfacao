
<?php
    
         
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
                    $respostas = array();
                    $sql = "SELECT * FROM `db_pesqorganizacao`.`registro_pesquisa`";
                    if ($result = mysqli_query($conn , $sql )) {
                    
                       while( $row = mysqli_fetch_array($result))
                            array_push($respostas,$row );
                    
                       $json_respostas = json_encode($respostas);
                        mysqli_free_result($result);
                    }
                    mysqli_close($conn); 
                
               
                 echo   $json_respostas;
                

                   
?>
