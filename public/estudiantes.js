import { getInfo, posData } from "./services/llamados.js"

const btnconsulta = document.getElementById("btnconsulta")
const consultaEstudiante = document.getElementById("consultaEstudiante")
const nombreEstudiante = document.getElementById("nombreEstudiante")
const tablaDatos = document.getElementById("tablaDatos")

nombreEstudiante.value =localStorage.getItem("nombre")
const fecha = new Date()

btnconsulta.addEventListener ("click", async function() {
    let consulta={
        "usuarioConsulta":nombreEstudiante.value,
        "consulta":consultaEstudiante.value,
        "horaConsulta":`${fecha.getHours()}:${fecha.getMinutes()}`,
    }
    await posData(consulta,"consultas")
})
async function traerdatos() {
    const datos = await getInfo("consultas")
    tablaDatos.textContent=""
    const trGeneral =document.createElement("tr")
    const thNombreEstudiante = document.createElement ("th")
    const thConsultaEstudiante = document.createElement("th")
    const thHoraConsulta = document.createElement("th")
    thNombreEstudiante.textContent = "nombre del estudiante"
    thConsultaEstudiante.textContent = "Consulta estudiante"
    thHoraConsulta.textContent = "Hora Consulta"
    
    trGeneral.appendChild(thNombreEstudiante)
    trGeneral.appendChild(thConsultaEstudiante)
    trGeneral.appendChild(thHoraConsulta)
    tablaDatos.appendChild(trGeneral)

    datos.forEach(dato=>{
        const trDatos = document.createElement("tr")
        
        const tdNombre = document.createElement("td")
        const tdConsulta = document.createElement("td")
        const tdHora = document.createElement("td")
    
        trDatos.appendChild(tdNombre)
        trDatos.appendChild(tdConsulta)
        trDatos.appendChild(tdHora)

        
        tdNombre.textContent = dato.usuarioConsulta
        tdConsulta.textContent = dato.consulta
        tdHora.textContent = dato.horaConsulta

        tablaDatos.appendChild(trDatos)
    })

}
traerdatos()