
function todo(id) {

    fetch("https://jsonplaceholder.typicode.com/todos/"+id)
    .then(data => data.json())
    .then (dades => {
        
        console.log (dades.title);
        fetch("https://jsonplaceholder.typicode.com/users/"+dades.userId)
        .then (data => data.json())
        .then (dades => {
            console.log(dades.name)
        })
        .catch( () => console.log("Gran horror"))
    })
    .catch( () => console.log("Gran horror"))

}

todo(5);
todo(40);

