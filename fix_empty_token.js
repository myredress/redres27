// Solución para cuando Square devuelve ?resultado= vacío
function fixEmptyTokenSquare(){
  console.log('🔧 CORRIGIENDO TOKEN VACÍO DE SQUARE');
  
  // 1. Verificar estado actual
  console.log('📊 Estado actual:');
  console.log('  URL:', window.location.href);
  console.log('  Token vacío:', window.location.search.includes('resultado=&'));
  
  // 2. Verificar si tenemos datos guardados
  console.log('📋 Datos guardados:');
  console.log('  uName:', uName || 'NO DEFINIDO');
  console.log('  uEmail:', uEmail || 'NO DEFINIDO');
  console.log('  uHeight:', uHeight || 'NO DEFINIDO');
  console.log('  answers:', Object.keys(answers || {}).length, 'respuestas');
  console.log('  window._d:', window._d || 'NO DEFINIDO');
  
  // 3. Si tenemos diagnóstico, mostrar resultados directamente
  if(window._d){
    console.log('✅ Diagnóstico encontrado - mostrando resultados...');
    console.log('  Diagnóstico:', window._d);
    
    try {
      // Mostrar resultados directamente
      buildFullResult();
      goTo('full-result');
      setPct(100);
      
      // Limpiar URL para que no tenga el token vacío
      const cleanUrl = window.location.href.split('?')[0];
      window.history.replaceState({}, '', cleanUrl);
      
      console.log('✅ Resultados mostrados exitosamente');
      return 'Resultados mostrados - problema resuelto';
      
    } catch(error) {
      console.error('❌ Error mostrando resultados:', error);
      return 'Error al mostrar resultados: ' + error.message;
    }
  } else {
    console.error('❌ No hay diagnóstico guardado - no se pueden mostrar resultados');
    return 'No hay diagnóstico guardado';
  }
}

// Ejecutar inmediatamente
fixEmptyTokenSquare();
