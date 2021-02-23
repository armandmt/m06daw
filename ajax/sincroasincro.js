setTimeout( function() {

    console.log("Han passat dos segons");
    setTimeout(() => {
        console.log ("Han passat quatre segons")
        setTimeout(() => {
            console.log ("Han passat sis segons")
            setTimeout(() => {
                console.log ("Han passat vuit segons")
                setTimeout(() => {
                    console.log ("Han passat deu segons")
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);

},2000);

document.getElementById("botonet").addEventListener("click",function () {
        alert ("Hola bon dia");
});