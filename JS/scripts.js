let x =document.querySelector(".x");//queryselector pega o primeiro elemento
let o =document.querySelector(".o");
let boxes =document.querySelectorAll(".box");//querySelectorAll pega todos os elementos
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1=0;
let player2=0;

//adicionando o evento de click aos boxes
for(let i =0; i<boxes.length;i++){
    //quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){
       let el=CheckEl(player1,player2);//funçao qual jogador
        
        if(this.childNodes.length==0){//se o bloco ainda está vazio executa jogada, evitando duplicidade
            let cloneEL=el.cloneNode(true);//clona avariavel
        this.appendChild(cloneEL);//adicionar clone do elemento dentro da caixa (clone com x ou o)
        //definir quem joga intercalando
        if(player1==player2){
            player1++;
            if(secondPlayer=='ai-player'){
                //executar jogada
                computerPlay();
                player2++;
            }
        }else{
            player2++;
        }
        //quem venceu
        checkWinCondition();
        }
        
    });

}
//event para saber se é 2 players ou ia
for(let i =0; i<buttons.length;i++){//some botao
    buttons[i].addEventListener("click",function(){
        secondPlayer = this.getAttribute("id");

        for(let j=0;j<buttons.length;j++){
            buttons[j].style.display='none';
        }
        setTimeout(function(){
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        },500);
    });//termina some botao
}
//definir jogador
function CheckEl(player1,player2){
    console.log("escolheu");
    if(player1==player2){
        //x
        el=x;
    }else{
        //o
        el=o;
    }
    return el;
}

//quem ganhou

function checkWinCondition(){
    console.log("checa vitoria ");
    let b1 =document.getElementById("block-1");
    let b2 =document.getElementById("block-2");
    let b3 =document.getElementById("block-3");
    let b4 =document.getElementById("block-4");
    let b5 =document.getElementById("block-5");
    let b6 =document.getElementById("block-6");
    let b7 =document.getElementById("block-7");
    let b8 =document.getElementById("block-8");
    let b9 =document.getElementById("block-9");

    //horizontal
    if(b1.childNodes.length>0&& b2.childNodes.length >0&& b3.childNodes.length>0){
        let b1Child = b1.childNodes[0].className;//pega classe x ou o
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        if(b1Child=='x' && b2Child=='x' && b3Child=='x'){
            //x venceu
            declareWinner('x');
            console.log("venceu ");
        }else if(b1Child=='o' && b2Child=='o' && b3Child=='o'){
            //o venceu
            declareWinner('o');
            console.log("venceu ");
        }
    }
    if(b4.childNodes.length>0&& b5.childNodes.length >0&& b6.childNodes.length>0){
        let b4Child = b4.childNodes[0].className;//pega classe x ou o
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        if(b4Child=='x' && b5Child=='x' && b6Child=='x'){
            //x venceu
            declareWinner('x');
            console.log("venceu ");
        }else if(b4Child=='o' && b5Child=='o' && b6Child=='o'){
            //o venceu
            declareWinner('o');
            console.log("venceu ");
        }
    }


if(b7.childNodes.length>0&& b8.childNodes.length >0&& b9.childNodes.length>0){
    let b7Child = b7.childNodes[0].className;//pega classe x ou o
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    if(b7Child=='x' && b8Child=='x' && b9Child=='x'){
        //x venceu
        declareWinner('x');
        console.log("venceu ");
    }else if(b7Child=='o' && b8Child=='o' && b9Child=='o'){
        //o venceu
        declareWinner('o');
        console.log("venceu ");
    }
}
//vertical
if(b1.childNodes.length>0&& b4.childNodes.length >0&& b7.childNodes.length>0){
    let b1Child = b1.childNodes[0].className;//pega classe x ou o
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
    if(b1Child=='x' && b4Child=='x' && b7Child=='x'){
        //x venceu
        declareWinner('x');
        console.log("venceu ");
    }else if(b1Child=='o' && b4Child=='o' && b7Child=='o'){
        //o venceu
        declareWinner('o');
        console.log("venceu ");
    }
}

if(b2.childNodes.length>0&& b5.childNodes.length >0&& b8.childNodes.length>0){
    let b2Child = b2.childNodes[0].className;//pega classe x ou o
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    if(b2Child=='x' && b5Child=='x' && b8Child=='x'){
        //x venceu
        declareWinner('x');
        console.log("venceu ");
    }else if(b2Child=='o' && b5Child=='o' && b8Child=='o'){
        //o venceu
        declareWinner('o');
        console.log("venceu ");
    }
}
if(b3.childNodes.length>0&& b6.childNodes.length >0&& b9.childNodes.length>0){
    let b3Child = b3.childNodes[0].className;//pega classe x ou o
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    if(b3Child=='x' && b6Child=='x' && b9Child=='x'){
        //x venceu
        declareWinner('x');
        console.log("venceu ");
    }else if(b3Child=='o' && b6Child=='o' && b9Child=='o'){
        //o venceu
        declareWinner('o');
        console.log("venceu ");
    }
}
//diagonal
if(b1.childNodes.length>0&& b5.childNodes.length >0&& b9.childNodes.length>0){
    let b1Child = b1.childNodes[0].className;//pega classe x ou o
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    if(b1Child=='x' && b5Child=='x' && b9Child=='x'){
        //x venceu
        console.log("venceu ");
        declareWinner('x');
    }else if(b1Child=='o' && b5Child=='o' && b9Child=='o'){
        //o venceu
        declareWinner('o');
        console.log("venceu ");
    }
}

if(b3.childNodes.length>0&& b5.childNodes.length >0&& b7.childNodes.length>0){
    let b3Child = b3.childNodes[0].className;//pega classe x ou o
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
    if(b3Child=='x' && b5Child=='x' && b7Child=='x'){
        //x venceu
        declareWinner('x');
        console.log("venceu ");
    }else if(b3Child=='o' && b5Child=='o' && b7Child=='o'){
        //o venceu
        console.log("venceu ");
        declareWinner('o');
    }
}
    //deu velha
    let counter =0;

    for(let i= 0; i<boxes.length;i++){
        if(boxes[i].childNodes[0]!=undefined){
            counter++;
            console.log("entrou cont");
        }
        console.log("entrou");
    }

    if(counter==9){
       
        console.log('deu velha');
        declareWinner('deu velha');
    }


}

//limpa o jogo, declara o vencedor e atualiza o placar

function declareWinner(winner){

    let scoreboarddx = document.querySelector("#scoreboard-1");
    let scoreboarddo = document.querySelector("#scoreboard-2");
    let msg='';
    if(winner=='x'){
        scoreboarddx.textContent=parseInt(scoreboarddx.textContent)+1; //transforma placar em int e soma + 1
        msg="ojogador 1 venceu";
    }else if(winner=='o'){
        scoreboarddo.textContent = parseInt(scoreboarddo.textContent)+1;
        msg="ojogador 2 venceu";
    }
    else{
        msg="deu velha";
    }
    //exibe mensagem
    messageText.innerHTML=msg;//innerHtml adiciona elemento diretament ao html
    messageContainer.classList.remove("hide");//remove a classe q esconde a mensagem
    //esconde mensagem
    setTimeout(function(){
        messageContainer.classList.add("hide");
    },3000);
    //zera jogadas
    player1=0;
    player2=0;
    //remove x e o
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i =0; i<boxesToRemove.length;i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

    
}
//jogada do pc
function computerPlay(){
    let cloneO = o.cloneNode(true);
    counter=0;
    filled=0;
    for(let i =0;i<boxes.length;i++){
        let randomNumber = Math.floor(Math.random()*5);
        if(boxes[i].childNodes[0]==undefined){
            if(randomNumber<=1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }else{//quantas estao preenchidas
                filled++;
            }
          }
        }

    if(counter==0&& filled< 9)//se n preencheu algo
    {
        computerPlay();
    }
}