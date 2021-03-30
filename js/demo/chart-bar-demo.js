// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#000';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}


function GeraBarChart(props , a,b,c,d,e){
// Bar Chart Example


var ctx = document.getElementById(props);
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Sem Opinião", "Discordo", "Discordo Parcialmente", "Concordo Parcialmente", "Concordo"],
    datasets: [{
      label: "Nivel de Satisfação",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [a,b,c,d,e],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'percent'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 80,
          maxTicksLimit: 50,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return  number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
     
    },
    tooltips: {
      titleMarginBottom: 20,
      titleFontColor: '#3d3f47',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#4c4e57",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 20,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) +  '%';
        }
      }
    },
  }
});

}


function Satisfação_Perguntas_Cat(resposta , categoria, dadocategoria , unidade){



  let cont_p1 = [0,0,0,0,0], cont_p2 = [0,0,0,0,0],
  cont_p3 = [0,0,0,0,0], cont_p4 = [0,0,0,0,0];
  let resp_por_perg = [0,0,0,0] , totaldepessoas = 0;

  let number_pergunta = Number_pergunta(categoria);
  

  resposta.forEach(element => {
    if(unidade == Number(element.empresa)){
      switch(Number(element.pergunta)){
          case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
          case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
          case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
          case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
      }

      if(element.pergunta == 1 )  totaldepessoas++;
    }else if(unidade == 0 ){
      if(element.empresa ==1 || element.empresa ==2){
      switch(Number(element.pergunta)){
        case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
        case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
        case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
        case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
        }
        if(element.pergunta == 1)  totaldepessoas++;
      }

     
    }else if(unidade == 5){
      if(element.empresa ==4 || element.empresa ==3){
      switch(Number(element.pergunta)){
        case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
        case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
        case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
        case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
    }

    if(element.pergunta == 1)  totaldepessoas++; 
  }
    
    }
  });

  TotalCabecalho(totaldepessoas, unidade)  

  resp_por_perg[0] = cont_p1; resp_por_perg[1] = cont_p2; resp_por_perg[2] = cont_p3;
  resp_por_perg[3] = cont_p4;
  
  Favorabilidade_Categoria(resp_por_perg, categoria , dadocategoria, unidade)
  
// Calculo de Porcentagem
  let i=number_pergunta;

  
  resp_por_perg.forEach(element => {
  let sem_opniao = ((element[0]/totaldepessoas)*100).toFixed(2);   //Banco de Dados
  let discordo = ((element[1]/totaldepessoas)*100).toFixed(2);
  let discordo_parcialmente = ((element[2]/totaldepessoas)*100).toFixed(2);
  let concordo_parcialmente = ((element[3]/totaldepessoas)*100).toFixed(2);
  let concordo = ((element[4]/totaldepessoas)*100).toFixed(2);
  
  GeraBarChart("myBarChart-"+i , sem_opniao, discordo, discordo_parcialmente,concordo_parcialmente, concordo)
  i++;
  })
////////////////////// 
}		

function Cont_satisfação(element, array){
  switch(Number(element)){
      case 1: array[0]++; break;
      case 2: array[1]++; break;
      case 3: array[2]++; break;
      case 4: array[3]++; break;
      case 5: array[4]++; break;
  }   
  return array;   
}
function Number_pergunta(categoria){
  let number_pergunta = 0;
  
  number_pergunta = (categoria * 4) - 3

  return number_pergunta;
}

function CreateAllChart(categoria, dadocategoria, resposta, unidade, question){
  let number_pergunta = Number_pergunta(categoria);

  let Q = Pergunta(question, number_pergunta);
  var elementHtml = '<div class="d-flex flex-column justify-content-xl-center flex-sm-column flex-md-column flex-xl-row flex-lg-row"><div class="col-12 col-md-12 col-xl-6 col-lg-6  "><div class="card shadow-lg mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-success">'+Q[0]+'</h6></div><div class="card-body col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 " style="height: 200px; padding: 2px; width: 615px; " ><div class="chart-bar " style="height: 180px;"><canvas id="myBarChart-' + number_pergunta +'" ></canvas></div></div></div></div><div class="col-12 col-md-12 col-xl-6 col-lg-6  "><div class="card shadow-lg mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-success">'+Q[1]+'</h6></div><div class="card-body col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 " style="height: 200px; padding: 2px;width: 615px; "><div class="chart-bar" style="height: 180px;"><canvas id="myBarChart-' + (number_pergunta+1) +'"></canvas></div></div></div></div></div><div class="d-flex flex-column justify-content-xl-center flex-sm-column flex-md-column flex-xl-row flex-lg-row"><div class="col-12 col-md-12 col-xl-6 col-lg-6 "><div class="card shadow-lg mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-success">'+Q[2]+'</h6></div><div class="card-body col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 " style="height: 200px; padding: 2px;width: 615px; "><div class="chart-bar" style="height: 180px;"><canvas id="myBarChart-' + (number_pergunta+2) +'"></canvas></div></div></div></div><div class="col-12 col-md-12 col-xl-6 col-lg-6 "><div class="card shadow-lg mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-success">'+Q[3]+'</h6></div><div class="card-body col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12" style="height: 200px; padding: 2px; width: 615px; "><div class="chart-bar" style="height: 180px;"><canvas id="myBarChart-' + (number_pergunta+3) +'"></canvas></div></div></div></div></div>';
  let Titulo = document.getElementById("titulo-"+categoria);
  let Texto = document.getElementById("root-" + categoria);
  
  Titulo.innerHTML = '<h3 class="font-weight-bold" style="text-align: center;width: 100%;margin-top: 40px;">'+ dadocategoria[categoria-1].descricao + '</h3>';
  Texto.innerHTML = elementHtml;

  Satisfação_Perguntas_Cat(resposta,categoria,dadocategoria , unidade);
}

function Pergunta(question, number_pergunta){
  let q = [],i;
  question.forEach(value => {
    for(i=0; i<4 ;i ++)
      if(value.id_pergunta == number_pergunta + i){
        q[i] = (i+1) + ' - '+ value.descricao;
      }
  })
  return q;
}
  
//////////////////////////////////////
function TotalCabecalho(props,unidade){ 
  switch(unidade){
    case 1: v=573; break;
    case 2: v=394; break;
    case 3: v=169; break;
    case 4: v=158; break;
    case 5: v=327; break;
    default: v=967; break;
  }
  let totalgeral = v;

 document.getElementById("realizados").innerText = props
 document.getElementById("naorealizados").innerText = totalgeral-props
 document.getElementById("indicerealizados").innerText = ((props/totalgeral)*100).toFixed(2)+"%";
 document.getElementById("indicerealizadosprog").style.width = ((props/totalgeral)*100).toFixed(2)+"%";
}
//////////////////////////////////////////////////////////
function Favorabilidade_Categoria(props, categoria, dadocategoria, unidade){
  let total =0 , favorabilidade_cat =0;
      props.forEach(element => {
         favorabilidade_cat = (((element[0]*1) + (element[1]*2) + (element[2]*3) + (element[3]*4) + (element[4]*5))/((element[0]+element[1]+element[2]+element[3]+element[4]) *5))*100;
         
         if(favorabilidade_cat>0)
              total += favorabilidade_cat; 
              
       })  
       total /=4;
        if(total>0)
          Criar_Cat_Favorabilidade(total.toFixed(2), categoria, dadocategoria)
        else 
          Criar_Cat_Favorabilidade(0, categoria, dadocategoria)
         
        let x = Number(localStorage.getItem("totalfav-"+unidade)) + total;
          localStorage.setItem("totalfav-"+unidade, x);
}

function Criar_Cat_Favorabilidade(props, categoria,dadocategoria){

  if(props >=85)  cor = "success";
  else if (60 < props && props< 85) cor = "warning";
  else if (props <= 60) cor = "danger";

document.getElementById("fav-1").innerHTML += '<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-8 mb-4"><div class="card border-left-'+cor+' shadow col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2"style="height: 90px; width: 400px;"><div class="card-body col-12"style="heigth: 100px; width: 420px; padding-top: 5px;"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-info text-uppercase mb-1">'+ dadocategoria[categoria-1].descricao + '</div><div class="row no-gutters align-items-center"><div class="col-auto"><div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">'+ props +'%</div></div><div class="col"><div class="progress progress-sm mr-2"><div class="progress-bar bg-info" role="progressbar" style="width: '+ props +'%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div></div></div></div></div></div></div></div></div>';
}

///////////////////////////////////////////////////////////////////
function Favorabilidade_Geral(unidade){
 let fav_geral = (Number(localStorage.getItem("totalfav-"+ unidade))/15).toFixed(2);
 document.getElementById("fav_geral").innerText = fav_geral +'%';
}
///////////////////////////////////////////////////////////////
function Favorabilidade_Setores(props, setor, dadosetor, unidade){
  let total =0 , favorabilidade_set =0;
    
      props.forEach(element => {
         favorabilidade_set = (((element[0]*3) + (element[1]*1) + (element[2]*2) + (element[3]*4) + (element[4]*5))/((element[0]+element[1]+element[2]+element[3]+element[4]) *5))*100;
         
         if(favorabilidade_set>0)
             total += favorabilidade_set; 
             
       })
      
       

        if(unidade == 5 || unidade == 3|| unidade == 4 )  { 
          total /=4;
          let v = [2,4,6,8,10,11,12];
          for (i=0; i< v.length; i++)
          if(v[i] == (setor+1) ){
        if(total>0)
        Criar_Setor_Favorabilidade(total.toFixed(2), setor, dadosetor)
        else 
        Criar_Setor_Favorabilidade(0, setor,dadosetor)
          }
        }else{
          total /=4;

          if(total>0)
          Criar_Setor_Favorabilidade(total.toFixed(2), setor, dadosetor)
          else 
          Criar_Setor_Favorabilidade(0, setor,dadosetor)
        }
}

function Criar_Setor_Favorabilidade(props, setor,dadosetor){
  if(props >=85)  cor = "success";
  else if (60 < props && props< 85) cor = "warning";
  else if (props <= 60) cor = "danger";

  document.getElementById("fav-2").innerHTML += '<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-8 mb-4"><div class="card border-left-'+cor +' shadow col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2"style="height: 90px; width: 400px;"><div class="card-body col-12"style="heigth: 100px; width: 420px; padding-top: 5px;"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-info text-uppercase mb-1">'+ dadosetor[setor].descricao + '</div><div class="row no-gutters align-items-center"><div class="col-auto"><div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">'+ props +'%</div></div><div class="col"><div class="progress progress-sm mr-2"><div class="progress-bar bg-info" role="progressbar" style="width: '+ props +'%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div></div></div></div></div></div></div></div></div>';
  }

function Satisfação_Perguntas_Setor(resposta ,dadocategoria, dadosetor,unidade){

    let cont_p1 = [0,0,0,0,0], cont_p2 = [0,0,0,0,0],
    cont_p3 = [0,0,0,0,0], cont_p4 = [0,0,0,0,0];
    let resp_por_perg = [0,0,0,0] ;

    
    dadosetor.forEach(value =>{

      for (let i = 1; i < dadocategoria.length-1; i++){
      let number_pergunta = Number_pergunta(i);
    
      resposta.forEach(element => {
          if(Number(value.id_setor) === Number(element.setor)){
            if(unidade == Number(element.empresa)){
              switch(Number(element.pergunta)){
                  case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
                  case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
                  case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
                  case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
              }
        
             
            }else if(unidade == 0 ){
              if(element.empresa ==1 || element.empresa ==2){
              switch(Number(element.pergunta)){
                case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
                case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
                case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
                case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
                }
               
              }
        
             
            }else if(unidade == 5){
              if(element.empresa ==4 || element.empresa ==3){
              switch(Number(element.pergunta)){
                case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
                case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
                case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
                case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
            }
        
        
          }
            
            }
    }
      });
    }
      resp_por_perg[0] = cont_p1; resp_por_perg[1] = cont_p2; resp_por_perg[2] = cont_p3;
      resp_por_perg[3] = cont_p4; 
    
    Favorabilidade_Setores(resp_por_perg, Number(value.id_setor)-1, dadosetor, unidade);
  
    /////////////////////////////////////////////////
    cont_p1 = [0,0,0,0,0], cont_p2 = [0,0,0,0,0],
    cont_p3 = [0,0,0,0,0], cont_p4 = [0,0,0,0,0];
    })
    
  ////////////////////// 
  }	

  function Satisfação_Perguntas_Turno(resposta ,dadocategoria,dadoturno,unidade){

    let cont_p1 = [0,0,0,0,0], cont_p2 = [0,0,0,0,0],
    cont_p3 = [0,0,0,0,0], cont_p4 = [0,0,0,0,0];
    let resp_por_perg = [0,0,0,0] ;

    
    dadoturno.forEach(value =>{

      for (let i = 1; i < dadocategoria.length-1; i++){
      let number_pergunta = Number_pergunta(i);
    
      resposta.forEach(element => {
          if(Number(value.id_turno) === Number(element.turno)){
            if(unidade == Number(element.empresa)){
              switch(Number(element.pergunta)){
                  case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
                  case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
                  case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
                  case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
              }
        
             
            }else if(unidade == 0 ){
              if(element.empresa ==1 || element.empresa ==2){
              switch(Number(element.pergunta)){
                case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
                case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
                case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
                case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
                }
               
              }
        
             
            }else if(unidade == 5){
              if(element.empresa ==4 || element.empresa ==3){
              switch(Number(element.pergunta)){
                case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
                case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
                case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
                case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
            }
        
        
          }
            
            }
    }
      });
    }
      resp_por_perg[0] = cont_p1; resp_por_perg[1] = cont_p2; resp_por_perg[2] = cont_p3;
      resp_por_perg[3] = cont_p4; 
      
    Favorabilidade_Turno(resp_por_perg,  Number(value.id_turno)-1, dadoturno)
    /////////////////////////////////////////////////
    cont_p1 = [0,0,0,0,0], cont_p2 = [0,0,0,0,0],
    cont_p3 = [0,0,0,0,0], cont_p4 = [0,0,0,0,0];
    })
    
  ////////////////////// 
  }	

  ///////////////////////////////////////////////////////////////
function Favorabilidade_Turno(props, turno, dadoturno){
  let total =0 , favorabilidade_turno =0;
    
      props.forEach(element => {
         favorabilidade_turno = (((element[0]*1) + (element[1]*2) + (element[2]*3) + (element[3]*4) + (element[4]*5))/((element[0]+element[1]+element[2]+element[3]+element[4]) *5))*100;
         
         if(favorabilidade_turno>0)
             total += favorabilidade_turno; 
             
       })    
        total /=4;
        
        if(total>0)
        Criar_Turno_Favorabilidade(total.toFixed(2), turno, dadoturno)
        else 
        Criar_Turno_Favorabilidade(0, turno,dadoturno)
         
}
function Criar_Turno_Favorabilidade(props, turno,dadoturno){
  if(props >=85)  cor = "success";
  else if (60 < props && props< 85) cor = "warning";
  else if (props <= 60) cor = "danger";

  document.getElementById("fav-3").innerHTML += '<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-8 mb-4"><div class="card border-left-'+cor +' shadow col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2"style="height: 90px; width: 400px;"><div class="card-body col-12"style="heigth: 100px; width: 420px; padding-top: 5px;"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-info text-uppercase mb-1">'+ dadoturno[turno].descricao + '</div><div class="row no-gutters align-items-center"><div class="col-auto"><div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">'+ props +'%</div></div><div class="col"><div class="progress progress-sm mr-2"><div class="progress-bar bg-info" role="progressbar" style="width: '+ props +'%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div></div></div></div></div></div></div></div></div>';
  }
function ParticipacaoPorSetor(respostas,dadosetor, unidade){
const setor_total = [41,179,27,41,28,54,20,73,33,417,14,34,6],
      setor_matriz = [21,126,16,21,10,37,13,32,22,241,9,19,6],
      setor_filial = [20,53,11,20,18,17,7,41,11,176,5,15,0],
      setor_personal_total = [0,19,0,1,0,3,0,14,0,285,4,1,0],
      setor_personal_matriz = [0,15,0,0,0,2,0,7,0,142,3,0,0],
      setor_personal_filial = [0,4,0,1,0,1,0,7,0,143,1,1,0];

let cont =0, total;

    
      dadosetor.forEach( value =>{
            respostas.forEach( element=>{
              if(element.pergunta == 1){
              if(value.id_setor == element.setor && element.empresa == unidade){
                cont++;
              }else if (unidade == 0 && (element.empresa == 1 || element.empresa == 2)){
              if(value.id_setor == element.setor)
                cont++;
              }
              else if (unidade == 5 && (element.empresa == 3 || element.empresa == 4)){
                if(value.id_setor == element.setor)
                  cont++;
              }
            }
            });
      
            switch(unidade){
              case 1:   total = ((cont)/setor_matriz[value.id_setor-1])*100;break;
             
              case 2:  total = ((cont)/setor_filial[value.id_setor-1])*100;break;

              case 3:  total = ((cont)/setor_personal_matriz[value.id_setor-1])*100; break;
              
              case 4:  total = ((cont)/setor_personal_filial[value.id_setor-1])*100;break;
              
              case 5:  total = ((cont)/setor_personal_total[value.id_setor-1])*100;break;

              default:  total = ((cont)/setor_total[value.id_setor-1])*100; break;
            }
            
            if(!total || total == Infinity)total=0;
            ///////////////////////////
            if(total >=85)  cor = "success";
            else if (60 < total && total< 85) cor = "warning";
            else if (total <= 60) cor = "danger";
            ///////////////////////////
            if(!total || total == Infinity)total=0;

            if(total > 100)total=100;

            if(unidade == 5 || unidade == 3|| unidade == 4 )  { 
              let v = [2,4,6,8,10,11,12];
              for (i=0; i< v.length; i++)
              if(v[i] == value.id_setor )
              document.getElementById("fav-4").innerHTML += '<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-8 mb-4"><div class="card border-left-'+cor +' shadow col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2"style="height: 90px; width: 400px;"><div class="card-body col-12"style="heigth: 100px; width: 420px; padding-top: 5px;"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-info text-uppercase mb-1">'+ value.descricao + '</div><div class="row no-gutters align-items-center"><div class="col-auto"><div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">'+ total.toFixed(2) +'%</div></div><div class="col"><div class="progress progress-sm mr-2"><div class="progress-bar bg-info" role="progressbar" style="width: '+ total.toFixed(2) +'%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div></div></div></div></div></div></div></div></div>';  
              }else             
              document.getElementById("fav-4").innerHTML += '<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-8 mb-4"><div class="card border-left-'+cor +' shadow col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2"style="height: 90px; width: 400px;"><div class="card-body col-12"style="heigth: 100px; width: 420px; padding-top: 5px;"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-info text-uppercase mb-1">'+ value.descricao + '</div><div class="row no-gutters align-items-center"><div class="col-auto"><div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">'+ total.toFixed(2) +'%</div></div><div class="col"><div class="progress progress-sm mr-2"><div class="progress-bar bg-info" role="progressbar" style="width: '+ total.toFixed(2) +'%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div></div></div></div></div></div></div></div></div>';  
              
          cont=0;
        });
}



