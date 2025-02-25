async function posData(info,endpoint){
    try{
        const peticion = await fetch(`http://localhost:3001/${endpoint}`,{
            method: "POST",
            headers:{
                "Content-Type":"aplication/json"
            },
            body:JSON.stringify(info)
        })
        const data = await peticion.json()
        console.log(data);
        return data
    }catch(error){
        console.error(error)
    }
}
async function getInfo(endpoint) {
    try {
        const peticion = await fetch (`http://localhost:3001/${endpoint}`)
        const data = await peticion.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
    }
    
}
export{getInfo,posData}