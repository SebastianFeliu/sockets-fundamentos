var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
    alert("Conectado al servidor");
});
// Escuchar informacion o sucesos (on)
socket.on('disconnect', function() {
    console.log('Oooh se a perdido la conexion con el servidor =(');
    alert("Oooh se a perdido la conexion con el servidor =(");
});

//Enviar informacion (emit)
socket.emit('enviarMensaje', {
  // usuario: 'Sebastian',
   mensaje: 'Hola mundo' 
}, function(resp) {
    console.log('Respuesta del sv',resp);
})
// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})
