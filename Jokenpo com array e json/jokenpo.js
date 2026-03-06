
function jogar(){

    const opcoes = ["pedra","papel","tesoura"];
    const imagensPC = ["pcpedra.png","pcpapel.png","pctesoura.png"];
    let escolhaJogador = -1;

    for(let i =0;i<opcoes.length;i++){
        if(document.getElementById(opcoes[i]).checked){
            escolhaJogador = i;
        }

    }

    if(escolhaJogador === -1){
        alert('selecione alguma opção por favor');
        return;
    }

    let sorteio = Math.floor(Math.random()*3)
    document.getElementById("pc").src= imagensPC[sorteio];
    let resultado = (escolhaJogador - sorteio + 3)%3;

    const mensagens = ["Empate!","Você Venceu!","Computador Venceu!"];
    document.getElementById("resultado").innerHTML= mensagens[resultado];
}

function resetar(){
    document.getElementById("pc").src="pc.png";
    document.getElementById("resultado").innerHTML="----";
}

if('serviceWork' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('sw.js').then(()=>console.log('Servicve Worker Registradissimo!')).catch(err=>console.log('Erro',err));
    });

}










