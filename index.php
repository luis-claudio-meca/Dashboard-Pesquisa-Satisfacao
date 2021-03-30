<?php include('local.php'); ?>
<?php $resposta = '<Script> var resposta = ' . $_SESSION['respostas'] . ' </script>';
echo $resposta;
$dadocategoria = '<Script> var dadocategoria = ' . $_SESSION['categorias'] . '</script>';
echo $dadocategoria;
$dadosetor = '<Script> var dadosetor = ' . $_SESSION['setor'] . ' </script>';
echo $dadosetor;
$dadoturno = '<Script> var dadoturno = ' . $_SESSION['turno'] . ' </script>';
echo $dadoturno;
$question = '<Script> var question = ' . $_SESSION['perguntas'] . ' </script>';
echo $question;



session_unset();
?>
<script>
    localStorage.setItem("totalfav-0", 0)
    localStorage.setItem("totalfav-1", 0)
    localStorage.setItem("totalfav-2", 0)
    localStorage.setItem("totalfav-3", 0)
    localStorage.setItem("totalfav-4", 0)
    localStorage.setItem("totalfav-5", 0)
</script>
<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" href="./img/bumerang.png"/>

    <title>Dashboard</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin2.min.css" rel="stylesheet">
    <link href="css/sb-admin-2.css" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
        }


        input {
            padding: 10px;
            width: 100%;
            font-size: 17px;
            font-family: Raleway;
            border: 1px solid #aaaaaa;
        }

        /* Mark input boxes that gets an error on validation: */
        input.invalid {
            background-color: #ffdddd;
        }

        /* Hide all steps by default: */
        .tab {
            display: none;
        }

        button {
            background-color: #169b6b;
            color: #ffffff;
            border: none;
            padding: 10px 20px;
            font-size: 17px;
            font-family: Raleway;
            cursor: pointer;
            border-radius: 5px;
        }

        button:hover {
            opacity: 0.8;
        }

        #prevBtn {
            background-color: #169b6b;
        }

        /* Make circles that indicate the steps of the form: */
        .step {
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #169b6b;
            border: none;
            border-radius: 50%;
            display: inline-block;
            opacity: 0.5;
        }

        .step.active {
            opacity: 1;
        }

        /* Mark the steps that are finished and valid: */
        .step.finish {
            background-color: #169b6b;
        }

        a .img-profile {
            height: 3rem;
            width: 3rem;
        }

        #admin {
            margin-top: 12px;
            margin-right: 50px;
            border-radius: 100%;
            height: 45px;
            background-color: #3CB371;
            border-color: transparent;
        }

        .btn {
            color: #fff;
        }
    </style>


</head>

<body id="page-top">

    <!-- Main Content -->
    <div id="content">
        <div style="width: 100%;background-color: #1cc88a;">
            <img src="./img/image.png" style="height: 10%;">

                <button class="btn btn-sucess float-right shadow p-3 mb-5 " type="button" id="admin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-lock"></i>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#" id="tutiplast">Tutiplast</a>
                    <a class="dropdown-item" href="#" id="personal">Personal</a>
                    <a class="dropdown-item" href="#" id="modoadmin">Modo Admin</a>
                </div>
           


            <!-- Button - Modo Apresentação -->
            <button type="button" class="btn btn-lg float-right " onclick="Apresentation()" style="font-size: 17px ;color: #fff; margin-top: 12px; margin-right: 50px; background-color: #3CB371;">
                <i class="fas fa-desktop" style="margin-right: 10px;"></i>
                Modo Apresentação
            </button>

        </div>


        <!-- Begin Page Content -->
        <div class="container-fluid">

            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
                <h1 class="h3 mb-0 font-weight-bold text-gray-900 " id="dashboard">Dashboard - Tutiplast</h1>
                <h1 class="h3 mb-0 font-weight-bold text-gray-900 " id="dashadmin"></h1>

                <!-- Gerar Excel -->
                <a href="./upload/pesquisa-de-clima.rar" download class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" id="Download"><i class="fas fa-download fa-sm text-white-50"></i> Gerar Excel</a>
            </div>

            <!-- Content Row -->
            <div class="row">

                <!-- Earnings (Monthly) Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow-lg h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Realizaram</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-900" id="realizados">531</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- Earnings (Monthly) Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-danger shadow-lg h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                        Não Realizaram</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-900" id="naorealizados">65</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- Earnings (Monthly) Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow-lg h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Indice de Participação
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-900" id="indicerealizados">89%</div>
                                        </div>
                                        <div class="col">
                                            <div class="progress progress-sm mr-2">
                                                <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="indicerealizadosprog"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pending Requests Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow-lg h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Indice de Favorabilidade Geral</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-900" id="fav_geral">80,55%</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <!-- Select Unidade -->
            <div class="input-group float-left" style="width: 300px; margin-left: 20px; height: 30px;">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Unidade:</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Todos...</option>
                    <option value="1">Matriz</option>
                    <option value="2">Filial</option>
                </select>
            </div>

            <!--Testandooooooooooooo-->
            <div id="regForm">

                <!-- One "tab" for each step in the form: -->
                <div class="tab">
                    <div class="column">
                        <div id="titulo-1" class="w-100 mt"></div>
                        <div id="root-1"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-2" class="w-100"></div>
                        <div id="root-2"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-3" class="w-100"></div>
                        <div id="root-3"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-4" class="w-100"></div>
                        <div id="root-4"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-5" class="w-100"></div>
                        <div id="root-5"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-6" class="w-100"></div>
                        <div id="root-6"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-7" class="w-100"></div>
                        <div id="root-7"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-8" class="w-100"></div>
                        <div id="root-8"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-9" class="w-100"></div>
                        <div id="root-9"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-10" class="w-100"></div>
                        <div id="root-10"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-11" class="w-100"></div>
                        <div id="root-11"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-12" class="w-100"></div>
                        <div id="root-12"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-13" class="w-100"></div>
                        <div id="root-13"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-14" class="w-100"></div>
                        <div id="root-14"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <div id="titulo-15" class="w-100"></div>
                        <div id="root-15"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <h3 style="text-align: center;width: 100%; margin-top: 30px;">Favorabilidade por Categoria</h3>
                        <div id="fav-1" class="d-flex flex-wrap"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <h3 style="text-align: center;width: 100%; margin-top: 30px;">Favorabilidade por Setor</h3>
                        <div id="fav-2" class="d-flex flex-wrap"></div>
                    </div>
                </div>
                <div class="tab">
                    <div class="column">
                        <h3 style="text-align: center;width: 100%; margin-top: 30px;">Favorabilidade por Turno</h3>
                        <div id="fav-3" class="d-flex flex-wrap"></div>
                    </div>
                </div>
                <div class="tab" style="display: none;" id="body14">
                    <div class="column">
                        <h3 style="text-align: center;width: 100%; margin-top: 30px;">Participação por Setor</h3>
                        <div id="fav-4" class="d-flex flex-wrap"></div>
                    </div>
                </div>




                <!-- Fim -->


                <div style="overflow:auto;">
                    <div style="float:right; margin-right: 4%">
                        <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
                        <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
                        <button type="button" id="inicioBtn" onclick="nextPrev(0)">Início</button>
                    </div>
                </div>
                <div class="card shadow-lg" style="width: 40%;margin-top: -56px; margin-left:10px;">
                    <div class="card-body">
                        <h7 class="font-weight-bold">Índices de Favorabilidade:</h7>
                        <h7 class="font-weight-bold"><i class="fas fa-circle text-success"></i> Alta</h7>
                        <h7 class="font-weight-bold"><i class="fas fa-circle text-warning"></i> Média</h7>
                        <h7 class="font-weight-bold"><i class="fas fa-circle text-danger"></i> Baixa</h7>
                    </div>
                </div>
                <!-- Circles which indicates the steps of the form: -->
                <div style="text-align:center;margin-top:20px;">
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step" style="display: none;" id="bodysteps"></span>


                </div>
            </div>

            <!--FIM Testandooooooooooooo-->


            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Tutilabs Soluction 2021</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded-circle" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-bar-demo.js"></script>

</body>
<script>
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    function showTab(n) {
        // This function will display the specified tab of the form...
        
       
        var x = document.getElementsByClassName("tab")
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
            document.getElementById("inicioBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if(document.getElementById("dashadmin").innerText.length<1)
        z=x.length - 2;
        else z= x.length - 1;
        if (n == z) {
            document.getElementById("nextBtn").style.display = "none";
            document.getElementById("inicioBtn").style.display = "inline";
        } else {
            document.getElementById("nextBtn").style.display = "inline";
            document.getElementById("inicioBtn").style.display = "none";
        }
        //... and run a function that will display the correct step indicator:
        fixStepIndicator(n)
    }

    function nextPrev(n) {
        
       
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
       
        
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        
        x[currentTab].style.display = "none";
      
        // Increase or decrease the current tab by 1:
        if (n != 0)
            currentTab += n;
        else
            currentTab = 0;
        
            // if you have reached the end of the form...
         
        
        // Otherwise, display the correct tab:
        showTab(currentTab);

        
    }



    function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value == "") {
                // add an "invalid" class to the field:
                y[i].className += " invalid";
                // and set the current valid status to false
                valid = false;
            }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid; // return the valid status
    }

    function fixStepIndicator(n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");

        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class on the current step:
        x[n].className += " active";
    }
</script>

<script>
    //////////////////////////////
  

   

    for (let i = 1; i < dadocategoria.length - 1; i++)
        CreateAllChart(i, dadocategoria, resposta, 0, question);
    ///////////////////////////////////
    Favorabilidade_Geral(0)
    ///////////////       
    Satisfação_Perguntas_Setor(resposta, dadocategoria, dadosetor, 0)
    //////////////
    Satisfação_Perguntas_Turno(resposta, dadocategoria, dadoturno, 0)
    //////////////////
    ParticipacaoPorSetor(resposta, dadosetor, 0);

    let select_uni = document.getElementById("inputGroupSelect01");
    select_uni.addEventListener("change", () => {
        let unidade

        if (select_uni.value === "Todos..." || select_uni.value === "Todos Tutiplast") unidade = 0;
        else  if (select_uni.value === "Todos Personal...") unidade = 5;
        else unidade = select_uni.value;

        //-----------------------------------
        localStorage.setItem("totalfav-" + unidade, 0)
        //-----------------------------------
       
        switch(Number(unidade)){
            case 1: document.getElementById("dashboard").innerText = "Dashboard - Matriz"; break;
            case 2: document.getElementById("dashboard").innerText = "Dashboard - Filial"; break;
            case 3: document.getElementById("dashboard").innerText = "Dashboard - Personal - Matriz";break;
            case 4: document.getElementById("dashboard").innerText= "Dashboard - Personal - Filial";break;
            case 5: document.getElementById("dashboard").innerText = "Dashboard - Personal"; break;
            default: document.getElementById("dashboard").innerText= "Dashboard - Tutiplast";break;
        }
        //////////////////////////////
        document.getElementById("fav-1").innerHTML = "";
        for (let i = 1; i < dadocategoria.length - 1; i++)
            CreateAllChart(i, dadocategoria, resposta, +unidade, question);
        ///////////////////////////////////
        Favorabilidade_Geral(+unidade)
        ///////////////         
        document.getElementById("fav-2").innerHTML = "";
        Satisfação_Perguntas_Setor(resposta, dadocategoria, dadosetor, +unidade)
        ////////////////
        document.getElementById("fav-3").innerHTML = "";
        Satisfação_Perguntas_Turno(resposta, dadocategoria, dadoturno, +unidade)
        /////////////////
        document.getElementById("fav-4").innerHTML = "";
        ParticipacaoPorSetor(resposta, dadosetor, +unidade);
    });
</script>


<script src="./js/demo/modos.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
    function requestFullScreen(element) {
        // Supports most browsers and their versions.
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;

        if (requestMethod) { // Native full screen.
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }

    }

    var elem = $("*")[0]; // Make the body go full screen.
    ////////////////
    function Apresentation() {
        window.scroll(0, 255)
        requestFullScreen(elem);

    }
    ///////////////////


    setInterval( ()=> {
        
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       resposta = JSON.parse(this.response)
        
        Atualiza(JSON.parse(this.response));

    }
  };
  xhttp.open("POST", "update.php", true);
  xhttp.send();

 





function Atualiza(resposta){
        
        let select_uni = document.getElementById("inputGroupSelect01");
        let unidade;

        if (select_uni.value === "Todos..." || select_uni.value === "Todos Tutiplast") unidade = 0;
        else  if (select_uni.value === "Todos Personal...") unidade = 5;
        else unidade = select_uni.value;

        //-----------------------------------
        localStorage.setItem("totalfav-" + unidade, 0)
        //-----------------------------------
        
        switch(Number(unidade)){
            case 1: document.getElementById("dashboard").innerText = "Dashboard - Matriz"; break;
            case 2: document.getElementById("dashboard").innerText = "Dashboard - Filial"; break;
            case 3: document.getElementById("dashboard").innerText = "Dashboard - Personal - Matriz";break;
            case 4: document.getElementById("dashboard").innerText= "Dashboard - Personal - Filial";break;
            case 5: document.getElementById("dashboard").innerText = "Dashboard - Personal"; break;
            default: document.getElementById("dashboard").innerText= "Dashboard - Tutiplast";break;
        }
        //////////////////////////////
        document.getElementById("fav-1").innerHTML = "";
        for (let i = 1; i < dadocategoria.length - 1; i++)
            CreateAllChart(i, dadocategoria, resposta, +unidade, question);
        ///////////////////////////////////
     
        Favorabilidade_Geral(+unidade)
        ///////////////         
        document.getElementById("fav-2").innerHTML = "";
        Satisfação_Perguntas_Setor(resposta, dadocategoria, dadosetor, +unidade)
        ////////////////
        document.getElementById("fav-3").innerHTML = "";
        Satisfação_Perguntas_Turno(resposta, dadocategoria, dadoturno, +unidade)
        /////////////////
        document.getElementById("fav-4").innerHTML = "";
        ParticipacaoPorSetor(resposta, dadosetor, +unidade);

        
    }
    } ,10000);
</script>

</html>