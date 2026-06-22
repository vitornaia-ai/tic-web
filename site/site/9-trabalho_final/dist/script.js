// ================================================
// JAVASCRIPT — João Cunha | Trombonista | 2046
// ================================================
// Este ficheiro contém 9 funcionalidades em JavaScript:
// 1. Popup de boas vindas com botão para entrar no site
// 2. Barra de progresso de scroll no topo da página
// 3. Cursor personalizado dourado a seguir o rato
// 4. Efeito de digitação no texto do hero
// 5. Menu que encolhe ao fazer scroll
// 6. Menu hambúrguer para dispositivos móveis
// 7. Botão "Voltar ao Topo" automático ao fazer scroll
// 8. Animações de entrada e contagem dos números ao fazer scroll
// 9. Destaque automático do link do menu conforme a secção visível

// ---- 1. POPUP DE BOAS VINDAS ----
// Ao clicar no botão "Entrar no Site", o popup desaparece
// com uma animação de fade-out (classe "esconder" no CSS).
// Após 500ms remove-se do ecrã para não bloquear interações.
var popup = document.getElementById('popup');
var popupBtn = document.getElementById('popupBtn');

popupBtn.addEventListener('click', function () {
    popup.classList.add('esconder');
    setTimeout(function () {
        popup.style.display = 'none';
    }, 500);
});

// ---- 2. BARRA DE PROGRESSO DE SCROLL ----
// Uma linha dourada no topo da página cresce conforme o utilizador
// faz scroll. Calcula a percentagem de página já percorrida
// dividindo a posição atual pelo total scrollável, e atualiza
// a largura da barra em CSS.
var progressoBarra = document.getElementById('progressoBarra');

window.addEventListener('scroll', function () {
    var scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    var percentagem = (window.scrollY / scrollTotal) * 100;
    progressoBarra.style.width = percentagem + '%';
});

// ---- 3. CURSOR PERSONALIZADO ----
// Um ponto dourado e um círculo seguem o rato.
// O círculo segue com atraso visual via CSS transition.
// Ao passar por links e botões, ambos ficam maiores.
var cursor = document.getElementById('cursor');
var cursorSeguidor = document.getElementById('cursorSeguidor');

document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorSeguidor.style.left = e.clientX + 'px';
    cursorSeguidor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, label, .card, .galeria-item, .galeria-destaque').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
        cursor.classList.add('grande');
        cursorSeguidor.classList.add('grande');
    });
    el.addEventListener('mouseleave', function () {
        cursor.classList.remove('grande');
        cursorSeguidor.classList.remove('grande');
    });
});

// ---- 4. EFEITO DE DIGITAÇÃO NO HERO ----
// O subtítulo da capa aparece letra a letra como se estivesse
// a ser escrito. Um cursor piscante dourado acompanha o texto
// e desaparece quando a frase termina.
var textoHero = 'Trombonista Internacional · Músico Clássico · Jazz';
var elementoHero = document.getElementById('heroTexto');
var indice = 0;

function escrever() {
    if (indice < textoHero.length) {
        elementoHero.innerHTML = textoHero.substring(0, indice + 1) + '<span class="cursor-texto">|</span>';
        indice++;
        setTimeout(escrever, 55);
    } else {
        elementoHero.innerHTML = textoHero;
    }
}

setTimeout(escrever, 1200);

// ---- 5. MENU COMPACTO AO SCROLL ----
// Quando o scroll passa de 80px, o menu fica mais pequeno
// adicionando a classe "compacto" que reduz o padding via CSS.
var menu = document.getElementById('menu');

window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
        menu.classList.add('compacto');
    } else {
        menu.classList.remove('compacto');
    }
});

// ---- 6. MENU HAMBÚRGUER (MOBILE) ----
// Em ecrãs pequenos, o botão com 3 barras abre um painel lateral.
// As barras animam para um X com a classe "ativo" via CSS.
// Ao clicar num link do menu, o painel fecha automaticamente.
var hamburguer = document.getElementById('hamburguer');
var nav = document.getElementById('nav');

hamburguer.addEventListener('click', function () {
    hamburguer.classList.toggle('ativo');
    nav.classList.toggle('aberto');
});

nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        hamburguer.classList.remove('ativo');
        nav.classList.remove('aberto');
    });
});

// ---- 7. BOTÃO VOLTAR AO TOPO AUTOMÁTICO ----
// O botão dourado no canto inferior direito aparece
// automaticamente quando o scroll ultrapassa 400px.
// Desaparece quando o utilizador está perto do topo.
var btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        btnTopo.classList.add('visivel');
    } else {
        btnTopo.classList.remove('visivel');
    }
});

// ---- 8. ANIMAÇÕES DE ENTRADA + CONTAGEM DOS NÚMEROS ----
// Elementos com classe "reveal" ficam invisíveis até entrar no ecrã.
// O Intersection Observer deteta quando isso acontece e adiciona
// "visivel" para ativar o fade-in do CSS.
// Para os contadores, lê o valor final em "data-target" e conta
// progressivamente do zero até esse valor em 1.5 segundos.
function animarContador(elemento) {
    var alvo = parseInt(elemento.getAttribute('data-target'));
    var sufixo = elemento.getAttribute('data-sufixo') || '';
    var duracao = 1500;
    var intervalo = 16;
    var passos = duracao / intervalo;
    var incremento = alvo / passos;
    var atual = 0;

    var timer = setInterval(function () {
        atual += incremento;
        if (atual >= alvo) {
            elemento.textContent = alvo + sufixo;
            clearInterval(timer);
        } else {
            elemento.textContent = Math.floor(atual) + sufixo;
        }
    }, intervalo);
}

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
            setTimeout(function () {
                entry.target.classList.add('visivel');
                // Se for um contador, animar a contagem
                entry.target.querySelectorAll('.num[data-target]').forEach(function (num) {
                    animarContador(num);
                });
                // Se o próprio elemento for um contador
                if (entry.target.classList.contains('num') && entry.target.getAttribute('data-target')) {
                    animarContador(entry.target);
                }
            }, index * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
});

// ---- 9. LINK ATIVO NO MENU CONFORME SCROLL ----
// Verifica qual secção está visível e destaca o link
// do menu correspondente com a cor dourada via classe "ativo".
var seccoes = document.querySelectorAll('[id]');
var links = document.querySelectorAll('.menu a');

window.addEventListener('scroll', function () {
    var posicao = window.scrollY + 120;

    seccoes.forEach(function (seccao) {
        if (
            seccao.offsetTop <= posicao &&
            seccao.offsetTop + seccao.offsetHeight > posicao
        ) {
            links.forEach(function (link) {
                link.classList.remove('ativo');
                if (link.getAttribute('href') === '#' + seccao.id) {
                    link.classList.add('ativo');
                }
            });
        }
    });
});