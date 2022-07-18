function calcular()
{
    let nem = document.getElementById("puntaje_nem").value * document.getElementById("porcentaje_nem").value/100;
    let ranking = document.getElementById("puntaje_ranking").value * document.getElementById("porcentaje_ranking").value/100;
    let lenguaje = document.getElementById("puntaje_lenguaje").value * document.getElementById("porcentaje_lenguaje").value/100;
    let mate_i = document.getElementById("puntaje_matei").value * document.getElementById("porcentaje_matei").value/100;
    let mate_ii = document.getElementById("puntaje_mateii").value * document.getElementById("porcentaje_mateii").value/100;
    let ciencias = document.getElementById("puntaje_ciencias").value * document.getElementById("porcentaje_ciencias").value/100;
    let historia = document.getElementById("puntaje_historia").value * document.getElementById("porcentaje_historia").value/100;
    document.getElementById("puntaje_ponderado").innerHTML = nem + ranking +lenguaje + mate_i + mate_ii + ciencias + historia;
}

function transformar()
{
    let psu = (document.getElementById("puntaje_psu").value - 150) * 9 / 7 + 100
    document.getElementById("puntaje_paes").innerHTML = psu
}
