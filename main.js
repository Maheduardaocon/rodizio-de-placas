function Rodizio(){

    const texto = document.querySelector("h2");
    const placa = document.querySelector('#placa').value;
    const dia = document.querySelector('#dia').value; 
    const circulacao = document.querySelector('#circulacao').value;

    
    if ((placa == 0 || placa == 9) && (dia == "Sexta" || dia == "sexta") && (circulacao == "Sim" || circulacao == "sim" )) {
        texto.innerHTML = "Não poderá circular na área vermelha das 7h às 10h e das 17h às 20h na sexta-feira.";
         
    }

    else if ((placa == 1 || placa == 2) && (dia == "Segunda" || dia == "segunda") && (circulacao == "Sim" || circulacao == "sim" )) {
        texto.innerHTML = "Não poderá circular na área vermelha das 7h às 10h e das 17h às 20h na segunda-feira.";
         
    }

    else if ((placa == 3 || placa == 4) && (dia == "Terça" || dia == "terça") && (circulacao == "Sim" || circulacao == "sim" )) {
        texto.innerHTML = "Não poderá circular na área vermelha das 7h às 10h e das 17h às 20h na terça-feira.";
         
    }

    else if ((placa == 5 || placa == 6) && (dia == "Quarta" || dia == "quarta") && (circulacao == "Sim" || circulacao == "sim" )) {
        texto.innerHTML = "Não poderá circular na área vermelha das 7h às 10h e das 17h às 20h na quarta-feira.";
         
    }

    else if ((placa == 7 || placa == 8) && (dia == "Quinta" || dia == "quinta") && (circulacao == "Sim" || circulacao == "sim" )) {
        texto.innerHTML = "Não poderá circular na área vermelha das 7h às 10h e das 17h às 20h na quinta-feira.";
         
    }
    
        else {
        texto.innerHTML =  "Pode circular normalmente!";
        }
    
        }
        