const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

const recognition =
new SpeechRecognition();

recognition.lang = "pt-PT";

recognition.continuous = true;

recognition.interimResults = false;

const status =
document.getElementById(
"jarvis-status"
);

const response =
document.getElementById(
"jarvis-response"
);

const chat =
document.getElementById(
"jarvis-chat"
);

function addMessage(
sender,
text
){

    const div =
    document.createElement("div");

    div.className =
    "jarvis-msg";

    div.innerHTML =
    "<strong>" +
    sender +
    ":</strong> " +
    text;

    chat.appendChild(div);

    chat.scrollTop =
    chat.scrollHeight;
}

function typeText(text){

    response.innerHTML="";

    let i=0;

    const timer=
    setInterval(()=>{

        response.innerHTML+=
        text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);
        }

    },20);
}

function speak(text){

    status.innerHTML =
    "SPEAKING...";

    addMessage(
    "Jarvis",
    text
    );

    typeText(text);

    const speech =
    new SpeechSynthesisUtterance(
    text
    );

    speech.lang =
    "pt-PT";

    speech.rate =
    0.95;

    speech.pitch =
    0.9;

    speech.onend=()=>{

        status.innerHTML =
        "LISTENING...";
    };

    speechSynthesis.speak(
    speech
    );
}

function goTo(id){

    const section =
    document.getElementById(id);

    if(section){

        section.scrollIntoView({

            behavior:"smooth"
        });
    }
}

function handleCommand(command){

    command=
    command.toLowerCase();

    if(command.includes("ajuda")){

        speak(
        "Pode perguntar sobre o mundo do automobilismo, qual é o carro no fundo, história, fórmula um, rally, drift, carros, motas, corridas, modificações e curiosidades e o Autor do Site."
        );

        return;
    }

    if(command.includes("história")){

        goTo("historia");

        speak(
        "O automobilismo surgiu no final do século XIX, com o aparecimento dos primeiros automóveis. No início, as corridas serviam para testar a velocidade e a resistência dos carros, que ainda eram muito simples e pouco seguros.  Com o passar do tempo, a tecnologia evoluiu bastante e os veículos tornaram-se mais rápidos, eficientes e seguros. Isso levou ao surgimento de várias modalidades, como a Fórmula 1, o Rally, o Drift e a NASCAR, cada uma com regras e estilos de corrida diferentes.  Hoje, o automobilismo é um desporto global."
        );

        return;
    }

    if(command.includes("fórmula") ||
       command.includes("formula")){

        goTo("tipos");

        speak(
        "A Fórmula 1 é a categoria mais conhecida do automobilismo mundial. Os carros são extremamente rápidos, leves e cheios de tecnologia avançada. As corridas acontecem em circuitos fechados, onde os pilotos precisam de muita precisão, estratégia e trabalho de equipa para vencer."
        );

        return;
    }

    if(command.includes("rally")){

        goTo("tipos");

        speak(
        "O Rally é uma modalidade disputada em vários tipos de terreno, como terra, asfalto, lama ou neve. Os pilotos correm em estradas fechadas ao trânsito e precisam de um grande controlo do carro, além de adaptação rápida às mudanças de piso e condições do percurso."
        );

        return;
    }

   if(command.includes("criou") ||
       command.includes("autor")){

        goTo("curiosidades");

        speak(
        "O autor deste site e meu criador é o Tiago Pinto, que fez este site com muito carinho e esforço e almeja uma nota 20. Em um aglomerado de pessoas de diferentes idades, em um certo lugar onde se reúnem com o objetivo de aprender e ensinar, ele chamava de escola. Eu não tenho mais informações sobre isso, mas ainda assim espero que ele consiga o 20."
        );

        return;
    }

    if(command.includes("drift")){

        goTo("tipos");

        speak(
        "O Drift é uma modalidade onde o objetivo é fazer derrapagens controladas nas curvas, mantendo o carro em ângulos extremos. Não é só velocidade, mas também estilo, controlo e precisão. É muito popular em exibições e competições próprias."
        );

        return;
    }

    if(command.includes("carros")){

        goTo("carros");

        speak(
        "Nesta secção encontra carros desportivos, supercarros, carros de pôtencia, clássicos e veículos JDM.   No mundo do automobilismo existem vários tipos de carros, cada um com características próprias.  Os carros desportivos são feitos para serem rápidos e divertidos de conduzir no dia a dia ou em condução mais agressiva.  Os supercarros são máquinas de alta performance, com muita potência, tecnologia avançada e preços elevados.  Os muscle cars vêm dos Estados Unidos e destacam-se pela força do motor e aceleração em linha reta.  Os clássicos são carros antigos que marcaram a história e hoje são muito valorizados.  Os JDM são carros japoneses que ficaram famosos pela cultura de tuning, drift e personalização."
        );

        return;
    }
  
    if(command.includes("motas")){

        goTo("motas");

        speak(
        "As motas oferecem uma experiência única de liberdade e adrenalina e são muito populares em competição.  Existem vários tipos de motas, cada uma pensada para um objetivo diferente.  As motas desportivas são rápidas e feitas para desempenho, com uma posição de condução mais inclinada. As naked são mais simples e equilibradas, boas tanto para cidade como para estrada.  As cruisers são mais confortáveis e usadas para viagens longas, com um estilo mais relaxado. Já as motas de enduro e motocross são feitas para terrenos difíceis, como terra e trilhos.  e tem támbem as scooters são as mais práticas, fáceis de conduzir e muito usadas em cidades para deslocações do dia a dia."
        );

        return;
    }

    if(command.includes("corridas")){

        goTo("corridas");

        speak(
        "O site apresenta dois tipos de corridas,  profissionais e ilegais. Enquanto que o automobilismo profissional é um dos desportos mais seguidos do mundo. Envolve equipas, pilotos e muita tecnologia, além de grandes investimentos em carros, patrocínios e inovação. Tudo é feito com regras e segurança bem definidas.  Ao contrario disso temos as corridas de rua fazem parte de uma cultura mais underground, muito ligada ao tuning e ao mundo JDM. Apesar de serem populares em alguns meios, são perigosas e ilegais, já que acontecem sem segurança e em vias públicas."
        );

        return;
    }

    if(command.includes("modificações") ||
       command.includes("modificacoes")){

        goTo("mods");

        speak(
        "As modificações nos carros são alterações feitas para melhorar o desempenho, o som ou o aspeto visual do veículo.  O turbo é um sistema que aumenta a potência do motor ao forçar mais entrada de ar, tornando o carro mais rápido e com melhor aceleração.  Os body kits são mudanças estéticas, como para-choques, saias laterais e spoilers, que deixam o carro com um visual mais agressivo e desportivo.  Já a suspensão pode ser alterada para baixar o carro, melhorar a estabilidade em curva e dar uma condução mais firme.  Existem ainda outras modificações, como escapes desportivos, jantes personalizadas e reprogramação do motor, que também influenciam o desempenho e o estilo do carro, mas não vão ser abordadas neste trabalho."
        );

        return;
    }

    if(command.includes("curiosidades")){

        goTo("curiosidades");

        speak(
        "Em corridas de resistência como As 24 horas de Le Mans, os pilotos chegam a conduzir durante a noite, com chuva e fadiga extrema."
        );

        speak(
        "Sabia que na Fórmula 1, um pit stop pode durar menos de 3 segundos."
        );

        speak(
        "Uma curiosidade interessante,  os pneus de corrida podem atingir temperaturas extremamente altas, chegando a mais de 100°C durante a utilização.."
        );

        return;
    }
  
if(
    command.includes("mundo do automobilismo") ||
    command.includes("automobilismo")
){
   
        speak(
        "O automobilismo é um desporto baseado em corridas de veículos motorizados, onde os pilotos competem para ver quem consegue ser mais rápido e consistente numa pista ou em estrada.  Existem várias categorias, desde as mais famosas como a Fórmula 1, até provas de resistência como as 24 Horas de Le Mans.   Todas elas têm regras próprias definidas por organizações como a FIA.  Neste mundo, a velocidade não é o único fator importante. Os pilotos precisam de reflexos rápidos, controlo emocional e muita resistência física e mental."
        );

        return;
    }
  
if(
    command.includes("fundo") ||
    command.includes("carro no fundo")
){
   
        speak(
        "Esse carro é o famoso Toyota AE86 é um carro desportivo dos anos 80, leve e simples, conhecido por ser divertido de conduzir. Tem tração traseira e não é muito potente, mas é ótimo para controlo e técnica.  Foi produzido entre 1983 e 1987, como parte da linha Corolla Levin e Sprinter Trueno.  Com o passar dos anos, o AE86 ganhou fama no mundo do drift no Japão, especialmente nos anos 90, quando pilotos começaram a usá-lo em montanha e em corridas amadoras.  Hoje, o AE86 é visto como um clássico importante da cultura automóvel, valorizado pela simplicidade e pela forma pura de conduzir."
        );

        return;
    }

    if(command.includes("site")){

        speak(
        "Este é um site dedicado ao automobilismo, com informações sobre história, modalidades, carros, motas, corridas e modificações."
        );

        return;
    }

    if(command.includes("tópicos") ||
       command.includes("topicos")){

        speak(
        "Os tópicos disponíveis são história, tipos, carros, motas, corridas, modificações e curiosidades."
        );

        return;
    }

    speak(
    "Desculpe, ainda não conheço esse tema."
    );
}

recognition.onresult =
(event)=>{

    const text =
    event.results[
    event.results.length-1
    ][0].transcript;

    addMessage(
    "Tu",
    text
    );

    handleCommand(text);
};

recognition.onend=()=>{

    recognition.start();
};

window.onload=()=>{

    recognition.start();

    speak(
    "Olá. Sou Jarvis. Bem vindo ao Mundo do Automobilismo. Estou pronto para ajudar."
    );
};

const jarvis = document.getElementById("jarvis");
const header = document.getElementById("jarvis-header");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

header.addEventListener("mousedown", (e)=>{

    isDragging = true;

    offsetX = e.clientX - jarvis.offsetLeft;
    offsetY = e.clientY - jarvis.offsetTop;

});

document.addEventListener("mousemove", (e)=>{

    if(!isDragging) return;

    jarvis.style.left = (e.clientX - offsetX) + "px";
    jarvis.style.top = (e.clientY - offsetY) + "px";

});

document.addEventListener("mouseup", ()=>{

    isDragging = false;

});