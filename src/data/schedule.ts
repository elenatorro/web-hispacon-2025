import type { DaySchedule } from "@/types/schedule";

export const scheduleData: DaySchedule[] = [
  {
    date: "Viernes 19",
    dayName: "Divendres 19",
    tracks: [
      { id: 'auditorio_lacy', name: 'Auditorio Lacy', nameCa: 'Auditori Lacy', color: 'bg-blue-500' },
      // { id: 'auditorio_2', name: 'Auditorio Planta 2', color: 'bg-green-500' },
      // { id: 'sala_3', name: 'Sala 3 (Planta 1)', color: 'bg-pink-500' },
      { id: 'sala_4', name: 'Sala 4 (Planta 2)', color: 'bg-purple-500' },
      // { id: 'ludica', name: 'Sala Lúdica', color: 'bg-yellow-500' },
      { id: 'editorial', name: 'Sala 5 (Planta 2) Presentaciones', nameCa: 'Presentacions', color: 'bg-orange-500' },
    ],
    timeSlots: [
      {
        time: "16:00 - 16:30",
        events: {
          auditorio_lacy: [
            {
            title: "Concierto de bienvenida | Concert de benvinguda",
            speaker: "Sandra Hunter",
            description: "Concierto en directo a cargo de la artista Sandra Hunter | Concert en directe a càrrec de l'artista Sandra Hunter",
            duration: 30,
            startTime: "16:00",
            type: "destacada",
            typeCa: "destacada"
          }]
        },
      },
      {
        time: "16:30 - 17:00",
        events: {
          auditorio_lacy: [
          {
            title: "Inauguración | Inauguració",
            speaker: "Comité organizador | Comitè organitzador",
            description: "Bienvenida y presentación de la HispaCón 2025 | Benvinguda i presentació de la HispaCón 2025",
            duration: 20,
            startTime: "16:30",
            type: "destacada",
            typeCa: "destacada"
          }],
          sala_4: {
            title: "Alicia tiene una tardis. Viajes y regeneraciones de Alicia en el País de las Maravillas en la cultura popular",
            speaker: "Andrea Valeiras",
            description: "",
            duration: 20,
            startTime: "16:30",
            type: "charla",
            typeCa: "xerrada"
          },
          editorial: {
            title: "Tentacle Pulp",
            description: "",
            duration: 20,
            startTime: "16:30",
            type: "panel",
            typeCa: "panell"
          },
        }
      },
      {
        time: "17:00 - 18:00",
        events: {
          auditorio_lacy: {
            title: "Nueva ola del teatro fantástico",
            speaker: "Loredana Volpe, Alberto Ramos, Quim Ribalta, Cristina Xifra",
            description: "Mesa redonda",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          sala_4: [
            {
              title: "El romantasy es mi pasión",
              speaker: "Carla Plumed, Jessica Frías, Antonio Torrubia",
              description: "",
              duration: 50,
              startTime: "17:00",
              type: "panel",
              typeCa: "panell"
            }
          ],
          editorial: [
            {
                title: "Sin programar | Sense programar",
                description: "-",
                duration: 20,
                startTime: "17:00",
                type: "",
                typeCa: ""
            },
            {
                title: "Medusa Books",
                description: "Presentació de Matermorfosi, de Laura Tomàs Mora",
                duration: 20,
                startTime: "17:30",
                lang: 'ca',
                type: "panel",
                typeCa: "panell"
            }
          ],
        }
      },
      {
        time: "18:00 - 19:00",
        events: {
          auditorio_lacy: {
            title: "La que se Navecina",
            speaker: "Caryanna Reuven, Celia Corral-Vázquez, Rafa Díaz, Alfredo Álamo, David Fdez. Vaamonde",
            description: "Mesa redonda sobre Space Opera",
            startTime: "18:00",
            duration: 50,
            type: "charla",
            typeCa: "xerrada"
          },
          sala_4: {
            title: "Ride the Laughing",
            speaker: "Sergi Álvarez",
            description: "Taller para escribir humor",
            startTime: "18:00",
            duration: 50,
            type: "taller",
            typeCa: "taller"
          },
          editorial: {
            title: "Presentación Autopublicación",
            speaker: "",
            description: "A cargo de sus autores y autoras",
            startTime: "18:00",
            duration: 90,
            type: "panel",
            typeCa: "panell"
          },
        }
      },
      {
        time: "19:00 - 20:00",
        events: {
          auditorio_lacy: {
            title: "Más que Final Girls",
            speaker: "Nerea Bosch, Mariló Álvarez, Celia Corral-Vázquez, Aitziber Saldias, Katherine Vega, Paula Peralta",
            description: "Mesa redonda sobre terror escrito por mujeres",
            startTime: "19:00",
            duration: 50,
            type: "charla",
            typeCa: "xerrada"
          },
          sala_4: [
            {
              title: "Cómo (intentar) ganar un concurso literario",
              speaker: "Alba Quintas",
              description: "",
              duration: 20,
              startTime: "19:00",
              type: "taller",
              typeCa: "taller"
            },
            {
              title: "Escribir un microrrelato usando el Tarot",
              speaker: "Mireia Pérez",
              description: "",
              duration: 20,
              startTime: "19:30",
              type: "taller",
              typeCa: "taller"
            }
          ],
          editorial: [{
            title: "Presentación Autopublicación",
            speaker: "",
            description: "A cargo de sus autores y autoras",
            startTime: "18:00",
            duration: 90,
            type: "panel",
            typeCa: "panell"
            },
            {
              title: "Aquí hay Dragonas",
              speaker: "",
              description: "",
              duration: 20,
              startTime: "19:30",
              type: "panel",
              typeCa: "panell"
          }]
        }
      },
    {
        time: "20:00 - 21:00",
        events: {
          auditorio_lacy: {
            title: "El bizarro en los tiempos del cólera",
            speaker: "Bea Aguilar, Eduard Martí, Sergi Álvarez, Sergi Viciana",
            description: "",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          sala_4: [
            {
              title: "Escribir a varias manos: personas, no engranajes",
              speaker: "Alejandro Marín, Borja Alonso",
              description: "",
              duration: 20,
              startTime: "20:00",
              type: "taller",
              typeCa: "taller"
            },
            {
              title: "El género fantástico en la música de los 80: No es serio este cementerio",
              speaker: "David Fdez. Vaamonde",
              description: "",
              duration: 20,
              startTime: "20:30",
              type: "taller",
              typeCa: "taller"
            }
          ],
          editorial: [
            {
                title: "Sugaar Editorial",
                description: "",
                duration: 20,
                startTime: "20:00",
                type: "panel",
                typeCa: "panell"
            },
            {
                title: "LES Editorial",
                description: "",
                duration: 20,
                startTime: "20:30",
                type: "panel",
                typeCa: "panell"
            }
          ],
        }
      }
    ]
  },
  {
    date: "Sábado 20", 
    dayName: "Dissabte 20",
    tracks: [
      { id: 'auditorio_lacy', name: 'Auditorio Lacy', nameCa: 'Auditori Lacy', color: 'bg-blue-500' },
      { id: 'auditorio_2', name: 'Auditorio 2', nameCa: 'Auditori 2', color: 'bg-green-500' },
      // OPCION LLUVIA
      // { id: 'ludica', name: 'Sala 4 (Planta 2)', color: 'bg-purple-500' },
      // { id: 'editorial', name: 'Sala 5 - Presentaciones | Presentacions', color: 'bg-orange-500' },
      { id: 'ludica', name: 'Sala Lúdica - Salón de Actos', nameCa: 'Saló d\'Actes', color: 'bg-yellow-500' },
      { id: 'editorial', name: 'Sala 4 (Planta 2) | Presentaciones', nameCa: 'Presentacions', color: 'bg-orange-500' },
    ],
    timeSlots: [
      {
        time: "10:00 - 11:00",
        events: {
          auditorio_lacy: {
            title: "Antibel·licisme a la literatura fantàstica",
            speaker: "Carla Campos, Gemma Solsona, Cristina Xifra",
            description: "",
            duration: 50,
            lang: "ca",
            type: "panel",
            typeCa: "panell"
          },
          auditorio_2: {
            title: "Cómo hacer ucronías en España",
            speaker: "Andrea Valeiras, Talita Isla, Javier Miró",
            description: "",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          ludica: {
            title: "Juegos y rol | Jocs i rol",
            speaker: "",
            description: "Toda la mañana | Tot el matí",
            duration: 240,
            type: "taller",
            typeCa  : "taller"
          },
          editorial: [{
            title: "Estelas de magia",
            startTime: "10:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          },{
            title: "Algar Editorial",
            startTime: "10:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      },
      {
        time: "11:00 - 12:00",
        events: {
          auditorio_lacy: {
            title: "Narrar a través del cómic",
            speaker: "Marina Vidal, Ricard Efa, Sara Soler, Genie Espinosa",
            description: "",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          auditorio_2: {
            title: "Tiempos que fueron y que pudieron ser: género fantástico de inspiración histórica",
            speaker: "Ana Saiz, Isabel Pedrero, Beatriz Alcaná, Bruno Puelles",
            startTime: "11:00",
            description: "",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          ludica: {
            title: "Juegos y rol | Jocs i rol",
            speaker: "",
            description: "Toda la mañana | Tot el matí",
            duration: 240,
            type: "taller"
          },
          editorial: [{
            title: "Apache Libros",
            startTime: "11:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          },{
            title: "Esqueleto Negro",
            startTime: "11:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      },
      {
        time: "12:00 - 13:00",
        events: {
          auditorio_lacy: {
            title: "Hablando de Distopías",
            speaker: "Stark Holborn, Caryanna Reuven, Alba Quintas, Isabel del Río, Marta Armengol",
            description: "Mesa redonda sobre literatura distópica",
            startTime: "12:00",
            duration: 50,
            type: "destacada"
          },
          auditorio_2: {
            title: "El humor en el género y el género en el humor",
            speaker: "Mónica Gutiérrez, Andrea Valeiras, Inés Galiano, Alejandro Rodríguez, Sergi Álvarez",
            description: "",
            startTime: "12:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          ludica: {
            title: "Juegos y rol | Jocs i rol",
            speaker: "",
            description: "Toda la mañana | Tot el matí",
            duration: 240,
            type: "taller",
            typeCa  : "taller"
          },
          editorial: [{
            title: "Obscura Editorial",
            startTime: "12:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          },{
            title: "Editorial Numak",
            startTime: "12:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      },
      {
        time: "13:00 - 14:30",
        events: {
          auditorio_lacy: {
            title: "Grimdark vs Hopepunk",
            speaker: "Ari R. Soler, Javier Miró, Carlos di Urarte, Andrea Valeiras, Laura Maquilón, Ricard Efa",
            description: "",
            startTime: "13:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          auditorio_2: {
            title: "Tendencias actuales del terror: del papel a lo audiovisual",
            speaker: "Chris T.Nash, Gemma Solsona, Isabel del Río, Iván Ledesma, Carlos J. Sanchez, Antonio Torrubia",
            description: "",
            startTime: "13:00",
            duration: 90,
            type: "panel",
            typeCa: "panell"
          },
          ludica: {
            title: "Juegos y rol | Jocs i rol",
            speaker: "",
            description: "Toda la mañana | Tot el matí",
            duration: 240,
            type: "taller",
            typeCa  : "taller"
          },
          editorial: [{
            title: "Suseya Editorial",
            startTime: "13:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }, {
            title: "Pórtico",
            startTime: "13:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      },
      {
        time: "14:00 - 16:00 🍔 Pausa",
        events: {
        }
      },
      {
        time: "16:00 - 17:00",
        events: {
          auditorio_lacy: {
            title: "Escribir en formato breve: el mundo del relato",
            speaker: "Autoras Anacronópete 2025: Gemma Solsona, Ana Saiz y Alba Quintas",
            description: "",
            startTime: "16:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          auditorio_2: {
            title: "Consejos de escritura de Stephen King",
            speaker: "Susana Vallejo y Sergi Viciana",
            description: "",
            startTime: "16:00",
            duration: 50,
            type: "taller",
            typeCa: "taller"
          },
          ludica: {
            title: "Cluedo en vivo",
            speaker: "Bruno Puelles",
            description: "'Fiesta en el Hotel Jardín de Odette'. Actividad a cargo de Bruno Puelles, 3h de duración. Requiere inscripción previa.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeb9Hp7tjR_wEpqj2vnfPAlo1C5ZK-o05q5N3e28OfkN0losQ/viewform",
            startTime: "16:00",
            duration: 180,
            type: "taller",
            typeCa: "taller"
          },
          editorial: [{
            title: "La Biblioteca de Carfax",
            startTime: "16:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }, {
            title: "Isphanya",
            startTime: "16:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      },
      {
        time: "17:00 - 18:00",
        events: {
          auditorio_lacy: {
            title: "Construint mons",
            speaker: "Karen Madrid, Ricard Ruiz, Albert Font, Isa J. González, Edgar Cotes",
            description: "Worldbuilding en la narrativa fantàstica",
            startTime: "17:00",
            lang: "ca",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          auditorio_2: {
            title: "Situación de la mujer mangaka",
            speaker: "Sheila Malchirant, Asociación Pro Shōjo Spain",
            description: "",
            startTime: "17:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          ludica: {
            title: "Cluedo en vivo",
            speaker: "Bruno Puelles",
            description: "'Fiesta en el Hotel Jardín de Odette'. Actividad a cargo de Bruno Puelles, 3h de duración. Requiere inscripción previa.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeb9Hp7tjR_wEpqj2vnfPAlo1C5ZK-o05q5N3e28OfkN0losQ/viewform",
            startTime: "16:00",
            duration: 180,
            type: "taller",
            typeCa: "taller"
          },
          editorial: [{
            title: "Editorial Magnífica",
            startTime: "17:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }, {
            title: "Editorial Raven",
            startTime: "17:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      },
      {
        time: "18:00 - 19:00",
        events: {
          auditorio_lacy: {
            title: "Piratas, soldados y fugitivas",
            speaker: "Stark Holborn, Susana Vallejo, Daniel Pérez, Beatriz Alcaná, Marta Armengol",
            description: "",
            startTime: "18:00",
            duration: 50,
            type: "destacada",
            typeCa: "destacada"
          },
          auditorio_2: {
            title: "Menos IA, más fantasía",
            speaker: "Marina Vidal, Clara Dies Valls, Sara Soler, Andrés Zelada",
            description: "",
            startTime: "18:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          ludica: {
            title: "Cluedo en vivo",
            speaker: "Bruno Puelles",
            description: "'Fiesta en el Hotel Jardín de Odette'. Actividad a cargo de Bruno Puelles, 3h de duración. Requiere inscripción previa.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeb9Hp7tjR_wEpqj2vnfPAlo1C5ZK-o05q5N3e28OfkN0losQ/viewform",
            duration: 180,
            startTime: "16:00",
            type: "taller"
          },
          editorial: [{
            title: "Editorial Crononauta",
            startTime: "18:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }, {
            title: "Editorial Minotauro",
            startTime: "18:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      }, {
        time: "19:00 - 21:00",
        events: {
          auditorio_lacy: {
            title: "Gala de entrega de Premios Ignotus 2025 | Gala de lliurament de Premis Ignotus 2025",
            speaker: "",
            description: "",
            startTime: "19:00",
            duration: 120,
            type: "destacada"
          },
        }
      }, {
        time: "22:30 - 00:30 🎙️ Nit de Podcasts",
        events: {
          podcast_night: [
            {
              title: "Narranación",
              startTime: "22:30",
              duration: 30,
              lang: "ca",
              type: "especial",
              typeCa: "especial"
            },
            {
              title: "idíl•liQ",
              startTime: "23:00",
              duration: 30,
              lang: "ca",
              type: "especial",
              typeCa: "especial"
            },
            {
              title: "La Estantería Sáfica",
              description: "ES",
              startTime: "23:30",
              duration: 30,
              type: "especial",
              typeCa: "especial"
            },
            {
              title: "Furia en la Librería",
              description: "ES",
              startTime: "00:00",
              duration: 30,
              type: "especial",
              typeCa: "especial"
            }
          ]
        },
        isSpecialEvent: true
      }
    ]
  },
  {
    date: "Domingo 21",
    dayName: "Diumenge 21", 
    tracks: [
      { id: 'auditorio_lacy', name: 'Auditorio Lacy', nameCa: 'Auditori Lacy', color: 'bg-blue-500' },
      { id: 'auditorio_2', name: 'Auditorio 2', nameCa: 'Auditori 2', color: 'bg-green-500' },
      { id: 'sala_4', name: 'Sala 4 (Planta 2)', color: 'bg-pink-500' },
      { id: 'editorial', name: 'Sala 5 (Planta 2) Presentaciones', nameCa: 'Presentacions', color: 'bg-orange-500' },
    ],
    timeSlots: [
      {
        time: "10:00 - 11:00",
        events: {
          auditorio_lacy: {
            title: "Hablando de literatura infantil",
            speaker: "Susana Vallejo, Marina Tena, Mariló Álvarez",
            description: "",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          auditorio_2: {
              title: "Audioficciones de género fantástico",
              speaker: "David Fdez. Vaamonde (SonosSonoros), Elena Torró (Droids&Druids), Aleix Valverde (Transmitiendo a Ciegas)",
              description: "",
              duration: 50,
              startTime: "10:00",
              type: "panel",
              typeCa: "panell"
          },
          sala_4: [{
            title: "Realismo y verosimilitud en la literatura de género",
            speaker: "Javier Saborido",
            description: "",
            startTime: "10:00",
            duration: 20,
            type: "taller",
            typeCa: "taller"
          }, {
            title: "Género y fantasía: Personajes heroicos dentro de la fantasía",
            speaker: "Inés María Martínez Domenech",
            description: "",
            startTime: "10:30",
            duration: 20,
            type: "taller",
            typeCa: "taller"
          }],
          editorial: []
        }
      }, {
        time: "11:00 - 12:00",
        events: {
          auditorio_lacy: {
            title: "Siempre la misma historia: nuevas versiones de viejos arquetipos",
            speaker: "Clara Dies Valls, Alberto Seijo, Andrea Valeiras, Laura Romea, G. G. Lapresa",
            description: "",
            startTime: "11:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          auditorio_2: {
            title: "La edad de oro del fantástico en España (1989-2009)",
            speaker: "Juan Manuel Santiago, Armando Boix, M.ª Concepción Regueiro Digón, José Antonio Bonilla",
            description: "",
            startTime: "11:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          sala_4: [{
            title: "¿Quién dijo miedo? Pon un fantasma en tu vida",
            speaker: "Beatriz Alcaná, Ana Saiz",
            description: "",
            startTime: "11:00",
            duration: 20,
            type: "charla"
          }, {
            title: "Los cuatro pilares de escribir cifi y fantasía",
            speaker: "Javier Miró",
            description: "",
            startTime: "11:30",
            duration: 20,
            type: "taller",
            typeCa: "taller"
          }],
          editorial: [{
            title: "Editorial Specula",
            startTime: "11:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }, {
            title: "Editorial Literup",
            startTime: "11:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      }, {
        time: "12:00 - 13:00",
        events: {
          auditorio_lacy: {
            title: "Conversando con Stark",
            speaker: "Stark Holborn, Elena Torró, Marta Armengol",
            description: "",
            startTime: "12:00",
            duration: 50,
            type: "destacada",
            typeCa: "destacada"
          },
          auditorio_2: {
            title: "Fantasía se escribe con ñ",
            speaker: "Laura G.W. Messer, Talita Isla, Beatriz Alcaná, Ana Saiz",
            description: "",
            startTime: "12:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          sala_4: [{
            title: "Mundos de ensueño: fantasía onírica en la literatura",
            speaker: "Natalia Sánchez y Manel Medina",
            description: "",
            startTime: "12:00",
            duration: 50,
            type: "taller",
            typeCa: "taller"
          }],
          editorial: [{
            title: "Editorial Transbordador",
            startTime: "12:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }, {
            title: "Insólita Editorial",
            startTime: "12:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
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
            duration: 50,
            type: "panel",
          },
          auditorio_2: {
            title: "Editar género: dando voz a autores y autoras",
            speaker: "Shaila Correa (La Biblioteca de Carfax), Christian Rodríguez (Insólita Editorial), Job Peró (Obscura), Claudia Casanova (Oz Editorial), Mariló Álvarez (Minotauro)",
            description: "Mesa redonda con editores y editoras de género fantástico",
            startTime: "13:00",
            duration: 50,
            type: "panel",
            typeCa: "panell"
          },
          sala_4: [{
            title: "La sutil diferencia entre mitologia y misticismo: un dilema en la difusión del fantástico",
            speaker: "Alfons Mallol García, Karen Madrid",
            description: "",
            startTime: "13:00",
            duration: 20,
            type: "charla",
            typeCa: "xerrada"
          }, {
            title: "Protección contra la IA generativa en el mundo editorial",
            speaker: "Andrés Zelada",
            description: "",
            startTime: "13:30",
            duration: 20,
            type: "taller",
            typeCa: "taller"
          }],
          editorial: [{
            title: "40 aniversario de Gigamesh",
            startTime: "13:00",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          },{
            title: "Droids & Druids",
            startTime: "13:30",
            duration: 20,
            type: "panel",
            typeCa: "panell"
          }]
        }
      }, {
        time: "14:00 - 14:30",
        events: {
          auditorio_lacy: {
            title: "Clausura",
            speaker: "Comité organizador | Comitè organitzador",
            description: "Cierre oficial de HispaCón 2025 y anuncio próxima edición | Tancament oficial de HispaCón 2025 i anunci pròxima edició",
            duration: 20,
            type: "destacada",
            typeCa: "destacada"
          }
        }
      }
    ]
  }
];
