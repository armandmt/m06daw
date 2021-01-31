var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
var expr2 = /^1[8-9]|[2-5]\d|60$/;

$(document).ready(function(){

    $("#bEnviar").click(function(){
        var nom = $("#itNom").val();
        var correu = $("#itMail").val();
        var assumpte = $("#itAssumpte").val();
        var edat = $("#itEdat").val();

        if(nom == ""){
            $("#missatge1").fadeIn("slow");
            return false;
        }
        else{
            $("#missatge1").fadeOut();

            if(correu == "" || !expr.test(correu)){
                $("#missatge2").fadeIn("slow");
                return false;
            }
            else{
                $("#missatge2").fadeOut();

                if(assumpte == ""){
                    $("#missatge3").fadeIn("slow");
                    return false;
                }
                else{
                    $("#missatge3").fadeOut();

                    if(edat == "" || !expr2.test(edat)){
                        $("#missatge4").fadeIn("slow");
                        return false;
                    }
                }
            }
        }

    });//click
});//ready