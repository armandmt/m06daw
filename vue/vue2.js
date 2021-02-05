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
    reduirSaldo()  {
        
        this.quantitat = this.quantitat - 100;
        if (this.quantitat <= 0) {
            this.desactivar= true            
        }
    }
 }

})

    
