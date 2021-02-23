var todos = [];

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(data => data.json())    // function(data) { return data.json() }
    .then(tots => {
        todos = tots;
        console.log(todos)
        todos.map((tot,i) => {
            
            let tdd = document.querySelector("#tdd");
            let tr = document.createElement ("tr");
            let td = document.createElement ("td");
            let td2 = document.createElement ("td");
            let td3 = document.createElement ("td");
            td.innerHTML = tot.title;
            td2.innerHTML= tot.completed;

            fetch("https://jsonplaceholder.typicode.com/users/"+tot.userId)
                .then(data =>data.json())
                .then (users => {
                    td3.innerHTML = users.name;
                 })

            td3.innerHTML="oeoeo";

            tdd.appendChild(tr);
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3)


        });
    } )

    
