import type { DaySchedule } from "@/types/schedule";

export const scheduleData: DaySchedule[] = [
  {
    date: "19 Septiembre",
    dayName: "Viernes",
    tracks: [
      { id: 'auditorio_lacy', name: 'Auditorio Lacy', color: 'bg-blue-500' },
      { id: 'auditorio_2', name: 'Auditorio 2', color: 'bg-green-500' },
      { id: 'sala_3_1', name: 'Sala 3 (Planta 1)', color: 'bg-pink-500' },
      { id: 'sala_3', name: 'Sala 3 (Planta 2)', color: 'bg-purple-500' },
      { id: 'ludica', name: 'Sala Lúdica', color: 'bg-yellow-500' },
      { id: 'editorial', name: 'Sala 4', color: 'bg-orange-500' },
    ],
    timeSlots: [
      {
        time: "16:00 - 17:00",
        events: {
          auditorio_lacy: {
            title: "Inauguración oficial",
            speaker: "Comité organizador",
            description: "Bienvenida y presentación de la HispaCón 2025",
            duration: 30,
            type: "special"
          },
          sala_3: {
            title: "Audioficciones",
            speaker: "Participantes",
            description: "Descripcion",
            duration: 30,
            startTime: "16:30",
            type: "talk"
          },
          editorial: {
            title: "Tentacle Pulp",
            description: "Presentación Editorial",
            duration: 30,
            startTime: "16:30",
            type: "panel"
          },
        }
      },
      {
        time: "17:00 - 18:00",
        events: {
          auditorio_lacy: {
            title: "Nueva ola del teatro fantástico",
            speaker: "Participantes",
            description: "Descripción",
            duration: 60,
            type: "talk"
          },
          sala_3: [
            {
              title: "Videojuegos y libros",
              speaker: "Participantes",
              description: "Descripción",
              duration: 30,
              startTime: "17:00",
              type: "talk"
            },
            {
              title: "Ucronias Españita",
              speaker: "Participantes",
              description: "Descripción",
              duration: 30,
              startTime: "17:30",
              type: "talk"
            }
          ],
          editorial: [
            {
                title: "Libelum",
                description: "Presentación Editorial",
                duration: 30,
                startTime: "18:00",
                type: "panel"
            },
            {
                title: "Crononauta",
                description: "Presentación Editorial",
                duration: 30,
                startTime: "18:30",
                type: "panel"
            }
          ],
        }
      },
      {
        time: "18:00 - 19:00",
        events: {
          auditorio_lacy: {
            title: "Romantasy",
            speaker: "Participantes",
            description: "Descripción",
            duration: 60,
            type: "talk"
          },
          sala_3: {
            title: "Taller Stephen King",
            speaker: "Participantes",
            description: "Descripción",
            duration: 60,
            type: "workshop"
          },
          editorial: {
            title: "Autopublicados + Estelas de magia",
            speaker: "Participantes",
            description: "Descripción",
            duration: 90,
            type: "panel"
          },
        }
      },
      {
        time: "19:00 - 20:00",
        events: {
          auditorio_lacy: {
            title: "Terror en Femenino",
            speaker: "Participantes",
            description: "Descripción",
            duration: 60,
            type: "talk"
          },
          sala_3: [
            {
              title: "Concursos literarios",
              speaker: "Participantes",
              description: "Descripción",
              duration: 30,
              startTime: "19:00",
              type: "workshop"
            },
            {
              title: "Relato Tarot",
              speaker: "Participantes",
              description: "Descripción",
              duration: 30,
              startTime: "19:30",
              type: "workshop"
            }
          ],
          editorial: {
            title: "Aqui hay Dragonas",
            speaker: "Participantes",
            description: "Descripción",
            duration: 30,
            startTime: "19:30",
            type: "panel"
          },
        }
      },
    {
        time: "20:00 - 21:00",
        events: {
          auditorio_lacy: {
            title: "Maternidades Fantasticas",
            speaker: "Participantes",
            description: "Descripción",
            duration: 60,
            type: "talk"
          },
          sala_3: [
            {
              title: "Escribir a varias manos",
              speaker: "Participantes",
              description: "Descripción",
              duration: 30,
              startTime: "20:00",
              type: "workshop"
            },
            {
              title: "Fantasía musica 80",
              speaker: "Participantes",
              description: "Descripción",
              duration: 30,
              startTime: "20:30",
              type: "workshop"
            }
          ],
          editorial: [
            {
                title: "Sugaar",
                description: "Presentación Editorial",
                duration: 30,
                startTime: "20:00",
                type: "panel"
            },
            {
                title: "LES Editorial",
                description: "Presentación Editorial",
                duration: 30,
                startTime: "20:30",
                type: "panel"
            }
          ],
        }
      }
    ]
  },
  {
    date: "20 Septiembre", 
    dayName: "Sábado",
    tracks: [
      { id: 'auditorio_lacy', name: 'Auditorio Lacy', color: 'bg-blue-500' },
      { id: 'auditorio_2', name: 'Auditorio 2', color: 'bg-green-500' },
      { id: 'sala-2', name: 'Sala 2', color: 'bg-pink-500' },
      { id: 'sala-3', name: 'Sala 3', color: 'bg-purple-500' },
      { id: 'ludica', name: 'Sala Lúdica', color: 'bg-yellow-500' },
      { id: 'editorial', name: 'Sala 4', color: 'bg-orange-500' },
    ],
    timeSlots: [
      {
        time: "11:00",
        events: {
          auditorio_lacy: {
            title: "Conferencia magistral: IA y creatividad",
            speaker: "Dr. Elena Torrés",
            description: "El impacto de la inteligencia artificial en la literatura",
            duration: 60,
            type: "talk"
          },
          editorial: {
            title: "Presentación Nova SF",
            speaker: "Editorial Nova",
            description: "Nueva colección de ciencia ficción hard",
            duration: 45,
            type: "talk"
          },
          ludica: {
            title: "Demostración: Juegos del futuro",
            speaker: "Devir Iberia",
            description: "Las últimas novedades en juegos de mesa sci-fi",
            duration: 120,
            type: "special"
          },
        }
      },
      {
        time: "12:00",
        events: {
          auditorio_lacy: {
            title: "Mesa redonda: IA vs. Creatividad humana",
            speaker: "Panel de expertos",
            description: "Debate sobre el futuro de la creación literaria",
            duration: 90,
            type: "panel"
          },
          sala_3_1: {
            title: "Ilustración fantástica digital",
            speaker: "Ana Martín",
            description: "Técnicas avanzadas para crear portadas impactantes",
            duration: 120,
            type: "workshop"
          },
          editorial: {
            title: "Autopublicación inteligente",
            speaker: "Roberto Editor",
            description: "Estrategias modernas para autores independientes",
            duration: 75,
            type: "talk"
          }
        }
      },
      {
        time: "14:00",
        events: {
          auditorio_lacy: {
            title: "Pausa para almuerzo",
            description: "Descanso y networking informal",
            duration: 120,
            type: "break"
          },
          sala_3_1: {
            title: "Pausa para almuerzo",
            description: "Descanso",
            duration: 120,
            type: "break"
          },
          editorial: {
            title: "Pausa para almuerzo", 
            description: "Descanso",
            duration: 120,
            type: "break"
          }
        }
      },
      {
        time: "16:00",
        events: {
          auditorio_lacy: {
            title: "Gala Premios Ignotus 2025",
            speaker: "AEFCFT",
            description: "Ceremonia anual de entrega de premios",
            duration: 120,
            type: "special"
          },
          sala_3_1: {
            title: "Creación de personajes memorables",
            speaker: "Roberto Silva",
            description: "Psicología aplicada al personaje fantástico",
            duration: 90,
            type: "workshop"
          },
          editorial: {
            title: "Debate: Editorial vs. Autopublicación",
            speaker: "Debate moderado",
            description: "Pros y contras de cada modalidad de publicación",
            duration: 75,
            type: "panel"
          }
        }
      },
      {
        time: "18:00",
        events: {
          ludica: {
            title: "Sesión de firmas con premiados",
            speaker: "Ganadores Ignotus",
            description: "Oportunidad única de conocer a los galardonados",
            duration: 120,
            type: "special"
          },
          editorial: {
            title: "Final del torneo de juegos",
            speaker: "Organizadores",
            description: "Rondas finales y entrega de premios",
            duration: 90,
            type: "special"
          }
        }
      }
    ]
  },
  {
    date: "21 Septiembre",
    dayName: "Domingo", 
    tracks: [
      { id: 'auditorio_lacy', name: 'Auditorio Lacy', color: 'bg-blue-500' },
      { id: 'sala_3_1', name: 'Sala 2', color: 'bg-pink-500' },
      { id: 'editorial', name: 'Sala 4', color: 'bg-orange-500' },
      { id: 'ludica', name: 'Sala Lúdica', color: 'bg-yellow-500' }
    ],
    timeSlots: [
      {
        time: "11:00",
        events: {
          auditorio_lacy: {
            title: "Mesa redonda: Fantasy vs. Ciencia Ficción",
            speaker: "Panel de autores",
            description: "Debate sobre las diferencias y similitudes entre géneros",
            duration: 90,
            type: "panel"
          },
          sala_3_1: {
            title: "Masterclass: El relato corto fantástico",
            speaker: "Elena Fortún",
            description: "El arte del microrrelato en géneros fantásticos",
            duration: 120,
            type: "workshop"
          },
          editorial: {
            title: "Networking editorial final",
            speaker: "Editores y agentes",
            description: "Últimas oportunidades de contacto profesional",
            duration: 90,
            type: "special"
          },
          ludica: {
            title: "Última oportunidad - Feria editorial",
            speaker: "Expositores",
            description: "Últimas compras y ofertas especiales",
            duration: 150,
            type: "fair"
          }
        }
      },
      {
        time: "12:30",
        events: {
          auditorio_lacy: {
            title: "Clausura y despedida",
            speaker: "Comité organizador",
            description: "Cierre oficial de HispaCón 2025 y anuncio próxima edición",
            duration: 30,
            type: "special"
          }
        }
      }
    ]
  }
];
