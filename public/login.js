
import { getInfo } from "./services/llamados.js"

const inputNombre = document.getElementById("inputNombre")
const inputPass = document.getElementById("inputPass")
const btnIniciarSesion = document.getElementById("btnIniciarSesion")


btnIniciarSesion.addEventListener("click",async function(){
    let data = await getInfo("usuarios")
    const usuarioValido = data.find((usuario)=> usuario.nombreUsuario === inputNombre.value && usuario.inpuntClaveUsuario === inputPass.value && usuario.tipoUsuario==="estudiante")
    const usuarioValidoAdmin = data.find((usuario)=> usuario.nombreUsuario === inputNombre.value && usuario.inpuntClaveUsuario === inputPass.value && usuario.tipoUsuario==="admin")
    if (usuarioValido) {
        window.location.href = "estudiantes.html"
        localStorage.setItem("nombre",usuarioValido.nombreUsuario)
    }else if(usuarioValidoAdmin){
        window.location.href = "admin.html"
      }  
})

