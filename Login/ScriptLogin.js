function login() {
    var user, pass;

    user = document.getElementById("inlineFormCustomSelectPref").value;
    pass = document.getElementById("contraseña").value;

    if(user == "Manuel" && pass == "1234"){
        window.location = "Usuarios/Manuel/Manuel.html";
        return false;
    } 
    else if (user == "Pedro" && pass == "4321"){
        window.location = "Usuarios/Pedro/Pedro.html";
        return false;
    }
    else if (user == "Marlenne" && pass == "2424"){
        window.location = "Usuarios/Marlenne/Marlenne.html";
        return false;
    }
    else{
        alert("NIP incorrecto")
    }
}