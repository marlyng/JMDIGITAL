// =============================================
// FORMULARIO WHATSAPP - VERSIÓN SIMPLIFICADA
// =============================================

// Esperar a que la página cargue
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Página cargada - Buscando formulario...');
  
  // Buscar el formulario
  var form = document.getElementById('contactForm');
  
  if (form) {
    console.log('✅ Formulario encontrado! Asignando evento...');
    
    // Cuando se envíe el formulario
    form.onsubmit = function(event) {
      event.preventDefault();
      console.log('📝 Formulario enviado');
      
      // Obtener valores
      var nombre = document.getElementById('nombre').value;
      var contacto = document.getElementById('contacto').value;
      var proyectoSelect = document.getElementById('proyecto');
      var proyecto = proyectoSelect.value ? 'Project type: ' + proyectoSelect.value : '';
      
      // Validar
      if (nombre === '' || contacto === '') {
        alert('Please fill in your name and contact.');
        return false;
      }
      
      // Crear mensaje
      var mensaje = 'Hello Johanna! 👋%0A%0A';
      mensaje += 'I\'m ' + nombre + '.%0A';
      mensaje += 'Contact: ' + contacto + '%0A';
      if (proyecto) mensaje += proyecto + '%0A';
      mensaje += '%0ALooking forward to hearing from you.';
      
      // Abrir WhatsApp
      var url = 'https://wa.me/573204397152?text=' + mensaje;
      window.open(url, '_blank');
      
      // Limpiar formulario
      form.reset();
      
      return false;
    };
  } else {
    console.log('❌ ERROR: No se encontró el formulario con id="contactForm"');
    alert('Error técnico: No se encontró el formulario. Por favor contacta a soporte.');
  }
});

console.log('✅ Script cargado correctamente');