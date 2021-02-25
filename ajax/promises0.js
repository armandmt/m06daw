
fetch("https://reqres.in/api/users/")
    .then(data =>data.json())
    .then ((data) => console.log("ooole-1"))
    .catch((data ) => console.log("Oopps-1"))
    .finally( console.log("Aquí sempre arribo - 1"))
    
fetch("https://reqaaaares.in/api/users/")
    .then(data =>data.json())
    .then (() => console.log("ooole-2"))
    .catch(() => console.log("Oopps-2"))
    .finally( console.log("Aquí sempre arribo - 2"))
