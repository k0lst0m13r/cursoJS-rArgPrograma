document.querySelector("#bienvenida").onclick = function(){

    const primerNombre = document.querySelector("#primer-nombre").value;
    const segundoNombre = document.querySelector("#segundo-nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const edadUsuario = document.querySelector("#edad").value;
    const bienvenida = document.querySelector("h1");
    const datosUsuario = `Nombres:${primerNombre} ${segundoNombre} Apellido/s:${apellido} Edad:${edadUsuario}`;

    document.querySelector('#mostrar-datos').value = datosUsuario;
    bienvenida.innerText = `Bienvenide ${primerNombre} !`;


    return false;
}
