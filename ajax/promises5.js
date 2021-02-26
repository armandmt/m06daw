
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function adormir (temps)
{
    console.log("Abans 2")
    timeout(3000).then ( () =>  console.log("Tempus Fugit 2"))
    console.log ("Després 2");
}

adormir(3000)


async function sleep(temps) {
    console.log("Abans 1")    
    await timeout(temps);
    console.log("Temps fugit 1");
    console.log("Després 1")
    
}

sleep(6000)

