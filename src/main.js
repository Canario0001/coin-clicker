/*
Código criado por Canario0001.
A distribuição e modificação é permitida contanto que não venda ou passe como sua.
*/
console.log('%c < -- Hacker safado! Não mexa nas moedas. -- >', 'color: green');

var moedas = 0;
var proleCusto = 950;
var prole = 0;
var minaOuro = 0;
var minaOuroCusto = 3000;
var banco = 0;
var bancoCusto = 320000;
var bigTech = 0;
var bigTechCusto = 80000000000000;

window.onload = () => {
    load();
}
window.onbeforeunload = () => {
    save();
}
window.addEventListener('keyup', (event) => {
    if (event.code == "Space") {
        addMoeda(1);
    }
});

function grab(id) {return document.getElementById(id);}

function addMoeda(quantia) {
    moedas += quantia;
    grab('moeda').innerHTML = moedas;
}

function buyProle() {
    if (moedas >= proleCusto) {
        moedas -= proleCusto;
        prole += 1;
        proleCusto = Math.round(proleCusto * 1.10);
        grab('moeda').innerHTML = moedas;
        grab('prole').innerHTML = prole;
        grab('sal').innerHTML = proleCusto;
    }
    else {
        alert('Você não tem moedas para comprar.');
    }
}

function buyMina() {
    if (moedas >= minaOuroCusto) {
        moedas -= minaOuroCusto;
        minaOuro += 1;
        minaOuroCusto = Math.round(minaOuroCusto * 1.10);
        grab('moeda').innerHTML = moedas;
        grab('mina-qua').innerHTML = minaOuro;
        grab('preco-mina').innerHTML = minaOuroCusto;
    }
    else {
        alert('Você não tem moedas para comprar.');
    }
}

function buyBanco() {
    if (moedas >= bancoCusto) {
        moedas -= bancoCusto;
        banco += 1;
        bancoCusto = Math.round(bancoCusto * 1.20);
        grab('moeda').innerHTML = moedas;
        grab('qbank').innerHTML = banco;
        grab('cbank').innerHTML = bancoCusto;
    }
    else {
        alert('Você não tem moedas para comprar.');
    }
}

function buyEmpresa() {
    if (moedas >= 80000000000000) {
        moedas -= bigTechCusto;
        bigTech += 1;
        grab('moeda').innerHTML = moedas;
        grab('empres').innerHTML = bigTech;
        grab('pc-gigante').innerHTML = bigTechCusto;
        alert('Parabéns! Você ganhou. Pode continuar jogando, se quiser.');
    }
    else {
        alert('Você não tem moedas para comprar.');
    }
}

setInterval(() => {
    addMoeda(prole);
    addMoeda(minaOuro*50);
    addMoeda(banco*2000);
    grab('moeda').innerHTML = moedas;
    if (moedas === 1) {document.title = `${moedas} moeda - Empreendedorismo Ultimate Pro Max`;    }
    else {document.title = `${moedas} moedas - Empreendedorismo Ultimate Pro Max`;}
}, 1000);

setInterval(() => {
    grab('mps').innerHTML = prole + (minaOuro * 50) + (banco * 2000);
}, 200);

function save() {
    // q -> quantidade
    // c -> custo
    var config = {
        qmoeda: moedas,
        qworker: prole,
        cworker: proleCusto,
        qmina: minaOuro,
        cmina: minaOuroCusto,
        qbanco: banco,
        cbanco: bancoCusto,
        qtech: bigTech,
        ctech: bigTechCusto
    }
    localStorage.setItem("settings", JSON.stringify(config))
}

function load() {
    // q -> quantidade
    // c -> custo
    var baz = JSON.parse(localStorage.getItem("settings"))
    if (typeof baz.qmoeda !== undefined) moedas = baz.qmoeda;
    if (typeof baz.qworker !== undefined) {
        prole = baz.qworker;
        grab("prole").innerHTML = prole;
    }
    if (typeof baz.cworker !== undefined) {
        proleCusto = baz.cworker;
        grab("sal").innerHTML = proleCusto;
    }
    if (typeof baz.qmina !== undefined) {
        minaOuro = baz.qmina;
        grab("mina-qua").innerHTML = minaOuro;
    }
    if (typeof baz.cmina !== undefined) {
        minaOuroCusto = baz.cmina;
        grab("preco-mina").innerHTML = minaOuroCusto;
    }
    if (typeof baz.qbanco !== undefined) {
        banco = baz.qbanco;
        grab("qbank").innerHTML = banco;
    }
    if (typeof baz.cbanco !== undefined) {
        bancoCusto = baz.cbanco;
        grab("cbank").innerHTML = bancoCusto;
    }
    if (typeof baz.qtech !== undefined) {
        bigTech = baz.qtech;
        grab("empres").innerHTML = bigTech;
    }
    if (typeof baz.ctech !== undefined) {
        bigTechCusto = baz.ctech;
        grab("pc-gigante").innerHTML = bigTechCusto;
    }
}

function reset() {
    const pri = confirm('Você tem certeza de que quer deletar seu progresso?');
    if (pri == true) {
        const seg = confirm('ÚLTIMA CHANCE! TEM CERTEZA DE QUE QUER RESETAR SEU PROGRESSO? ELE NÃO SERÁ RECUPERADO.');
        if (seg == true) {
            moedas = 0;
            proleCusto = 950;
            prole = 0;
            minaOuro = 0;
            minaOuroCusto = 3000;
            banco = 0;
            bancoCusto = 320000;
            bigTech = 0;
            bigTechCusto = 80000000000000;
            localStorage.clear();
            grab('prole').innerHTML = prole;
            grab('sal').innerHTML = proleCusto;
            grab('mina-qua').innerHTML = minaOuro;
            grab('preco-mina').innerHTML = minaOuroCusto;
            grab('qbank').innerHTML = banco;
            grab('cbank').innerHTML = bancoCusto;
            grab('empres').innerHTML = bigTech;
            grab('pc-gigante').innerHTML = bigTechCusto;
            alert('Progresso resetado.');
        }
    }
}
