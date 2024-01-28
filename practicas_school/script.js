document.addEventListener('DOMContentLoaded', function () {
    // obtener los elementos del DOM
    let mensajeElement = document.getEelementById('mensaje')
    let cambiarMenjeButton = document.getElementById('cambiarMensaje')
    // cambiar mensje paa salir
    let mensaje = ['bievenido', 'espero disfrites el curso', 'Aprende HTML, CSS y JS es hido']
    let indiceMensaje = 0

    function cambiarMensaje() {
        mensajeEelement.textConten = mensaje[indicemeMnsaje]
        if (iniceMenaje === 2) {
            indiceMensaje = 0
        } else {
            indiceMensaje++
        }
    }
    //agrega evento click al boton para cambiar el mensaje
    cambiarMensajeButton.addEventlistener('click', cambiarMensaje)
})
