// Solución para el problema de Square - prueba diferentes enfoques de URL
function probarConfiguracionSquare(){
  console.log('🔧 PROBANDO CONFIGURACIÓN SQUARE');
  
  // Verificar diagnóstico actual
  const diag = window._d;
  if(!diag){
    console.error('❌ No hay diagnóstico guardado');
    return;
  }
  
  console.log('📋 Diagnóstico actual:', diag);
  
  // Generar token
  const token = buildResultToken(diag);
  console.log('🎫 Token generado:', token.substring(0, 50) + '...');
  
  // URL base de retorno
  const baseUrl = window.location.href.split('?')[0];
  const returnUrl = baseUrl + '?resultado=' + token;
  console.log('🔗 URL de retorno:', returnUrl);
  
  // Opción 1: URL con return_url (actual)
  const option1 = 'https://square.link/u/dJiHh0f1'
    + '?ref=' + encodeURIComponent(uName)
    + '&return_url=' + encodeURIComponent(returnUrl);
  
  // Opción 2: URL con redirect_url (alternativa)
  const option2 = 'https://square.link/u/dJiHh0f1'
    + '?ref=' + encodeURIComponent(uName)
    + '&redirect_url=' + encodeURIComponent(returnUrl);
  
  // Opción 3: URL con success_url (alternativa)
  const option3 = 'https://square.link/u/dJiHh0f1'
    + '?ref=' + encodeURIComponent(uName)
    + '&success_url=' + encodeURIComponent(returnUrl);
  
  console.log('\n🔗 Opciones de URL Square:');
  console.log('Opción 1 (return_url):', option1);
  console.log('Opción 2 (redirect_url):', option2);
  console.log('Opción 3 (success_url):', option3);
  
  // Probar cada opción (descomenta la que quieras probar)
  console.log('\n💡 Elige una opción para probar:');
  console.log('Opción 1: window.location.href = option1');
  console.log('Opción 2: window.location.href = option2');
  console.log('Opción 3: window.location.href = option3');
  
  // Asignar las opciones globalmente para pruebas
  window.squareOption1 = option1;
  window.squareOption2 = option2;
  window.squareOption3 = option3;
  
  console.log('\n✅ Opciones asignadas a window.squareOption1, 2, 3');
  console.log('🧪 Prueba una con: window.location.href = window.squareOption1');
  
  return 'Configuración lista para probar';
}

// Función para crear URL de Square con el parámetro correcto
function crearUrlSquareCorrecta(){
  const diag = window._d;
  if(!diag){
    console.error('❌ No hay diagnóstico guardado');
    return null;
  }
  
  const token = buildResultToken(diag);
  const baseUrl = window.location.href.split('?')[0];
  const returnUrl = baseUrl + '?resultado=' + token;
  
  // Intentar con diferentes parámetros de retorno
  const squareUrl = 'https://square.link/u/dJiHh0f1'
    + '?ref=' + encodeURIComponent(uName)
    + '&return_url=' + encodeURIComponent(returnUrl);
  
  console.log('🔗 URL Square con return_url:', squareUrl);
  return squareUrl;
}

// Ejecutar configuración
probarConfiguracionSquare();
