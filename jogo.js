// definindo dimensão
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

 var nivel = window.location.search 
 alert(nivel.replace('?', ''))


 var criaMoscaTempo = 1500
 if(nivel==='normal'){
    criaMoscaTempo = 1500

 }else if (nivel ==='dificil'){
    criaMoscaTempo = 1000
 }else if (nivel==='DaniAlves'){
    criaMoscaTempo = 750
 }



 
function ajustaTamanho(){
     altura = window.innerHeight
     largura = window.innerWidth
}
ajustaTamanho()

console.log(ajustaTamanho())

var cronometro = setInterval(function(){
    
    tempo -=1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criamosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometo').innerHTML = tempo
    }
   
},1000)

// criando posições randomicas
function posicaorandom(){

    //remover mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas >3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src= "assets/coracao_vazio.png"
            vidas++
        }
        
    }
   

    var posicaox = Math.floor(Math.random() * largura) - 100
    var posicaoy = Math.floor(Math.random() * altura) - 100
    
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0: posicaoy

    // criar o elemento html
    
    var mosca = document.createElement('img')
    mosca.src = 'assets/mosca.png'
    mosca.className = tamanhorandom() + ' ' + ladorandom()
    mosca.style.left = posicaox + 'px'
    mosca.style.top = posicaoy + 'px' 
    mosca.style.position = 'absolute'
    mosca.id = 'mosquito'
    mosca.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosca) //criando esse elemento no bodu do html
}


//tamanhos randomomicos

function tamanhorandom(){
    var classe = Math.floor(Math.random() * 3) 


    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        
    }
}

// lado a e lado b 

function ladorandom(){
    var classe = Math.floor(Math.random() * 2) 


    switch(classe) {
        case 0:
            return 'LadoA'
        case 1:
            return 'LadoB'
       
        
    }
}






