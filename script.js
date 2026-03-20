// Web App Fino Services - CON DEBUG
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Calculadora')
    .setTitle('Fino Services - Comisiones')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ============================================
// CÁLCULO DE COMISIONES - CON VALORES INTERMEDIOS
// ============================================

function CALCULAR_COMISIONES(consumo) {
  // Asegurar que consumo es número
  consumo = Number(consumo);
  if (isNaN(consumo) || consumo < 0) consumo = 0;
  
  // 1. Galones = Consumo / 4
  const galones = consumo / 4;
  
  // 2. Rebates USD = Galones × 0.33
  const rebatesUSD = galones * 0.33;
  
  // 3. Fino Services (después de cliente 30%) = Rebates × 0.70
  const finoServicesUSD = rebatesUSD * 0.70;
  
  // 4. Team Comercial (30% de Fino Services) = Fino Services × 0.30
  const teamComercialUSD = finoServicesUSD * 0.30;
  
  // 5. PRODUCER MXN = (Team Comercial USD / 100) × 222
  const producerMXN = (teamComercialUSD / 100) * 222;
  
  // 6. Líder/Coordinador MXN = Producer / 2
  const liderMXN = producerMXN / 2;
  
  // 7. Líder de sede MXN = Líder / 2
  const sedeMXN = liderMXN / 2;
  
  // Resultados finales
  return {
    producer: producerMXN,
    lider: liderMXN,
    sede: sedeMXN,
    // Valores intermedios para debug
    debug: {
      galones: galones,
      rebatesUSD: rebatesUSD,
      finoServicesUSD: finoServicesUSD,
      teamComercialUSD: teamComercialUSD
    }
  };
}

// ============================================
// VALIDACIÓN DE CLAVES
// ============================================

function VALIDAR_CLAVE(rol, clave) {
  const CLAVES = {
    lider: 'LIDER2024',
    sede: 'SEDE2024'
  };
  
  if (rol === 'producer') return true;
  return CLAVES[rol] === clave;
}
