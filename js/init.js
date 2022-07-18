function list()
{
    for (const uni in universidades)
    {
        document.getElementById("universidades").innerHTML += `<li onclick="select('${uni}')"> ${uni} </li>`
    }
}


function buscador(bus, buss)
{
    document.getElementById(bus).style.display = "inline"
    var txtValue;
    var filter = document.getElementById(buss).value.toUpperCase();
    var li = document.getElementById(bus).getElementsByTagName("li");

    for (let n = 0; n < li.length; n++) {
        txtValue = li[n].textContent || li[n].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[n].style.display = "";
        } else {
            li[n].style.display = "none";
        }
    }
}

function select(uni)
{
    const selected = uni;
    document.getElementById("universidades").style.display = "none"

    for (const carrer in universidades[selected])
    {
        document.getElementById("carreras").innerHTML += `<li onclick="select('${carrer}')"> ${carrer} </li>`
    }
}

