'use client';

import { useState } from 'react';

const faqItems = [
  { 
    question: "¿Qué es Obamacare y quién califica?",
    answer: "Obamacare, oficialmente conocido como la Ley de Cuidado de Salud Asequible (ACA), es un programa de seguro de salud que brinda cobertura a millones de estadounidenses. Calificas si eres ciudadano estadounidense o residente legal, no estás encarcelado y no estás cubierto por Medicare. No hay límite de edad, y las condiciones preexistentes no afectan tu elegibilidad. Puedes inscribirte durante el período anual de inscripción abierta o durante un período de inscripción especial si experimentas un evento de vida calificante como perder la cobertura basada en el trabajo, casarte o tener un bebé."
  },
  { 
    question: "¿Cuándo es la inscripción abierta para el seguro de salud?",
    answer: "La inscripción abierta para el seguro de salud Obamacare generalmente se extiende del 1 de noviembre al 15 de enero de cada año. Durante este período, cualquiera puede inscribirse o cambiar su plan de seguro de salud. Si pierdes la inscripción abierta, aún puedes inscribirte si calificas para un Período de Inscripción Especial debido a un evento de vida calificante como perder la cobertura de salud, mudarte, casarte, tener un bebé o experimentar otros cambios significativos en la vida."
  },
  { 
    question: "¿Puedo cambiar mi plan durante el año?",
    answer: "Generalmente, solo puedes cambiar tu plan Obamacare durante el período anual de inscripción abierta o durante un Período de Inscripción Especial si experimentas un evento de vida calificante. Los eventos calificantes incluyen perder otra cobertura de salud, mudarte a una nueva área, cambios en el tamaño del hogar (matrimonio, divorcio, nacimiento, adopción) o cambios en los ingresos que afecten tu elegibilidad para subsidios. Fuera de estos períodos, generalmente no puedes cambiar de planes a menos que califiques para una excepción."
  },
  { 
    question: "¿Qué son los beneficios de salud esenciales?",
    answer: "Los beneficios de salud esenciales son un conjunto de 10 categorías de servicios que todos los planes Obamacare deben cubrir: 1) Servicios ambulatorios para pacientes, 2) Servicios de emergencia, 3) Hospitalización, 4) Atención materna y neonatal, 5) Servicios de salud mental y trastornos por uso de sustancias, 6) Medicamentos recetados, 7) Servicios y dispositivos de rehabilitación y habilitación, 8) Servicios de laboratorio, 9) Servicios preventivos y de bienestar y manejo de enfermedades crónicas, y 10) Servicios pediátricos, incluida atención oral y visual. Estos beneficios garantizan una cobertura integral independientemente del nivel de plan que elijas."
  },
  { 
    question: "¿Cuánto cuesta el seguro de salud Obamacare?",
    answer: "El costo del seguro de salud Obamacare varía según varios factores, incluida tu edad, ubicación, tamaño del hogar, ingresos y el nivel de plan que selecciones. Las primas pueden oscilar entre $0 por mes (con subsidios) y varios cientos de dólares por mes. La mayoría de las personas califican para créditos fiscales de prima que reducen sus costos mensuales. Además, los planes se categorizan en cuatro niveles de metal (Bronce, Plata, Oro, Platino) con diferentes estructuras de primas y costos de bolsillo. Usa nuestra herramienta de cotización para obtener precios personalizados según tu situación específica."
  },
  { 
    question: "¿Soy elegible para subsidios o créditos fiscales?",
    answer: "Puedes ser elegible para créditos fiscales de prima (subsidios) si los ingresos de tu hogar están entre el 100% y el 400% del Nivel de Pobreza Federal (FPL). Para 2024, esto generalmente significa ingresos entre $14,580 y $58,320 para un individuo, o entre $30,000 y $120,000 para una familia de cuatro. Estos subsidios pueden reducir significativamente tus costos de prima mensuales y, en algunos casos, hacer que la cobertura sea completamente gratuita. También puedes calificar para reducciones de participación en costos si eliges un plan Plata y tus ingresos están entre el 100% y el 250% del FPL, lo que reduce tus deducibles y costos de bolsillo."
  },
  { 
    question: "¿Cuál es la diferencia entre los planes Bronce, Plata, Oro y Platino?",
    answer: "Los cuatro niveles de metal representan diferentes estructuras de participación en costos: Los planes Bronce tienen las primas mensuales más bajas pero los costos de bolsillo más altos (típicamente cubren el 60% de los costos), lo que los hace ideales para aquellos que quieren cobertura básica y no esperan muchos gastos médicos. Los planes Plata tienen primas y costos de bolsillo moderados (cubren el 70% de los costos) y son requeridos para reducciones de participación en costos. Los planes Oro tienen primas más altas pero costos de bolsillo más bajos (cubren el 80% de los costos), adecuados para aquellos que esperan atención médica regular. Los planes Platino tienen las primas más altas pero los costos de bolsillo más bajos (cubren el 90% de los costos), mejores para aquellos con necesidades médicas frecuentes. Todos los niveles cubren los mismos beneficios de salud esenciales."
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg mb-3 shadow-sm bg-white hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            <span className="text-[#4A4A4A] text-base font-normal pr-4">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div 
              className="px-6 pb-4 text-gray-600 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

