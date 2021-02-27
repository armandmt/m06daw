

document.querySelector("#tasques").addEventListener("submit", function (e)
    {
        e.preventDefault();
        console.log("Hola bon dia" + e)

        let titol = document.querySelector("#titol").value
        let descripcio = document.querySelector("#descripcio").value
        let data = document.querySelector("#data").value

        console.log ( {titol,descripcio,data})

        setDades ({titol,descripcio,data})
        

        // Enviar al servidor BD
        // https://practiques-758e3-default-rtdb.firebaseio.com/
       

    }
    )    
async function setDades(tasca) {   // Enviem un registre
        try {
            const res = await fetch(`https://practiques-758e3-default-rtdb.firebaseio.com/tasques.json`, {
                method: 'POST',  // Genera un id aleatori
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tasca)
            })
            const db = await res.json()
            longi++
            console.log(db)
            
        } catch (error) {
            console.log(error)
        }
}


async function visualitzaTasques() {


        const res = await fetch("https://practiques-758e3-default-rtdb.firebaseio.com/tasques.json")
        const db = await res.json()

        let tabli = document.querySelector("#tasques")

        for (i in db)
        {
            console.log(i);

            let tr = document.createElement("tr")
            tr.innerHTML = "<td>"+db[i].titol + "</td><td>"+db[i].descripcio+"</td>"
            tabli.appendChild(tr)

                     
   
            //db.descripcio
            //db.data

        }


}
    
visualitzaTasques();