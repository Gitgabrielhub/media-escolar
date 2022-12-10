function dados(){
    let nome=window.prompt("qual é o seu nome?");
    let n1=Number(window.prompt(`${nome} qual foi a sua nota do primeiro bimestre?`));
    let n2=Number(window.prompt(`${nome} qual foi a sua nota do segundo bimestre ?`));
    let n3=Number(window.prompt(`${nome} qual foi a nota do terceiro bimestre ?`));
    let n4=Number(window.prompt(`${nome} qual foi a nota do quarto bimestre?`));

    var media= (n1+n2+n3+n4)/2;
    
    let mensagem

    if(media>=20){
        mensagem= `parabens ${nome} voce foi aprovado com ${media}!!`

    }else{
        mensagem=`Nao foi desta vez!`
    } 

    let resultado=document.getElementById('result');
    resultado.innerHTML=`<p>primeiro bim <mark>${n1}</mark></p>`
    resultado.innerHTML+=`<p>segundo bim <mark>${n2}</mark></p>`
    resultado.innerHTML+=`<p>terceiro bim <mark>${n3}</mark></p>`
    resultado.innerHTML+=`<p>quarto bim <mark>${n4}</mark></p>`
    resultado.innerHTML+=`<p>media final <mark>${media}</mark></p>`
    resultado.innerHTML+=`<p>situação final: <strong style="color:red;">${mensagem}</strong></p>`
};

