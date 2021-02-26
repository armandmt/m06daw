
document.querySelector("#tasques").addEventListener("submit", function (e)
    {
        e.preventDefault();
        console.log("Hola bon dia" + e)

        let titol = document.querySelector("#titol").value
        let descripcio = document.querySelector("#descripcio").value
        let data = document.querySelector("#data").value

        console.log ( {titol,descripcio,data})

        // Enviar al servidor BD
        // https://practiques-758e3-default-rtdb.firebaseio.com/
        

    }
)