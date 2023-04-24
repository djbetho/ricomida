$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

//Enviar alerta con mensaje correo enviado
  $("#enviarCorreo").click(function() {
    alert("El correo fue enviado correctamente...");
  });


  // cambiar de color a rojo
  $( "h5" ).on( "dblclick", function() {
     $(this).css('color', 'red');
  });

  //Toggle
  $( "h4" ).click(function() {
    $('.tarjetas').toggle('slow');
  });

  
});