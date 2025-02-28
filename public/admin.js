import { getInfo } from "./services/llamados.js";
const tablaDatos = document.getElementById("tablaDatos")

async function traerDatos() {

    let consultas= await getInfo("consultas")
    let thNombreConsulta = document.createElement("th")
    thNombreConsulta.textContent = "nombre del estudiante"
    let thConsulta = document.createElement ("th")
    thConsulta.textContent = "consulta estudiante"
    let thHoraConsulta = document.createElement("th")
    thHoraConsulta.textContent = "hora consulta"
    let thRespuesta = document.createElement("th")
    thRespuesta.textContent = "Responder"
     
    let trEncabezado = document.createElement("tr")

    trEncabezado.appendChild(thConsulta)
    trEncabezado.appendChild(thHoraConsulta)
    trEncabezado.appendChild(thNombreConsulta)
    tablaDatos.appendChild(trEncabezado)
    
    
    consultas.forEach(consulta => {
        let tdNombre = document.createElement("td")
        tdNombre.textContent = consulta.usuarioConsulta

        let tdConsulta= document.createElement("td")
        tdConsulta.textContent= consulta.consulta

        let tdHora= document.createElement("td")
        tdHora.textContent=consulta.HoraConsulta

        let buttonRespuesta = document.createElement("button")
        buttonRespuesta.textContent = "Responder"
        let trConsultas = document.createElement ("tr")

        trConsultas.appendChild(tdNombre)
        trConsultas.appendChild(tdConsulta)
        trConsultas.appendChild(tdHora)
        trConsultas.appendChild(buttonRespuesta)

        tablaDatos.appendChild(trConsultas)
    });

}
    traerDatos()    