let oPrueba = {
    precio: 12,
    iva: 1.21,
    precioFinal: 0
};

oPrueba.CalculaIvaAsiync = function(){
    setTimeout(() => {
        this.precioFinal = this.precio * this.iva;  
    }, 0);
    this.DimeCantidad();
    console.log(`Bien`);
}
oPrueba.DimeCantidad = function(){
    console.log(`${this.precioFinal}`);
}

oPrueba.CalculaIvaAsiync();