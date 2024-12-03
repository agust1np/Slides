---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Implementación de Chatbots en la Industria Hotelera
drawings:
  persist: false
title: Implementación de Chatbots en la Industria Hotelera
mdc: true
css: unocss
base: /Slides/
icons: ['material-symbols', 'carbon', 'mdi']
---

# Implementación de Chatbots en la Industria Hotelera
 
**Fecha:** [3 Dec/2024]

---
layout: default
---

# Tipos de Chatbots

<div class="text-center mb-4">
  Los chatbots pueden clasificarse en dos tipos principales: los basados en reglas, que siguen flujos predefinidos y son ideales para tareas estructuradas, y los impulsados por IA, que pueden mantener conversaciones más naturales y adaptativas.
</div>

<div class="grid grid-cols-2 gap-4">
  <div class="space-y-2">
    <h3 class="font-bold text-blue-700">Chatbots Basados en Reglas</h3>
    <ul class="space-y-1">
      <li class="flex items-center gap-1">
        <mdi-check class="text-blue-500" /> Respuestas predefinidas
      </li>
      <li class="flex items-center gap-1">
        <mdi-check class="text-blue-500" /> Flujos estructurados
      </li>
      <li class="flex items-center gap-1">
        <mdi-check class="text-blue-500" /> Implementación simple
      </li>
    </ul>
  </div>

  <div class="space-y-2">
    <h3 class="font-bold text-purple-700">Chatbots con IA (LLMs)</h3>
    <ul class="space-y-1">
      <li class="flex items-center gap-1">
        <mdi-check class="text-purple-500" /> Comprensión del lenguaje natural
      </li>
      <li class="flex items-center gap-1">
        <mdi-check class="text-purple-500" /> Respuestas contextuales
      </li>
      <li class="flex items-center gap-1">
        <mdi-check class="text-purple-500" /> Aprendizaje continuo
      </li>
    </ul>
  </div>
</div>

---
layout: center
class: "text-center"
---

<h1 class="mb-4">Comparación Visual de Chatbots</h1>

<div class="w-3/5 mx-auto">
  <img src="/Rule_based_chatbots_vs_AI_powered_chatbots_1024x680_0f8c351032.jpg" alt="Comparación de Tipos de Chatbots" class="rounded-lg shadow-lg mb-4" style="max-height: 50vh;" />

  <p class="text-sm text-gray-600 px-4 mb-4">
    La imagen muestra cómo un chatbot basado en reglas (izquierda) maneja una consulta de reembolso de manera estructurada, mientras que un chatbot con IA (derecha) puede entender y responder de forma más natural y contextual.
  </p>
</div>

---
layout: default
---

# Análisis del Problema en la Industria Hotelera

- **Sobrecarga en Canales de Atención**
  - Alto volumen de consultas en teléfonos operativos.
  - Impacto en eficiencia operativa y satisfacción del cliente.
- **Consultas Repetitivas y Automatizables**
  - *"El 70% de las consultas en hoteles son repetitivas y fácilmente automatizables."*
- **Necesidad de Atención 24/7**
  - Expectativas de respuestas inmediatas en cualquier momento.

---
layout: default
---

# Comparación de Soluciones

<div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criterio</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sin Código (No-Code)</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Con Código (Custom)</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Personalización</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-orange-600">Limitada</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">Total</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mantenimiento</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">Simple</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-orange-600">Requiere equipo técnico</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Integraciones</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-orange-600">Predefinidas</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">Sin limitaciones</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Escalabilidad</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-orange-600">Limitada</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">Alta</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="bg-blue-50 p-4 rounded-lg">
    <h3 class="font-bold text-blue-700 mb-2">Sin Código</h3>
    <p class="text-sm">
      Plataformas que permiten implementar chatbots mediante interfaces visuales y configuraciones predefinidas. Ideal para necesidades básicas y presupuestos limitados.
    </p>
  </div>

  <div class="bg-green-50 p-4 rounded-lg">
    <h3 class="font-bold text-green-700 mb-2">Con Código</h3>
    <p class="text-sm">
      Desarrollo personalizado que puede incluir tecnologías avanzadas como LLMs. Permite total control sobre funcionalidades e integraciones.
    </p>
  </div>
</div>

---
layout: default
---

# Datos Dinámicos en Hotelería

<div class="grid grid-cols-2 gap-8">

<div class="space-y-6">
  <div class="bg-blue-50 p-4 rounded-lg">
    <h3 class="font-bold text-blue-700 mb-2">Tipos de Datos Dinámicos</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2">
        <carbon-hotel class="text-blue-500" /> Disponibilidad de habitaciones
      </li>
      <li class="flex items-center gap-2">
        <carbon-money class="text-blue-500" /> Tarifas y promociones
      </li>
      <li class="flex items-center gap-2">
        <carbon-event class="text-blue-500" /> Eventos y actividades
      </li>
    </ul>
  </div>

  <div class="bg-green-50 p-4 rounded-lg">
    <h3 class="font-bold text-green-700 mb-2">Soluciones de Integración</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2">
        <carbon-api class="text-green-500" /> APIs en tiempo real
      </li>
      <li class="flex items-center gap-2">
        <carbon-data-base class="text-green-500" /> Sincronización automática
      </li>
      <li class="flex items-center gap-2">
        <carbon-notification class="text-green-500" /> Alertas proactivas
      </li>
    </ul>
  </div>
</div>

<div class="space-y-6">
  <div class="bg-purple-50 p-4 rounded-lg">
    <h3 class="font-bold text-purple-700 mb-2">Sistemas a Integrar</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2">
        <material-symbols-computer class="text-purple-500" /> PMS (Property Management System)
      </li>
      <li class="flex items-center gap-2">
        <carbon-calendar class="text-purple-500" /> CRS (Central Reservations System)
      </li>
      <li class="flex items-center gap-2">
        <carbon-user-profile class="text-purple-500" /> CRM (Customer Relationship Management)
      </li>
    </ul>
  </div>

  <div class="bg-orange-50 p-4 rounded-lg">
    <h3 class="font-bold text-orange-700 mb-2">Consideraciones Técnicas</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2">
        <carbon-time class="text-orange-500" /> Latencia de datos
      </li>
      <li class="flex items-center gap-2">
        <carbon-security class="text-orange-500" /> Seguridad y privacidad
      </li>
      <li class="flex items-center gap-2">
        <carbon-warning class="text-orange-500" /> Manejo de errores
      </li>
    </ul>
  </div>
</div>

</div>

---
layout: default
---

# Análisis de Escenarios

<div class="grid grid-cols-3 gap-6">

<div class="bg-blue-50 p-4 rounded-lg">
  <h3 class="font-bold text-blue-700 mb-4">Hotel Urbano</h3>
  <div class="space-y-4">
    <div class="bg-white p-3 rounded shadow-sm">
      <h4 class="font-bold text-gray-700">Desafíos</h4>
      <ul class="mt-2 space-y-1 text-sm">
        <li>• Alta rotación</li>
        <li>• Datos variables</li>
        <li>• Clientes multilingües</li>
      </ul>
    </div>
    <div class="bg-blue-100 p-3 rounded">
      <h4 class="font-bold text-blue-700">Recomendación</h4>
      <p class="mt-2 text-sm">Tecnologías Avanzadas con LLMs</p>
    </div>
  </div>
</div>

<div class="bg-green-50 p-4 rounded-lg">
  <h3 class="font-bold text-green-700 mb-4">Resort de Temporada</h3>
  <div class="space-y-4">
    <div class="bg-white p-3 rounded shadow-sm">
      <h4 class="font-bold text-gray-700">Desafíos</h4>
      <ul class="mt-2 space-y-1 text-sm">
        <li>• Eventos especiales</li>
        <li>• Promociones estacionales</li>
        <li>• Actividades diversas</li>
      </ul>
    </div>
    <div class="bg-green-100 p-3 rounded">
      <h4 class="font-bold text-green-700">Recomendación</h4>
      <p class="mt-2 text-sm">Solución Personalizada</p>
    </div>
  </div>
</div>

<div class="bg-purple-50 p-4 rounded-lg">
  <h3 class="font-bold text-purple-700 mb-4">Cadena Mediana</h3>
  <div class="space-y-4">
    <div class="bg-white p-3 rounded shadow-sm">
      <h4 class="font-bold text-gray-700">Desafíos</h4>
      <ul class="mt-2 space-y-1 text-sm">
        <li>• Optimización de recursos</li>
        <li>• Presupuesto moderado</li>
        <li>• Implementación rápida</li>
      </ul>
    </div>
    <div class="bg-purple-100 p-3 rounded">
      <h4 class="font-bold text-purple-700">Recomendación</h4>
      <p class="mt-2 text-sm">Plataforma Preconfigurada</p>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# Recomendaciones Basadas en Necesidades

- **Respuesta Rápida y Actualizaciones Sencillas**
  - **Opción:** Plataformas Preconfiguradas
  - **Ideal para:** Hoteles que necesitan una solución inmediata y económica.

- **Integración Profunda y Personalización**
  - **Opción:** Soluciones Personalizadas
  - **Ideal para:** Hoteles que requieren integraciones complejas y flujos personalizados.

- **Experiencia Superior y Manejo de Consultas Complejas**
  - **Opción:** Tecnologías Avanzadas con LLMs
  - **Ideal para:** Hoteles que buscan innovación y diferenciación tecnológica.

---
layout: default
---

# Plan de Implementación

<div class="grid grid-cols-2 gap-8">

<div class="space-y-6">
  <div class="bg-blue-50 p-4 rounded-lg">
    <h3 class="font-bold text-blue-700 mb-2">Fase 1: Análisis</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2">
        <carbon-user-multiple class="text-blue-500" /> Reunión con stakeholders
      </li>
      <li class="flex items-center gap-2">
        <material-symbols-target class="text-orange-500" /> Objetivos claros
      </li>
      <li class="flex items-center gap-2">
        <carbon-chart-line class="text-blue-500" /> Establecimiento de KPIs
      </li>
    </ul>
  </div>

  <div class="bg-green-50 p-4 rounded-lg">
    <h3 class="font-bold text-green-700 mb-2">Fase 2: Desarrollo</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2">
        <carbon-development class="text-green-500" /> Configuración y desarrollo
      </li>
      <li class="flex items-center gap-2">
        <carbon-integration class="text-green-500" /> Integraciones con sistemas
      </li>
      <li class="flex items-center gap-2">
        <material-symbols-science class="text-orange-500" /> Pruebas exhaustivas
      </li>
    </ul>
  </div>
</div>

<div class="space-y-6">
  <div class="bg-purple-50 p-4 rounded-lg">
    <h3 class="font-bold text-purple-700 mb-2">Fase 3: Lanzamiento</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2">
        <carbon-deploy class="text-purple-500" /> Despliegue en canales seleccionados
      </li>
      <li class="flex items-center gap-2">
        <carbon-user-certification class="text-purple-500" /> Capacitación al personal
      </li>
      <li class="flex items-center gap-2">
        <material-symbols-monitoring class="text-orange-500" /> Monitoreo continuo
      </li>
    </ul>
  </div>

  <div class="bg-orange-50 p-4 rounded-lg">
    <h3 class="font-bold text-orange-700 mb-2">Fase 4: Optimización</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2">
        <carbon-analytics class="text-orange-500" /> Análisis de interacciones
      </li>
      <li class="flex items-center gap-2">
        <material-symbols:trending-up class="text-orange-500" /> Mejoras continuas
      </li>
      <li class="flex items-center gap-2">
        <carbon-growth class="text-orange-500" /> Escalamiento y nuevas funciones
      </li>
    </ul>
  </div>
</div>

</div>

---
layout: default
---


# Conclusión y Próximos Pasos

- **Resumen de Puntos Clave**
  - Opciones tecnológicas y sus aplicaciones específicas.
  - Importancia de elegir la solución adecuada para sus necesidades.
- **Próximos Pasos**
  - Definir requerimientos específicos del hotel.
  - Seleccionar la solución más adecuada.
  - Establecer un cronograma de implementación.
