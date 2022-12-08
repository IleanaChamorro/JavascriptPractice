(() => { 
    //objeto ajax
    const xhr = new XMLHttpRequest(),
    //referencia nodo del dom
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    //objeto xhr funcione necesita una instancia(variable xhr), asignación de evento y ejecutar el evento
    xhr.addEventListener("readystatechange", e => {
        //el código de la callback solo retorna cuando sea 4
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('Éxito');
            //console.log(xhr.responseText)
            //convertir response a json
            let json = JSON.parse(xhr.responseText);
            console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; 
                $fragment.appendChild($li);
            });


            $xhr.appendChild($fragment);
        }else{
            console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;  
        }
        console.log("Este mensaje cargará de cualquier forma");
    });

    //abrir la petición
    //Los parámetrosque necesita el método open son: método de solicitud HTTP y una url a la que enviar la solicitud
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    //método send, envía la solicitud al servidor
    //parámetros: especificar el cuerpo de la solicitud, esto se usa principalmente para solicitudes como PUT. Si el método de solicitud es GETo HEAD, el body parámetro se ignora y el cuerpo de la solicitud se establece en null.
    xhr.send();
})();