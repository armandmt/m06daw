const app= Vue.createApp({

 data() {
     return {
         titol : "El meu banc amb Vue.js",
         quantitat: 1000,
         enllac: 'https://youtube.com',
         estat: false,
         serveis:  [ "Transferències","Pagaments","Girs", "Xecs"],
         desactivar: false,

     }
 },

 methods: {
    afegirSaldo()  {
        this.quantitat = this.quantitat + 100;

        if (this.quantitat > 0) {
            this.desactivar= false
        }
    },
    reduirSaldo(valor)  {
        
        this.quantitat = this.quantitat - valor;
        if (this.quantitat <= 0) {
            this.desactivar= true            
        }
    }
 },
 computed:  {

    colorQuantitat() {

        return this.quantitat > 500 ? "text-success" : "text-danger"


    },
    majusculesText() {

        return this.titol.toUpperCase()

    }
 }

})

    
