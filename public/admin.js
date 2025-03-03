import { getInfo, posData } from "./services/llamados.js";
const tablaDatos = document.getElementById("tablaDatos")

async function traerDatos() {
    let consultas= await getInfo("consultas")
    tablaDatos.textContent=""
    let thNombreConsulta = document.createElement("th")
    thNombreConsulta.textContent = "nombre del estudiante"
    let thConsulta = document.createElement ("th")
    thConsulta.textContent = "consulta estudiante"
    let thHoraConsulta = document.createElement("th")
    thHoraConsulta.textContent = "hora consulta"
    let thRespuesta = document.createElement("th")
    thRespuesta.textContent = "Responder"
     
    let trEncabezado = document.createElement("tr")

    trEncabezado.appendChild(thNombreConsulta)
    trEncabezado.appendChild(thConsulta)
    trEncabezado.appendChild(thHoraConsulta)
    tablaDatos.appendChild(trEncabezado)
    
    
    consultas.forEach(consulta => {
        let tdNombre = document.createElement("td")
        tdNombre.textContent = consulta.usuarioConsulta

        let tdConsulta= document.createElement("td")
        tdConsulta.textContent= consulta.consulta

        let tdHora= document.createElement("td")
        tdHora.textContent=consulta.horaConsulta

        let buttonRespuesta = document.createElement("button")
        buttonRespuesta.textContent = "Responder"
        let trConsultas = document.createElement("tr")

        
        trConsultas.appendChild(tdNombre)
        trConsultas.appendChild(tdConsulta)
        trConsultas.appendChild(tdHora)
        trConsultas.appendChild(buttonRespuesta)
        
        tablaDatos.appendChild(trConsultas)
        buttonRespuesta.addEventListener("click",function(){
            if(!trConsultas.querySelector("input")){
            let inputRespuesta = document.createElement("input")
            let btnResponder = document.createElement("button")
            btnResponder.textContent = "Enviar respuesta"

            trConsultas.appendChild(inputRespuesta)
            trConsultas.appendChild(btnResponder)

            btnResponder.addEventListener("click",async function(){
                let respuesta = {
                    "pregunta": consulta.consulta,
                    "respuesta": inputRespuesta.value,
                    "usuarioResponde": "usuario"
                }
                await posData(respuesta,"respuestas")
                await traerDatos()
            })
        }
        })
    });

}
traerDatos()
