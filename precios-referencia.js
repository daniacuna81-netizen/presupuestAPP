/**
 * =====================================================================
 * PRESUPUESTAPP — BASE DE PRECIOS UNITARIOS DE REFERENCIA (ARS)
 * =====================================================================
 * Fecha de última actualización: 27 de Noviembre de 2026
 * Versión de tarifas: 2026.11
 * Moneda: Pesos Argentinos (ARS)
 *
 * CÓMO ACTUALIZAR PRECIOS EN ESTE ARCHIVO:
 * 1. Busca el rubro ("electricidad", "paredes", "plomeria", "pintura").
 * 2. Edita los valores de:
 *      precio_material: costo de compra del insumo/unidad
 *      precio_mano_obra: valor de mano de obra de instalación/aplicación
 * 3. Guarda el archivo. PresupuestAPP cargará automáticamente los nuevos
 *    valores al iniciar o recargar la aplicación.
 * =====================================================================
 */

window.PRECIOS_REFERENCIA_ARS = {
  "metadata": {
    "version": "2026.11",
    "fecha_actualizacion": "27 de Noviembre de 2026",
    "pais": "Argentina (ARS)",
    "descripcion": "Base de Precios Unitarios de Referencia para Obras, Instalaciones y Terminaciones. Valores de mercado vigentes sin distorsiones en unidades sueltas o metros/kilos fraccionados."
  },
  "electricidad": {
    "nombre_rubro": "Instalación Eléctrica Integral",
    "items": {
      "elec_caja_octogonal": {
        "nombre": "Caja octogonal de techo (chapa / PVC ignífugo)",
        "unidad": "u",
        "precio_material": 1800,
        "precio_mano_obra": 4500,
        "categoria": "cajas_canalizaciones"
      },
      "elec_caja_5x10": {
        "nombre": "Caja rectangular 5x10 embutir (chapa / PVC)",
        "unidad": "u",
        "precio_material": 1600,
        "precio_mano_obra": 4000,
        "categoria": "cajas_canalizaciones"
      },
      "elec_cano_corrugado": {
        "nombre": "Caño corrugado blanco ignífugo 3/4\" (m)",
        "unidad": "m",
        "precio_material": 850,
        "precio_mano_obra": 1800,
        "categoria": "cajas_canalizaciones"
      },
      "elec_cano_rigido_pvc": {
        "nombre": "Caño rígido PVC pesado 20mm/25mm (m)",
        "unidad": "m",
        "precio_material": 1600,
        "precio_mano_obra": 2600,
        "categoria": "cajas_canalizaciones"
      },
      "elec_tablero_ppal": {
        "nombre": "Tablero principal embutir/sobrepuesto (4 a 8 módulos)",
        "unidad": "u",
        "precio_material": 24000,
        "precio_mano_obra": 28000,
        "categoria": "cajas_canalizaciones"
      },
      "elec_tablero_sec": {
        "nombre": "Tablero secundario distribución (hasta 16 módulos)",
        "unidad": "u",
        "precio_material": 32000,
        "precio_mano_obra": 38000,
        "categoria": "cajas_canalizaciones"
      },
      "elec_cable_1_5": {
        "nombre": "Cable unipolar normalizado 1.5mm² (m)",
        "unidad": "m",
        "precio_material": 580,
        "precio_mano_obra": 900,
        "categoria": "cableado"
      },
      "elec_cable_2_5": {
        "nombre": "Cable unipolar normalizado 2.5mm² (m)",
        "unidad": "m",
        "precio_material": 850,
        "precio_mano_obra": 1100,
        "categoria": "cableado"
      },
      "elec_cable_4": {
        "nombre": "Cable unipolar normalizado 4.0mm² (m)",
        "unidad": "m",
        "precio_material": 1350,
        "precio_mano_obra": 1400,
        "categoria": "cableado"
      },
      "elec_cable_tierra": {
        "nombre": "Cable de tierra verde/amarillo 2.5mm² (m)",
        "unidad": "m",
        "precio_material": 880,
        "precio_mano_obra": 1000,
        "categoria": "cableado"
      },
      "elec_mod_interruptor": {
        "nombre": "Módulo interruptor / tecla unipolar 10A con bastidor",
        "unidad": "u",
        "precio_material": 3400,
        "precio_mano_obra": 4500,
        "categoria": "modulos_aparamenta"
      },
      "elec_mod_toma_10a": {
        "nombre": "Módulo toma corriente doble o simple 10A con bastidor",
        "unidad": "u",
        "precio_material": 3800,
        "precio_mano_obra": 4800,
        "categoria": "modulos_aparamenta"
      },
      "elec_mod_toma_20a": {
        "nombre": "Módulo toma 20A reforzado (aire acondicionado / hornos)",
        "unidad": "u",
        "precio_material": 5600,
        "precio_mano_obra": 5800,
        "categoria": "modulos_aparamenta"
      },
      "elec_termica": {
        "nombre": "Termomagnética bipolar 16A / 20A / 25A curva C",
        "unidad": "u",
        "precio_material": 14500,
        "precio_mano_obra": 9500,
        "categoria": "modulos_aparamenta"
      },
      "elec_disyuntor": {
        "nombre": "Disyuntor diferencial bipolar 40A 30mA (Sica/Schneider)",
        "unidad": "u",
        "precio_material": 42000,
        "precio_mano_obra": 16000,
        "categoria": "modulos_aparamenta"
      },
      "elec_jabalina": {
        "nombre": "Jabalina cobreada 1.5m 1/2\" con tomacable y caja inspección",
        "unidad": "u",
        "precio_material": 22000,
        "precio_mano_obra": 22000,
        "categoria": "accesorios_varios"
      },
      "elec_cinta_aisladora": {
        "nombre": "Cinta aisladora PVC ignífuga 20m (Tacsa/3M)",
        "unidad": "u",
        "precio_material": 1900,
        "precio_mano_obra": 0,
        "categoria": "accesorios_varios"
      },
      "elec_bastidores_tapas": {
        "nombre": "Bastidores y tapas para 3 módulos (línea estándar)",
        "unidad": "u",
        "precio_material": 2400,
        "precio_mano_obra": 1500,
        "categoria": "accesorios_varios"
      },
      "elec_grampas": {
        "nombre": "Abrazaderas / Grampas fijación cañería (pack 10u)",
        "unidad": "u",
        "precio_material": 2800,
        "precio_mano_obra": 2200,
        "categoria": "accesorios_varios"
      }
    }
  },
  "paredes": {
    "nombre_rubro": "Paredes, Albañilería y Drywall",
    "items": {
      "par_placa_std": {
        "nombre": "Placa de yeso estándar 12.5mm (1.20 x 2.40m = 2.88m²)",
        "unidad": "u",
        "precio_material": 14800,
        "precio_mano_obra": 9500,
        "categoria": "estructura_placas"
      },
      "par_placa_rh": {
        "nombre": "Placa de yeso resistente a humedad RH verde 12.5mm",
        "unidad": "u",
        "precio_material": 19500,
        "precio_mano_obra": 11000,
        "categoria": "estructura_placas"
      },
      "par_montante_70": {
        "nombre": "Perfil Montante 70mm x 2.60m chapa galvanizada",
        "unidad": "u",
        "precio_material": 4200,
        "precio_mano_obra": 3200,
        "categoria": "estructura_placas"
      },
      "par_solera_70": {
        "nombre": "Perfil Solera 70mm x 2.60m chapa galvanizada",
        "unidad": "u",
        "precio_material": 3800,
        "precio_mano_obra": 2900,
        "categoria": "estructura_placas"
      },
      "par_perfil_omega": {
        "nombre": "Perfil Omega galvanizado para cielorraso / revestimiento",
        "unidad": "u",
        "precio_material": 3200,
        "precio_mano_obra": 2500,
        "categoria": "estructura_placas"
      },
      "par_tornillos_t1": {
        "nombre": "Bolsa de tornillos T1 punta aguja/mecha (100u)",
        "unidad": "u",
        "precio_material": 3600,
        "precio_mano_obra": 1500,
        "categoria": "fijacion_acabado"
      },
      "par_tornillos_t2": {
        "nombre": "Bolsa de tornillos T2 para placas yeso (100u)",
        "unidad": "u",
        "precio_material": 4200,
        "precio_mano_obra": 1800,
        "categoria": "fijacion_acabado"
      },
      "par_cinta_papel": {
        "nombre": "Cinta de papel microperforada para juntas (m)",
        "unidad": "m",
        "precio_material": 280,
        "precio_mano_obra": 650,
        "categoria": "fijacion_acabado"
      },
      "par_masilla_kg": {
        "nombre": "Masilla para juntas drywall lista para usar (kg)",
        "unidad": "kg",
        "precio_material": 1850,
        "precio_mano_obra": 2200,
        "categoria": "fijacion_acabado"
      },
      "par_lana_vidrio": {
        "nombre": "Lana de vidrio aislante acústico/térmico 50mm (m²)",
        "unidad": "m²",
        "precio_material": 4800,
        "precio_mano_obra": 3200,
        "categoria": "fijacion_acabado"
      },
      "par_ladrillo_hueco": {
        "nombre": "Ladrillo cerámico hueco 12x18x33 (u)",
        "unidad": "u",
        "precio_material": 850,
        "precio_mano_obra": 1200,
        "categoria": "mamposteria_tradicional"
      },
      "par_ladrillo_comun": {
        "nombre": "Ladrillo común macizo de obra (u)",
        "unidad": "u",
        "precio_material": 420,
        "precio_mano_obra": 680,
        "categoria": "mamposteria_tradicional"
      },
      "par_cemento_50kg": {
        "nombre": "Cemento Portland bolsa 50kg (Loma Negra / Holcim)",
        "unidad": "u",
        "precio_material": 13500,
        "precio_mano_obra": 7500,
        "categoria": "mamposteria_tradicional"
      },
      "par_cal_bolsa": {
        "nombre": "Cal aérea / hidratada bolsa 25kg",
        "unidad": "u",
        "precio_material": 6800,
        "precio_mano_obra": 4200,
        "categoria": "mamposteria_tradicional"
      },
      "par_arena_m3": {
        "nombre": "Arena gruesa de río limpia (m³)",
        "unidad": "m³",
        "precio_material": 32000,
        "precio_mano_obra": 18000,
        "categoria": "mamposteria_tradicional"
      },
      "par_hierro_6_8": {
        "nombre": "Hierro nervado ADN 420 del 8 (barra 12m)",
        "unidad": "u",
        "precio_material": 12800,
        "precio_mano_obra": 7500,
        "categoria": "mamposteria_tradicional"
      }
    }
  },
  "plomeria": {
    "nombre_rubro": "Plomería, Instalación Sanitaria y Grifería",
    "items": {
      "plo_termo_20": {
        "nombre": "Caño termofusión PN20 20mm (1/2\") agua fría/caliente (m)",
        "unidad": "m",
        "precio_material": 3900,
        "precio_mano_obra": 4800,
        "categoria": "canerias_conexiones"
      },
      "plo_termo_25": {
        "nombre": "Caño termofusión PN20 25mm (3/4\") agua fría/caliente (m)",
        "unidad": "m",
        "precio_material": 5200,
        "precio_mano_obra": 5800,
        "categoria": "canerias_conexiones"
      },
      "plo_codo_90": {
        "nombre": "Codo 90° termofusión 20mm / 25mm (u)",
        "unidad": "u",
        "precio_material": 1200,
        "precio_mano_obra": 2200,
        "categoria": "canerias_conexiones"
      },
      "plo_cupla_te": {
        "nombre": "Cuplas / Tée termofusión 20mm / 25mm (u)",
        "unidad": "u",
        "precio_material": 1500,
        "precio_mano_obra": 2400,
        "categoria": "canerias_conexiones"
      },
      "plo_llave_paso": {
        "nombre": "Llave de paso esférica con campana cromada 20mm/25mm (u)",
        "unidad": "u",
        "precio_material": 14500,
        "precio_mano_obra": 9800,
        "categoria": "canerias_conexiones"
      },
      "plo_desague_40": {
        "nombre": "Caño desagüe cloacal/pluvial 40mm / 50mm con junta O-Ring (m)",
        "unidad": "m",
        "precio_material": 4200,
        "precio_mano_obra": 4500,
        "categoria": "desagues_cloaca"
      },
      "plo_desague_110": {
        "nombre": "Caño desagüe cloacal reforzado 110mm x metro (m)",
        "unidad": "m",
        "precio_material": 9800,
        "precio_mano_obra": 8500,
        "categoria": "desagues_cloaca"
      },
      "plo_pileta_patio": {
        "nombre": "Pileta de patio sifonada 10x10 con rejilla acero inoxidable (u)",
        "unidad": "u",
        "precio_material": 12500,
        "precio_mano_obra": 14000,
        "categoria": "desagues_cloaca"
      },
      "plo_kit_inodoro_bidet": {
        "nombre": "Kit instalación inodoro y bidet (junta cera, fuelles, fijaciones)",
        "unidad": "u",
        "precio_material": 26000,
        "precio_mano_obra": 34000,
        "categoria": "artefactos_griferia"
      },
      "plo_kit_vanitory": {
        "nombre": "Kit instalación vanitory / lavatorio con desagüe corrugado y sifón",
        "unidad": "u",
        "precio_material": 18500,
        "precio_mano_obra": 26000,
        "categoria": "artefactos_griferia"
      },
      "plo_griferia_mono": {
        "nombre": "Grifería monocomando cocina o baño (línea estándar cromada)",
        "unidad": "u",
        "precio_material": 38000,
        "precio_mano_obra": 22000,
        "categoria": "artefactos_griferia"
      },
      "plo_flexible_metal": {
        "nombre": "Flexible mallado acero inoxidable 1/2\" x 40cm (u)",
        "unidad": "u",
        "precio_material": 4800,
        "precio_mano_obra": 3200,
        "categoria": "artefactos_griferia"
      }
    }
  },
  "pintura": {
    "nombre_rubro": "Pintura y Preparación de Muros",
    "items": {
      "pin_latex_int_4l": {
        "nombre": "Pintura Látex Interior Lavable 4L (Alba / Sherwin / Tersuave)",
        "unidad": "u",
        "precio_material": 18500,
        "precio_mano_obra": 16000,
        "categoria": "materiales_aplicacion"
      },
      "pin_latex_int_10l": {
        "nombre": "Pintura Látex Interior Lavable 10L",
        "unidad": "u",
        "precio_material": 39000,
        "precio_mano_obra": 34000,
        "categoria": "materiales_aplicacion"
      },
      "pin_latex_int_20l": {
        "nombre": "Pintura Látex Interior Lavable 20L (blanco mate)",
        "unidad": "u",
        "precio_material": 68000,
        "precio_mano_obra": 58000,
        "categoria": "materiales_aplicacion"
      },
      "pin_latex_ext_20l": {
        "nombre": "Pintura Látex Exterior Impermeabilizante Frentes 20L",
        "unidad": "u",
        "precio_material": 84000,
        "precio_mano_obra": 68000,
        "categoria": "materiales_aplicacion"
      },
      "pin_sellador_1l": {
        "nombre": "Sellador Fijador al agua concentrado 1L (rinde 4L diluido)",
        "unidad": "u",
        "precio_material": 7500,
        "precio_mano_obra": 6000,
        "categoria": "materiales_aplicacion"
      },
      "pin_enduido_kg": {
        "nombre": "Enduido plástico interior listo para aplicar (kg)",
        "unidad": "kg",
        "precio_material": 2200,
        "precio_mano_obra": 2800,
        "categoria": "materiales_aplicacion"
      },
      "pin_rodillo_22": {
        "nombre": "Rodillo antigota profesional pelo intermedio 22cm (u)",
        "unidad": "u",
        "precio_material": 6800,
        "precio_mano_obra": 0,
        "categoria": "herramientas_insumos"
      },
      "pin_pincel_2": {
        "nombre": "Pincel / Brocha virola 2\" cerda pura (u)",
        "unidad": "u",
        "precio_material": 4200,
        "precio_mano_obra": 0,
        "categoria": "herramientas_insumos"
      },
      "pin_cinta_enmascarar": {
        "nombre": "Cinta de enmascarar azul/dorada pintor 24mm (m)",
        "unidad": "m",
        "precio_material": 240,
        "precio_mano_obra": 300,
        "categoria": "herramientas_insumos"
      },
      "pin_lija_pliegos": {
        "nombre": "Lija antiempaste madera/pared pliegos (pack 5u)",
        "unidad": "u",
        "precio_material": 2500,
        "precio_mano_obra": 1800,
        "categoria": "herramientas_insumos"
      },
      "pin_aguaras": {
        "nombre": "Aguarrás mineral desodorizado 1L (u)",
        "unidad": "u",
        "precio_material": 5200,
        "precio_mano_obra": 0,
        "categoria": "herramientas_insumos"
      }
    }
  }
};

// Helper global para consultar precio por ID
window.obtenerPrecioReferencia = function(itemId) {
  const cats = window.PRECIOS_REFERENCIA_ARS;
  if (!cats) return null;
  for (const catKey of ['electricidad', 'paredes', 'plomeria', 'pintura']) {
    if (cats[catKey] && cats[catKey].items && cats[catKey].items[itemId]) {
      return cats[catKey].items[itemId];
    }
  }
  return null;
};
