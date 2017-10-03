let oPrueba = {
    precio: 12,
    iva: 1.21,
};
oPrueba.CalculaIvaAsiync = function (){
    setTimeout(function() {
        let precioFinal =  this.precio * this.iva;
        console.log(`${precioFinal}`)
    }, 1000);
}

oPrueba.CalculaIvaAsiync()

oPrueba.CalculaIvaAsiync_Arrow = function(){
    setTimeout(() => {
        let precioFinal = this.precio * this.iva;
        console.log(`${precioFinal}`)
    }, 1000);
}

oPrueba.CalculaIvaAsiync_Arrow()