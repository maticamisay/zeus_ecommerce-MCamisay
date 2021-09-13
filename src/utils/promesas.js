const prod = [
    {
        "id":"1",
        "nombre":"Cartucho HP 664 Negro",
        "precio":"1600",
        "descripcion":"Cartucho original para HP 664 con 2 ml de tinta",
        "url":"https://i.ibb.co/nMD7RsM/hp-664-negro.png",
        "categoria":"impresion",
        "subcategoria":"cartucho"
    },
    {
        "id":"2",
        "nombre":"Cartucho HP 664 Color",
        "precio":"1700",
        "descripcion":"Cartucho original para HP 664 con 2 ml de tinta",
        "url":"https://i.ibb.co/2Kdz9tQ/hp-664-color.png",
        "categoria":"impresion",
        "subcategoria":"cartucho"
    },
    {
        "id":"3",
        "nombre":"Cartucho HP 662 Color",
        "precio":"1700",
        "descripcion":"Cartucho original para HP 662 con 3 ml de tinta",
        "url":"https://i.ibb.co/tsM0p0W/hp-662-color.png",
        "categoria":"impresion"
    },
    {
        "id":"4",
        "nombre":"Disco externo Western Digital 1 tb",
        "precio":"7000",
        "descripcion":"La simplicidad y eficiencia en rendimiento de la línea WD Elements marca la diferencia en cuanto a discos portables. Su diseño pequeño, liviano y de fácil transporte lo convierte en un dispositivo utilizable en casi cualquier lugar. La gran calidad de esta unidad de almacenamiento te brindará una durabilidad prolongada, ya que resiste a golpes e impactos generados por situaciones improvistas.",
        "url":"https://i.ibb.co/sKWpj6v/wd-externo-1tb.png",
        "categoria":"computacion"
    },
    {
        "id":"5",
        "nombre":"Disco externo Seagate 1 tb",
        "precio":"7000",
        "descripcion":"Seagate, referente en el mercado de unidades de almacenamiento se encarga de brindar los mejores productos a sus clientes. Su control de calidad más su compromiso con una producción sustentable y responsable con el medio ambiente la vuelven una líder indiscutible.",
        "url":"https://i.ibb.co/jZ0VngZ/seagate-externo-1tb.png",
        "categoria":"computacion"
    }
]

function getPersonas(id) {
    if (id===undefined) {
        return prod
    }else{
        return prod.find( persona=> persona.id === id)
    }
}

export let tarea = new Promise((resolve) => {
    //console.log("ejecutando promesa") 
    setTimeout(() => {
        resolve(getPersonas());        
    }, 3000);
    //reject("error 404 ");
});
//console.log(tarea);





const prod1 = {
    "id":"1",
    "nombre":"Cartucho HP 664 Negro",
    "precio":"1600",
    "descripcion":"Cartucho original para HP 664 con 2 ml de tinta",
    "url":"https://i.ibb.co/nMD7RsM/hp-664-negro.png",
    "categoria":"impresion",
    "subcategoria":"cartucho"
}

export const getProduc = new Promise((resuelto)=>{
    setTimeout(() => {
        resuelto(prod1)        
    }, 5000);
})