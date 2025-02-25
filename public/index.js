import { posData } from "./services/llamados.js";
const inpuntNombreUsuario = document.getElementById("inpuntNombreUsuario")
const inpuntClaveUsuario = document.getElementById("inpuntClaveUsuario")
const btnRegistro = document.getElementById("btnRegistro")

btnRegistro.addEventListener("click", async function() {
    let usuario ={
        "nombreUsuario":inpuntNombreUsuario.value,
        "inpuntClaveUsuario": inpuntClaveUsuario.value
    }
    await posData(usuario,"usuarios") 
    window.location.href='login.html'
})
