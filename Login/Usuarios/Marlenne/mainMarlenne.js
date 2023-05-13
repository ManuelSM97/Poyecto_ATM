function mostrarsaldo (){
    document.getElementById("consultar-saldo").style.display = "block";
}

function ocultarsaldo (){
    document.getElementById("consultar-saldo").style.display = "none";
}

function mostrardepositar (){
    document.getElementById("depositar-monto").style.display = "block";
}

function ocultardepositar (){
    document.getElementById("depositar-monto").style.display = "none";
}

function mostrarretirar (){
    document.getElementById("retirar-monto").style.display = "block";
}

function ocultarretirar (){
    document.getElementById("retirar-monto").style.display = "none";
}

function sumarsaldo() {
    var n1,n2,n3 

    n1 = parseInt(document.getElementById("title").textContent);
    n2 = parseInt(document.getElementById("mas-monto").value)

    n3 = parseInt(n1 + n2);

    if(n3 > 990){
        alert("Por politicas del banco no puedes tener más de $990 en tu cuenta")
    }
    else {
        const auxTitle = document.getElementById("title");
        auxTitle.innerHTML = n3;
        alert("Deposito realizado con exito");
        document.getElementById("mas-monto").value = ""
        ocultardepositar();
    }
}

function restarsaldo() {
    var n1,n2,n3 

    n1 = parseInt(document.getElementById("title").textContent);
    n2 = parseInt(document.getElementById("menos-monto").value)

    n3 = parseInt(n1 - n2);

    if(n3 < 10){
        alert("Por politicas del banco no puedes tener menos de $10 en tu cuenta")
    }
    else {
        const auxTitle = document.getElementById("title");
        auxTitle.innerHTML = n3;
        alert("Retiro realizado con exito");
        document.getElementById("menos-monto").value = ""
        ocultarretirar();
    }
}

function cerrarsesion (){
    window.location = "../../Login.html";
}