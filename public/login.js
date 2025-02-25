import { getInfo } from "./services/llamados.js"

const inputNombre = document.getElementById("inputNombre")
const inputPass = document.getElementById("inputPass")
const btnIniciarSesion = document.getElementById("btnIniciarSesion")


btnIniciarSesion.addEventListener("click",async function(){
    let data = await getInfo("usuarios")
    const usuarioValido = data.find((usuario)=> usuario.nombreUsuario === inputNombre.value && usuario.inpuntClaveUsuario === inputPass.value)
    if (usuarioValido) {
        console.log("USUARIO CORRECTO");
    }else{
        console.log("USUARIO INCORRECTO");
        
    }    
})