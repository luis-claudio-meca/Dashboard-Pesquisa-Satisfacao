function Satisfação_Perguntas_Cat(resposta , categoria){
    let cont_p1 = [0,0,0,0,0], cont_p2 = [0,0,0,0,0],
    cont_p3 = [0,0,0,0,0], cont_p4 = [0,0,0,0,0];
    let resp_por_perg = [] , totaldepessoas = 0;

    document.getElementById("root").innerHTML = "<h1>Total de dados "+ resposta.length + "</h1>";
    let number_pergunta = Number_pergunta(categoria);
    
    resposta.forEach(element => {
        switch(Number(element.pergunta)){
            case number_pergunta:     cont_p1 = Cont_satisfação(Number(element.resposta), cont_p1); break;
            case (number_pergunta+1): cont_p2 = Cont_satisfação(Number(element.resposta), cont_p2); break;
            case (number_pergunta+2): cont_p3 = Cont_satisfação(Number(element.resposta), cont_p3); break;
            case (number_pergunta+3): cont_p4 = Cont_satisfação(Number(element.resposta), cont_p4); break;            
        }

        if(element.pergunta == 1)  totaldepessoas++;
    });
    resp_por_perg[0] = cont_p1; resp_por_perg[1] = cont_p2; resp_por_perg[2] = cont_p3;
    resp_por_perg[3] = cont_p4;

    
// Calculo de Porcentagem
    resp_por_perg.forEach(element => {
    var sem_opniao = ((element[0]/totaldepessoas)*100).toFixed(2);
    var discordo = ((element[1]/totaldepessoas)*100).toFixed(2);
    var discordo_parcialmente = ((element[2]/totaldepessoas)*100).toFixed(2);
    var concordo_parcialmente = ((element[3]/totaldepessoas)*100).toFixed(2);
    var concordo = ((element[4]/totaldepessoas)*100).toFixed(2);
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


		
			
