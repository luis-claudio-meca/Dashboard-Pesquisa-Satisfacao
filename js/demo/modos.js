  /////////////////// MODO ADMIN ///////////////
  let dashadmin = document.getElementById("dashadmin");
  let modo_admin = document.getElementById("modoadmin");
  let bodytelas = document.getElementById("body14")
  let bodysteps = document.getElementById("bodysteps")
  modo_admin.addEventListener("click", () => {
              var item = prompt("Autenticação do Modo Admin ", "Digite a senha");
              if (item == null || item == "" || item != "tutirh") {
                  alert("Senha Incorreta!");
              } else {

                  if (dashadmin.innerText.length > 0) {
                      dashadmin.innerText = "";
                      bodytelas.style.display = "none"
                      bodysteps.style.display = "none"
                      nextPrev(0);
                  } else {
                      dashadmin.innerText = "Modo Admin";
                      bodytelas.style.display = ""
                      bodysteps.style.display = "";
                      
                      document.getElementsByClassName("tab")[currentTab].style.display = "none";
                      currentTab=0;
                      nextPrev(18);

                      let select_uni = document.getElementById("inputGroupSelect01");
                        select_uni.innerHTML =    '<option selected>Todos Tutiplast</option><option value="1">Matriz</option><option value="2">Filial</option><option value="5">Todos Personal</option><option value="3">Personal-Matriz</option><option value="4">Personal-Filial</option>'
                        let unidade

                        if (select_uni.value === "Todos Tutiplast" ) unidade = 0;
                        else unidade = select_uni.value;
                
                        //-----------------------------------
                        MoldeGeral(unidade)
                    }

              }
          });

  /////////////////// MODO Tuti ///////////////

  let tutiplast = document.getElementById("tutiplast");

  tutiplast.addEventListener("click", () => {
                  if (dashadmin.innerText.length > 0) {
                      dashadmin.innerText = "";
                      bodytelas.style.display = "none"
                      bodysteps.style.display = "none"
                      nextPrev(0);
                }
                let select_uni = document.getElementById("inputGroupSelect01");
                select_uni.innerHTML =    '<option selected>Todos...</option><option value="1">Matriz</option><option value="2">Filial</option>'
                let unidade

        if (select_uni.value === "Todos...") unidade = 0;
        else unidade = select_uni.value;

        MoldeGeral(unidade)
            });


  /////////////////// MODO Tuti ///////////////
  
  let personal = document.getElementById("personal");

  personal.addEventListener("click", () => {
                  if (dashadmin.innerText.length > 0) {
                      dashadmin.innerText = "";
                      bodytelas.style.display = "none"
                      bodysteps.style.display = "none"
                      nextPrev(0);
                }

    let select_uni = document.getElementById("inputGroupSelect01");
    select_uni.innerHTML =    '<option selected>Todos Personal...</option><option value="3">Personal-Matriz</option><option value="4">Personal-Filial</option>'
    let unidade;

    if (select_uni.value === "Todos Personal...") unidade = 5;
    else unidade = select_uni.value;

        //-----------------------------------
       MoldeGeral(unidade)
});

function MoldeGeral(unidade){
    localStorage.setItem("totalfav-" + unidade, 0)
   
    //-----------------------------------
    
    switch(+unidade){
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