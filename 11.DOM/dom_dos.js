function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    
}

//click asociado al documento
document.addEventListener("click", (e) => {
    console.log("Click en",e.target);

    //si el object que origina el evento click en el document, ejecutar flujoEventos
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigo y docente digital...Jonathan Mircha");

        e.preventDefault();
    };
});

/*
$linkEventos.addEventListener("click", (e) => {
    alert("Hola soy tu amigo y docente digital...Jonathan Mircha");
    
    e.preventDefault();
    e.stopPropagation();
});
*/