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

window.onload = function() {
    load();
}
window.onbeforeunload = function() {
    save();
}

function addMoeda(quantia) {
    moedas += quantia;
    document.getElementById('moeda').innerHTML = moedas;
}

function buyProle() {
    if (moedas >= proleCusto) {
        moedas -= proleCusto;
        prole += 1;
        proleCusto = Math.round(proleCusto * 1.10);
        document.getElementById('moeda').innerHTML = moedas;
        document.getElementById('prole').innerHTML = prole;
        document.getElementById('sal').innerHTML = proleCusto;
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
        document.getElementById('moeda').innerHTML = moedas;
        document.getElementById('mina-qua').innerHTML = minaOuro;
        document.getElementById('preco-mina').innerHTML = minaOuroCusto;
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
        document.getElementById('moeda').innerHTML = moedas;
        document.getElementById('qbank').innerHTML = banco;
        document.getElementById('cbank').innerHTML = bancoCusto;
    }
    else {
        alert('Você não tem moedas para comprar.');
    }
}

function buyEmpresa() {
    if (moedas >= 80000000000000) {
        moedas -= bigTechCusto;
        bigTech += 1;
        document.getElementById('moeda').innerHTML = moedas;
        document.getElementById('empres').innerHTML = bigTech;
        document.getElementById('pc-gigante').innerHTML = bigTechCusto;
        alert('Parabéns! Você ganhou. Pode continuar jogando, se quiser.');
    }
    else {
        alert('Você não tem moedas para comprar.');
    }
}

setInterval(function() {
    addMoeda(prole);
    addMoeda(minaOuro*50);
    addMoeda(banco*2000);
    document.getElementById('moeda').innerHTML = moedas;
    if (moedas === 1) {document.title = `${moedas} moeda - Empreendedorismo Ultimate Pro Max`;    }
    else {document.title = moedas + " moedas - Empreendedorismo Ultimate Pro Max";}
    MoedasPS();
}, 1000)

function MoedasPS() {
    document.getElementById('mps').innerHTML = prole + (minaOuro * 50) + (banco * 2000);
}

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
        document.getElementById("prole").innerHTML = prole;
    }
    if (typeof baz.cworker !== undefined) {
        proleCusto = baz.cworker;
        document.getElementById("sal").innerHTML = proleCusto;
    }
    if (typeof baz.qmina !== undefined) {
        minaOuro = baz.qmina;
        document.getElementById("mina-qua").innerHTML = minaOuro;
    }
    if (typeof baz.cmina !== undefined) {
        minaOuroCusto = baz.cmina;
        document.getElementById("preco-mina").innerHTML = minaOuroCusto;
    }
    if (typeof baz.qbanco !== undefined) {
        banco = baz.qbanco;
        document.getElementById("qbank").innerHTML = banco;
    }
    if (typeof baz.cbanco !== undefined) {
        bancoCusto = baz.cbanco;
        document.getElementById("cbank").innerHTML = bancoCusto;
    }
    if (typeof baz.qtech !== undefined) {
        bigTech = baz.qtech;
        document.getElementById("empres").innerHTML = bigTech;
    }
    if (typeof baz.ctech !== undefined) {
        bigTechCusto = baz.ctech;
        document.getElementById("pc-gigante").innerHTML = bigTechCusto;
    }
}
