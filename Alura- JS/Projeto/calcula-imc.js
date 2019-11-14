
var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs;

botao.addEventListener("click", function(){

        var trsPacientes = document.getElementsByClassName("paciente"); // Array de trs
    
        percorreArray(trsPacientes, function(pacienteTr){
        
            var tdNome = pacienteTr.getElementsByClassName("info-nome") [0];
            var tdPeso = pacienteTr.getElementsByClassName("info-peso") [0];
            var tdAltura = pacienteTr.getElementsByClassName("info-altura") [0];
        
            var pacienteAtual = {nome: tdNome.textContent,
                                 peso : tdPeso.textContent, 
                                 altura : tdAltura.textContent,
                                 pegaImc : function(){
        
                                                if(this.altura != 0){
                                                    var imc = this.peso / (this.altura * this.altura);
                                                        return imc;
                                                } else{
                                                console.log("A altura não pode ser 0");
                                                }
                                            }
                                };
        
            var imc = pacienteAtual.pegaImc();
        
            var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
                tdImc.textContent = imc;
        
                var classe = null;
        
                if ((imc >=18.5) && (imc <=24.99)) {
                    classe = "normal";
                } else if ((imc >=25) && (imc <=29.99)) {
                    classe = "acima";
                } else if (imc <17 || imc >=35 && imc <=39.99) {
                    classe = "muito-abaixo";
                } else if((imc >=17) && (imc <=18.49)){
                    classe = "abaixo";
                } else if((imc >=30) && (imc <=34.99)){
                    classe = "obesidade-1";
                } else if(imc >40){
                    classe = "obesidade-3";
                }
                if(classe) {
                    tdImc.classList.add(classe) 
                }
        
                console.log(imc);
            });
});


    
  
    
    


        

    



