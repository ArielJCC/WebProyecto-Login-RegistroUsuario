  // Función para validar el formulario de registro
  function validarFormulario() {
    // Obtener el valor del campo de contraseña
    var contrasena = document.getElementById("contrasena").value;
    
    // Obtener el valor del campo de confirmación de contraseña
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;

    // Comprobar si las contraseñas no coinciden
    if (contrasena != confirmarContrasena) {
      // Mostrar una alerta si las contraseñas no coinciden
      alert("Las contraseñas no coinciden");
      // Devolver false para evitar el envío del formulario
      return false;
    }
    
    // Devolver true si las contraseñas coinciden
    return true;
  }

