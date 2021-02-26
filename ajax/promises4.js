
async function todo(id) {

    try {
        data =  await fetch("https://jsonplaceholder.typicode.com/todos/"+id)
        dades = await data.json()
        console.log (dades.title);

        data = await fetch("https://jsonplaceholder.typicode.com/users/"+dades.userId)
        dades = await  data.json()
        console.log(dades.name)
    }
    catch 
    {
        console.error("Gran horror a la consulta ")
    }
    
}

todo(5)

