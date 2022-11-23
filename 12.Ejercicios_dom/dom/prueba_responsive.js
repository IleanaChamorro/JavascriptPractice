const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);

    let tester;
    //Evaluar si el selector es válido
    d.addEventListener("submit", e => {
        if(e.target === $form){
            e.preventDefault();
            //alert("Formulario enviado");
            tester = window.open(
                $form.direccion.value, 
                "tester", 
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.assignedSlot.value}`
                );
        }
    });

    d.addEventListener("click", e => {
        if(e.target === $form.cerrar) tester.close();
    });
}