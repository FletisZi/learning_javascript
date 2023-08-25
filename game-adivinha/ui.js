const btn_Start = document.querySelector('#btn-start');
const container_Quetions = document.querySelector('.container-quetions');
const resultado = document.querySelector('#resultado');
let num = 50;
let min = 0
let max = 100;
btn_Start.addEventListener('click',(e)=>{e.preventDefault ;
    
    if(!(document.querySelector('#btn-maior')) || !(document.querySelector('#btn-menor'))){
        let btn_menor = document.createElement('div');
        btn_menor.className = "btn-menor";
        btn_menor.innerHTML = `<button id="btn-menor">Menor</button>`;
        btn_menor.addEventListener('click',(e)=>{e.preventDefault; verificarmenor()});
        let btn_maior = document.createElement('div');
        btn_maior.className = "btn-maior";
        btn_maior.innerHTML = `<button id="btn-maior">Maior</button>`
        btn_maior.addEventListener('click',(e)=>{e.preventDefault; verificarmaior()});

        resultado.innerHTML = num;

        container_Quetions.appendChild(btn_menor)
        container_Quetions.appendChild(btn_maior)
    }

    function verificarmaior(){
        
        
        min = num
       
        
        num = parseInt((max-min)/2)+min

        resultado.innerHTML= num;
        
    }
    function verificarmenor(){
        max = num

        num = parseInt((max-min)/2)+min

        resultado.innerHTML= num;
    }

});