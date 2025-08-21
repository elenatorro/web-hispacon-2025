import type { DaySchedule } from "@/types/schedule";

export const scheduleData: DaySchedule[] = [
  {
    date: "19 Septiembre",
    dayName: "Viernes",
    tracks: [
      { id: 'auditorio_lacy', name: 'Auditorio Lacy', color: 'bg-blue-500' },
      // { id: 'auditorio_2', name: 'Auditorio 2', color: 'bg-green-500' },
      // { id: 'sala_3', name: 'Sala 3 (Planta 1)', color: 'bg-pink-500' },
      { id: 'sala_4', name: 'Sala 4 (Planta 2)', color: 'bg-purple-500' },
      // { id: 'ludica', name: 'Sala Lúdica', color: 'bg-yellow-500' },
      { id: 'editorial', name: 'Sala 5 - Presentaciones', color: 'bg-orange-500' },
    ],
    timeSlots: [
      {
        time: "16:30 - 17:00",
        events: {
          auditorio_lacy: {
            title: "Inauguración",
            speaker: "Comité organizador",
            description: "Bienvenida y presentación de la HispaCón 2025",
            duration: 30,
            startTime: "16:30",
            type: "special"
          },
          sala_4: {
            title: "Alicia tiene una tardis. Viajes y regeneraciones de Alicia en el País de las Maravillas en la cultura popular.",
            speaker: "Andrea Valeiras",
            description: "",
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
            speaker: "",
            description: "Mesa redonda",
            duration: 60,
            type: "talk"
          },
          sala_4: [
            {
              title: "Videojuegos y libros. Libros y videojuegos",
              speaker: "Darkor_LF",
              description: "",
              duration: 30,
              startTime: "17:00",
              type: "workshop"
            },
            {
              title: "Audioficciones de género fantástico",
              speaker: "",
              description: "David Fdez. Vaamonde (SonosSonoros), Elena Torró (Droids&Druids)",
              duration: 30,
              startTime: "17:30",
              type: "talk"
            }
          ],
          editorial: [
            {
                title: "Fénix Literario",
                description: "Presentación Editorial",
                duration: 30,
                startTime: "18:00",
                type: "panel"
            },
            {
                title: "Medhusa",
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
            title: "Queer in space",
            speaker: "Caryanna Reuven, Celia Corral-Vázquez",
            description: "",
            startTime: "18:00",
            duration: 60,
            type: "talk"
          },
          sala_4: {
            title: "Ride the Laughing",
            speaker: "Sergi Álvarez",
            description: "Taller para escribir humor",
            startTime: "18:00",
            duration: 60,
            type: "workshop"
          },
          editorial: {
            title: "Presentación Autopublicación",
            speaker: "",
            description: "",
            startTime: "18:00",
            duration: 90,
            type: "panel"
          },
        }
      },
      {
        time: "19:00 - 20:00",
        events: {
          auditorio_lacy: {
            title: "Más que Final Girls",
            speaker: "Mariló Álvarez, Celia Corral, JV Gachs, Aitziber Saldias, Katherine Vega",
            description: "",
            startTime: "19:00",
            duration: 60,
            type: "talk"
          },
          sala_4: [
            {
              title: "Cómo (intentar) ganar un concurso literario",
              speaker: "Alba Quintas",
              description: "",
              duration: 30,
              startTime: "19:00",
              type: "workshop"
            },
            {
              title: "Escribir un microrrelato usando el Tarot",
              speaker: "Mireia Pérez",
              description: "",
              duration: 30,
              startTime: "19:30",
              type: "workshop"
            }
          ],
          editorial: [{
            title: "Aqui hay Dragonas",
            speaker: "",
            description: "",
            duration: 30,
            startTime: "19:30",
            type: "panel"
          }]
        }
      },
    {
        time: "20:00 - 21:00",
        events: {
          auditorio_lacy: {
            title: "El bizarro en los tiempos del cólera",
            speaker: "",
            description: "",
            duration: 60,
            type: "talk"
          },
          sala_4: [
            {
              title: "Escribir a varias manos",
              speaker: "",
              description: "",
              duration: 30,
              startTime: "20:00",
              type: "workshop"
            },
            {
              title: "El género fantástico en la música de los 80: No es serio este cementerio",
              speaker: "David Fdez. Vahamonde",
              description: "",
              duration: 30,
              startTime: "20:30",
              type: "workshop"
            }
          ],
          editorial: [
            {
                title: "Sugaar Editorial",
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
      // { id: 'sala_3', name: 'Sala 3 (Planta 1)', color: 'bg-pink-500' },
      { id: 'sala_4', name: 'Sala 4 (Planta 2)', color: 'bg-purple-500' },
      // { id: 'ludica', name: 'Sala Lúdica', color: 'bg-yellow-500' },
      { id: 'editorial', name: 'Sala 5 - Presentaciones', color: 'bg-orange-500' },
    ],
    timeSlots: [
      {
        time: "10:00 - 11:00",
        events: {
          auditorio_lacy: {
            title: "Antibelicismo en la literatura fantástica",
            speaker: "Carla Campos, Gemma Solsona, Cristina Xifra",
            description: "Mesa antibélica: Pratchett, Leguin, Rodoreda y sus obras antibélicas",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "Cómo hacer ucronías en Españita",
            speaker: "Andrea Valeiras, Talita Isla, Javier Miró",
            description: "",
            duration: 60,
            type: "panel"
          },
          sala_4: {
            title: "Juegos y rol",
            speaker: "",
            description: "Toda la mañana",
            duration: 240,
            type: "workshop"
          },
          editorial: [{
            title: "Estelas de magia",
            startTime: "10:00",
            duration: 30,
            type: "panel"
          },{
            title: "Algar Editorial",
            startTime: "10:30",
            duration: 30,
            type: "panel"
          }]
        }
      },
      {
        time: "11:00 - 12:00",
        events: {
          auditorio_lacy: {
            title: "Narrar a través del cómic",
            speaker: "Marina Vidal, Ricard Efa, Sara Soler",
            description: "",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "Tiempos que fueron y que pudieron ser: género fantástico de inspiración histórica",
            speaker: "Isabel Pedrero, Beatriz Alcaná y Virginia Orive de la Rosa, Bruno Puelles, Africa Vázquez",
            startTime: "11:00",
            description: "",
            duration: 60,
            type: "panel"
          },
          sala_4: {
            title: "Juegos y rol",
            speaker: "",
            description: "Toda la mañana",
            duration: 240,
            type: "workshop"
          },
          editorial: [{
            title: "Apache Libros",
            startTime: "11:00",
            duration: 30,
            type: "panel"
          },{
            title: "Esqueleto Negro",
            startTime: "11:30",
            duration: 30,
            type: "panel"
          }]
        }
      },
      {
        time: "12:00 - 13:00",
        events: {
          auditorio_lacy: {
            title: "Hablando de Distopías con Stark Holborn",
            speaker: "Stark Holborn, Caryanna Reuven, Alba Quintas, Isabel del Río",
            description: "",
            startTime: "12:00",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "El humor en el género y el género en el humor",
            speaker: "Mónica Gutiérrez, Andrea Valeiras, Inés Galiano, Sergi Álvarez y Noemí Riesco",
            description: "",
            startTime: "12:00",
            duration: 60,
            type: "panel"
          },
          sala_4: {
            title: "Juegos y rol",
            speaker: "",
            description: "Toda la mañana",
            duration: 240,
            type: "workshop"
          },
          editorial: [{
            title: "Obscura Editorial",
            startTime: "12:00",
            duration: 30,
            type: "panel"
          },{
            title: "Editorial Numak",
            startTime: "12:30",
            duration: 30,
            type: "panel"
          }]
        }
      },
      {
        time: "13:00 - 14:00",
        events: {
          auditorio_lacy: {
            title: "Grimdark vs Hopepunk",
            speaker: "Ari Soler, Javier Miró, Carlos di Uriarte, Andrea Valeiras, Laura Maquilón, Ricard Efa",
            description: "",
            startTime: "13:00",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "Tendencias actuales del terror: del papel a lo audiovisual.",
            speaker: "Chris T.Nash, Cristina P. Amuedo, Gemma Solsona, Isabel del Río.",
            description: "",
            startTime: "13:00",
            duration: 60,
            type: "panel"
          },
          sala_4: {
            title: "Juegos y rol",
            speaker: "",
            description: "Toda la mañana",
            duration: 240,
            type: "workshop"
          },
          editorial: [{
            title: "Suseya Editorial",
            startTime: "13:00",
            duration: 30,
            type: "panel"
          }]
        }
      },
      {
        time: "14:00 - 16:00",
        events: {
        }
      },
      {
        time: "16:00 - 17:00",
        events: {
          auditorio_lacy: {
            title: "Escribir en formato breve: el mundo del relato.",
            speaker: "Autoras Anacronópete 2025: Gemma Solsona, Ana Saiz y Alba Quintas",
            description: "",
            startTime: "16:00",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "Consejos de escritura de Stephen King",
            speaker: "Susana Vallejo y Sergi Viciana",
            description: "",
            startTime: "16:00",
            duration: 60,
            type: "panel"
          },
          sala_4: {
            title: "Cluedo en vivo",
            speaker: "Bruno Puelles",
            description: "Actividad lúdica",
            startTime: "16:00",
            duration: 180,
            type: "workshop"
          },
          editorial: [{
            title: "La Biblioteca de Carfax",
            startTime: "16:00",
            duration: 30,
            type: "panel"
          }, {
            title: "Isphania",
            startTime: "16:30",
            duration: 30,
            type: "panel"
          }]
        }
      },
      {
        time: "17:00 - 18:00",
        events: {
          auditorio_lacy: {
            title: "Charlando con Shoujospain.",
            speaker: "Asociación Shoujospain",
            description: "",
            startTime: "17:00",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "Worldbuilding en Català",
            speaker: "Karen Madrid, Ricard Efa, Ricard Ruiz, Albert Font, Isa J. González",
            description: "",
            startTime: "17:00",
            duration: 60,
            type: "panel"
          },
          sala_4: {
            title: "Cluedo en vivo",
            speaker: "Bruno Puelles",
            description: "Actividad lúdica",
            startTime: "16:00",
            duration: 180,
            type: "workshop"
          },
          editorial: [{
            title: "Editorial Magnífica",
            startTime: "17:00",
            duration: 30,
            type: "panel"
          }, {
            title: "Editorial Raven",
            startTime: "17:30",
            duration: 30,
            type: "panel"
          }]
        }
      },
      {
        time: "18:00 - 19:00",
        events: {
          auditorio_lacy: {
            title: "Piratas, soldados y fugitivas con Stark Hollborn",
            speaker: "Stark Holborn, Susana Vallejo, África Vázquez, Daniel Pérez",
            description: "",
            startTime: "18:00",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "Menos IA, más fantasía",
            speaker: "Marina Vidal, Clara Díez Valls, Sara Soler, Andrés Zelada",
            description: "",
            startTime: "18:00",
            duration: 60,
            type: "panel"
          },
          sala_4: {
            title: "Cluedo en vivo",
            speaker: "Bruno Puelles",
            description: "Actividad lúdica",
            duration: 180,
            startTime: "16:00",
            type: "workshop"
          },
          editorial: [{
            title: "Editorial Raven",
            startTime: "18:00",
            duration: 30,
            type: "panel"
          }, {
            title: "Editorial Crononauta",
            startTime: "18:30",
            duration: 30,
            type: "panel"
          }]
        }
      }, {
        time: "19:00 - 21:00",
        events: {
          auditorio_lacy: {
            title: "Gala de entrega de premios Ignotus 2025",
            speaker: "",
            description: "",
            startTime: "19:00",
            duration: 180,
            type: "special"
          },
        }
      }
    ]
  },
  {
    date: "21 Septiembre",
    dayName: "Domingo", 
    tracks: [
      { id: 'auditorio_lacy', name: 'Auditorio Lacy', color: 'bg-blue-500' },
      { id: 'auditorio_2', name: 'Auditorio 2', color: 'bg-green-500' },
      // { id: 'sala_3', name: 'Sala 3 (Planta 1)', color: 'bg-pink-500' },
      { id: 'sala_3', name: 'Sala 3 (Planta 2)', color: 'bg-pink-500' },
      { id: 'editorial', name: 'Sala 5 - Presentaciones', color: 'bg-orange-500' },
    ],
    timeSlots: [
      {
        time: "10:00 - 11:00",
        events: {
          auditorio_lacy: {
            title: "Hablando de literatura infantil",
            speaker: "Susana Vallejo, Alba Quintas, Bruno Puelles, Marina Tena",
            description: "",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "El romantasy es mi pasión",
            speaker: "Carla Plumed, Mireia Pérez, Ari Soler, Jessica Frías",
            description: "",
            duration: 60,
            type: "panel"
          },
          sala_3: [{
            title: "Realismo y verosimilitud en la literatura de género",
            speaker: "Javier Saborido",
            description: "",
            startTime: "10:00",
            duration: 30,
            type: "workshop"
          }, {
            title: "Género y fantasía: Personajes heroicos dentro de la fantasía.",
            speaker: "Inés María Martinez Domenech",
            description: "",
            startTime: "10:30",
            duration: 30,
            type: "workshop"
          }],
          editorial: [{
            title: "Droids & Druids",
            startTime: "10:00",
            duration: 30,
            type: "panel"
          }, {
            title: "Editorial Minotauro",
            startTime: "10:30",
            duration: 30,
            type: "panel"
          }]
        }
      }, {
        time: "11:00 - 12:00",
        events: {
          auditorio_lacy: {
            title: "Siempre la misma historia: nuevas versiones de viejos arquetipos",
            speaker: "Clara Díes Valls",
            description: "",
            startTime: "11:00",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "La edad de oro del fantástico en España (1989-2009)",
            speaker: "Juan Manuel Santiago, Armando Boix, Félix J. Palma, Susana Vallejo y Manuel Díez Román",
            description: "",
            startTime: "11:00",
            duration: 60,
            type: "panel"
          },
          sala_3: [{
            title: "Pon en tu vida un fantasma",
            speaker: "Beatriz Alcaná, Ana Saiz",
            description: "",
            startTime: "11:00",
            duration: 30,
            type: "panel"
          }, {
            title: "Los cuatro pilares de escribir cifi y fantasía",
            speaker: "Javier Miró",
            description: "",
            startTime: "11:30",
            duration: 30,
            type: "workshop"
          }],
          editorial: [{
            title: "Editorial Specula",
            startTime: "11:00",
            duration: 30,
            type: "panel"
          }, {
            title: "Editorial LiterUp",
            startTime: "11:30",
            duration: 30,
            type: "panel"
          }]
        }
      }, {
        time: "12:00 - 13:00",
        events: {
          auditorio_lacy: {
            title: "Conversant amb Stark",
            speaker: "Stark Holborn",
            description: "",
            startTime: "12:00",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "Fantasía se escribe con ñ",
            speaker: "Laura G.W. Messer, Talita Isla, Beatriz Alcaná, Ana Saiz",
            description: "",
            startTime: "12:00",
            duration: 60,
            type: "panel"
          },
          sala_3: [{
            title: "Mundos de ensueño: fantasía onírica en la literatura",
            speaker: "Natalia Sánchez y Manel Medina",
            description: "",
            startTime: "12:00",
            duration: 60,
            type: "workshop"
          }],
          editorial: [{
            title: "Editorial Transbordador",
            startTime: "12:00",
            duration: 30,
            type: "panel"
          }, {
            title: "Insólita Editorial",
            startTime: "12:00",
            duration: 30,
            type: "panel"
          }]
        }
      }, {
        time: "13:00 - 14:00",
        events: {
          auditorio_lacy: {
            title: "Fantasía juvenil a través de los tiempos",
            speaker: "Maeva Nieto, Marina Tena, Isa J. González, Mireia Pérez",
            description: "",
            startTime: "13:00",
            duration: 60,
            type: "panel"
          },
          auditorio_2: {
            title: "Terror en català",
            speaker: "Andrés Torrubia, Edgar Cotes, Carlos J. Sánchez",
            description: "",
            startTime: "13:00",
            duration: 60,
            type: "panel"
          },
          sala_3: [{
            title: "La sutil diferencia entre mitologia y misticismo: un dilema en la difusión del fantástico",
            speaker: "Alfons Mallol Garcia, Karen Madrid",
            description: "",
            startTime: "13:00",
            duration: 30,
            type: "panel"
          }, {
            title: "Protección contra la IA generativa en el mundo editorial",
            speaker: "Andrés Zelada",
            description: "",
            startTime: "13:30",
            duration: 30,
            type: "workshop"
          }],
          editorial: [{
            title: "Gigamesh",
            startTime: "13:00",
            duration: 30,
            type: "panel"
          }]
        }
      }, {
        time: "14:00 - 14:30",
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
