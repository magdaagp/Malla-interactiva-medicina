const ramos = [
  { nombre: "Matemáticas", creditos: 3, requisitos: [] },
  { nombre: "Química", creditos: 6, requisitos: [] },
  { nombre: "Anatomía I", creditos: 6, requisitos: [] },
  { nombre: "Introducción a la profesión médica", creditos: 6, requisitos: [] },
  { nombre: "Medicina y sociedad", creditos: 4, requisitos: [] },
  { nombre: "Formación general I", creditos: 2, requisitos: [] },
  { nombre: "Inglés I", creditos: 3, requisitos: [] },
  { nombre: "Física", creditos: 5, requisitos: [] },
  { nombre: "Biología celular y molecular", creditos: 6, requisitos: [] },
  { nombre: "Anatomía II", creditos: 4, requisitos: ["Anatomía I"] },
  { nombre: "Histología y embriología", creditos: 6, requisitos: [] },
  { nombre: "Medicina, persona y sociedad", creditos: 4, requisitos: ["Medicina y sociedad"] },
  { nombre: "Introducción a la salud pública", creditos: 2, requisitos: ["Introducción a la profesión médica"] },
  { nombre: "Inglés II", creditos: 3, requisitos: [] },
  { nombre: "Fisiología I", creditos: 8, requisitos: ["Anatomía II", "Biología celular y molecular", "Física"] },
  { nombre: "Bioquímica", creditos: 4, requisitos: ["Biología celular y molecular"] },
  { nombre: "Genética", creditos: 5, requisitos: ["Biología celular y molecular"] },
  { nombre: "Unidad de investigación I", creditos: 2, requisitos: [] },
  { nombre: "Semiología I", creditos: 6, requisitos: ["Introducción a la profesión médica", "Medicina, persona y sociedad"] },
  { nombre: "Bioética", creditos: 3, requisitos: [] }
  // ... (seguiré completando con el resto de los ramos)
];

