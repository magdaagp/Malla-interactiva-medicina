const ramos = [
  {
    nombre: "Matemáticas",
    creditos: 3,
    requisitos: [],
    semestre: 1
  },
  {
    nombre: "Química",
    creditos: 6,
    requisitos: [],
    semestre: 1
  },
  {
    nombre: "Anatomía I",
    creditos: 6,
    requisitos: [],
    semestre: 1
  },
  {
    nombre: "Introducción a la profesión médica",
    creditos: 6,
    requisitos: [],
    semestre: 1
  },
  {
    nombre: "Medicina y sociedad",
    creditos: 4,
    requisitos: [],
    semestre: 1
  },
  {
    nombre: "Formación general I",
    creditos: 2,
    requisitos: [],
    semestre: 1
  },
  {
    nombre: "Inglés",
    creditos: 3,
    requisitos: [],
    semestre: 1
  },
  {
    nombre: "Física",
    creditos: 5,
    requisitos: [],
    semestre: 2
  },
  {
    nombre: "Biología celular y molecular",
    creditos: 6,
    requisitos: [],
    semestre: 2
  },
  {
    nombre: "Anatomía II",
    creditos: 4,
    requisitos: ["Anatomía I"],
    semestre: 2
  },
  {
    nombre: "Histología y embriología",
    creditos: 6,
    requisitos: [],
    semestre: 2
  },
  {
    nombre: "Medicina, persona y sociedad",
    creditos: 4,
    requisitos: ["Medicina y sociedad"],
    semestre: 2
  },
  {
    nombre: "Introducción a la salud pública",
    creditos: 2,
    requisitos: ["Introducción a la profesión médica"],
    semestre: 2
  },
  {
    nombre: "Inglés II",
    creditos: 3,
    requisitos: ["Inglés"],
    semestre: 2
  },
  {
    nombre: "Fisiología I",
    creditos: 8,
    requisitos: ["Anatomía II", "Biología celular y molecular", "Física"],
    semestre: 3
  },
  {
    nombre: "Bioquímica",
    creditos: 4,
    requisitos: ["Biología celular y molecular"],
    semestre: 3
  },
  {
    nombre: "Genética",
    creditos: 5,
    requisitos: ["Biología celular y molecular"],
    semestre: 3
  },
  {
    nombre: "Unidad de investigación I",
    creditos: 2,
    requisitos: [],
    semestre: 3
  },
  {
    nombre: "Semiología I",
    creditos: 6,
    requisitos: ["Introducción a la profesión médica", "Medicina, persona y sociedad"],
    semestre: 3
  },
  {
    nombre: "Bioética",
    creditos: 3,
    requisitos: [],
    semestre: 3
  },
  {
    nombre: "Bioestadística",
    creditos: 2,
    requisitos: ["Matemáticas"],
    semestre: 3
  },
  {
    nombre: "Fisiología II",
    creditos: 8,
    requisitos: ["Fisiología I", "Bioquímica"],
    semestre: 4
  },
  {
    nombre: "Inmunología",
    creditos: 3,
    requisitos: ["Genética"],
    semestre: 4
  },
  {
    nombre: "Medicina evolutiva",
    creditos: 3,
    requisitos: ["Genética"],
    semestre: 4
  },
  {
    nombre: "Unidad de investigación II",
    creditos: 2,
    requisitos: ["Unidad de investigación I"],
    semestre: 4
  },
  {
    nombre: "Semiología II",
    creditos: 9,
    requisitos: ["Semiología I", "Anatomía II"],
    semestre: 4
  },
  {
    nombre: "Casos integradores I",
    creditos: 3,
    requisitos: [],
    semestre: 4
  },
  {
    nombre: "Formación general II",
    creditos: 2,
    requisitos: ["Formación general I"],
    semestre: 4
  },
  {
    nombre: "Fisiopatología I",
    creditos: 4,
    requisitos: ["Fisiología II"],
    semestre: 5
  },
  {
    nombre: "Farmacología I",
    creditos: 4,
    requisitos: ["Bioquímica", "Fisiología II"],
    semestre: 5
  },
  {
    nombre: "Agentes vivos de la enfermedad I",
    creditos: 4,
    requisitos: ["Fisiología II", "Inmunología"],
    semestre: 5
  },
  {
    nombre: "Medicina Interna I",
    creditos: 9,
    requisitos: ["Semiología II", "Fisiología II"],
    semestre: 5
  },
  {
    nombre: "Ética clínica I",
    creditos: 2,
    requisitos: ["Bioética"],
    semestre: 5
  },
  {
    nombre: "Epidemiología descriptiva",
    creditos: 2,
    requisitos: ["Bioestadística", "Introducción a la salud pública"],
    semestre: 5
  },
  {
    nombre: "Módulo integrado interdisciplinario multiprofesional I",
    creditos: 4,
    requisitos: [],  // En el PDF dice "90 créditos", se puede programar como regla general más adelante
    semestre: 5
  },
  {
    nombre: "Fisiopatología II",
    creditos: 4,
    requisitos: ["Fisiopatología I"],
    semestre: 6
  },
  {
    nombre: "Farmacología II",
    creditos: 4,
    requisitos: ["Farmacología I", "Fisiopatología I"],
    semestre: 6
  },
  {
    nombre: "Agentes vivos de la enfermedad II",
    creditos: 4,
    requisitos: ["Agentes vivos de la enfermedad I"],
    semestre: 6
  },
  {
    nombre: "Medicina Interna II",
    creditos: 14,
    requisitos: ["Medicina Interna I"],
    semestre: 6
  },
  {
    nombre: "Epidemiología analítica",
    creditos: 3,
    requisitos: ["Epidemiología descriptiva"],
    semestre: 6
  },
  {
    nombre: "Casos integradores II",
    creditos: 2,
    requisitos: ["Semiología II"],
    semestre: 6
  },
  {
    nombre: "Medicina general familiar I",
    creditos: 4,
    requisitos: ["Medicina Interna II"],
    semestre: 7
  },
  {
    nombre: "Cirugía",
    creditos: 9,
    requisitos: ["Medicina Interna II"],
    semestre: 7
  },
  {
    nombre: "Geriatría",
    creditos: 5,
    requisitos: ["Medicina Interna II"],
    semestre: 7
  },
  {
    nombre: "Anatomía patológica",
    creditos: 4,
    requisitos: ["Anatomía II", "Histología y embriología", "Medicina Interna I"],
    semestre: 7
  },
  {
    nombre: "Ética clínica II",
    creditos: 3,
    requisitos: ["Ética clínica I"],
    semestre: 7
  },
  {
    nombre: "Casos integradores III",
    creditos: 3,
    requisitos: ["Casos integradores II", "Medicina Interna II"],
    semestre: 7
  },
  {
    nombre: "Formación general III",
    creditos: 2,
    requisitos: ["Formación general II"],
    semestre: 7
  },
  {
    nombre: "Medicina general familiar II",
    creditos: 9,
    requisitos: ["Medicina general familiar I"],
    semestre: 8
  },
  {
    nombre: "Especialidades médicas y quirúrgicas I",
    creditos: 8,
    requisitos: ["Medicina Interna II"],
    semestre: 8
  },
  {
    nombre: "Neurología",
    creditos: 4,
    requisitos: ["Medicina Interna II"],
    semestre: 8
  },
  {
    nombre: "Medicina legal",
    creditos: 2,
    requisitos: ["Medicina Interna II"],
    semestre: 8
  },
  {
    nombre: "Diagnóstico de situación de salud",
    creditos: 2,
    requisitos: ["Epidemiología descriptiva"],
    semestre: 8
  },
  {
    nombre: "Seguridad social y atención de salud",
    creditos: 2,
    requisitos: ["Epidemiología descriptiva"],
    semestre: 8
  },
  {
    nombre: "Electivo profesional I",
    creditos: 3,
    requisitos: [],
    semestre: 8
  },
  {
    nombre: "Pediatría y cirugía infantil",
    creditos: 10,
    requisitos: ["Cirugía"],
    semestre: 9
  },
  {
    nombre: "Especialidades médicas y quirúrgicas II",
    creditos: 8,
    requisitos: ["Cirugía"],
    semestre: 9
  },
  {
    nombre: "Medicina de urgencia",
    creditos: 4,
    requisitos: ["Cirugía"],
    semestre: 9
  },
  {
    nombre: "Gestión I",
    creditos: 2,
    requisitos: ["Seguridad social y atención de salud"],
    semestre: 9
  },
  {
    nombre: "Electivo profesional II",
    creditos: 3,
    requisitos: ["Electivo profesional I"],
    semestre: 9
  },
  {
    nombre: "Casos integradores IV",
    creditos: 3,
    requisitos: ["Casos integradores III"],
    semestre: 9
  },
  {
    nombre: "Ginecología-obstetricia",
    creditos: 10,
    requisitos: ["Cirugía"],
    semestre: 10
  },
  {
    nombre: "Psiquiatría",
    creditos: 6,
    requisitos: ["Medicina Interna II"],
    semestre: 10
  },
  {
    nombre: "Psiquiatría infantil",
    creditos: 2,
    requisitos: ["Medicina general familiar II"],
    semestre: 10
  },
  {
    nombre: "Gestión II",
    creditos: 2,
    requisitos: ["Gestión I"],
    semestre: 10
  },
  {
    nombre: "Electivo profesional III",
    creditos: 3,
    requisitos: ["Electivo profesional II"],
    semestre: 10
  },
  {
    nombre: "Formación general IV",
    creditos: 2,
    requisitos: ["Formación general III"],
    semestre: 10
  },
  {
    nombre: "Módulo integrado interdisciplinario multiprofesional II",
    creditos: 5,
    requisitos: ["Módulo integrado interdisciplinario multiprofesional I"],
    semestre: 10
  },
  {
    nombre: "Medicina interna",
    creditos: 26,
    requisitos: [
      "Casos integradores II",
      "Módulo integrado interdisciplinario multiprofesional II",
      "Epidemiología analítica",
      "Diagnóstico de situación de salud",
      "Gestión II",
      "Neurología",
      "Psiquiatría",
      "Geriatría",
      "Agentes vivos de la enfermedad II",
      "Fisiopatología II",
      "Farmacología II",
      "Psiquiatría infantil",
      "Especialidades médicas y quirúrgicas I",
      "Pediatría y cirugía infantil",
      "Ginecología-obstetricia",
      "Medicina de urgencia",
      "Especialidades médicas y quirúrgicas II",
      "Ética clínica II",
      "Casos integradores I",
      "Unidad de investigación II",
      "Casos integradores III",
      "Medicina legal",
      "Casos integradores IV"
    ],
    semestre: 11
  },
  {
    nombre: "Pediatría",
    creditos: 26,
    requisitos: [
      "Casos integradores II",
      "Módulo integrado interdisciplinario multiprofesional II",
      "Epidemiología analítica",
      "Diagnóstico de situación de salud",
      "Gestión II",
      "Neurología",
      "Psiquiatría",
      "Geriatría",
      "Agentes vivos de la enfermedad II",
      "Fisiopatología II",
      "Farmacología II",
      "Psiquiatría infantil",
      "Especialidades médicas y quirúrgicas I",
      "Pediatría y cirugía infantil",
      "Ginecología-obstetricia",
      "Medicina de urgencia",
      "Especialidades médicas y quirúrgicas II",
      "Ética clínica II",
      "Casos integradores I",
      "Unidad de investigación II",
      "Casos integradores III",
      "Medicina legal",
      "Casos integradores IV"
    ],
    semestre: 11
  },
  {
    nombre: "Urología",
    creditos: 3,
    requisitos: ["Medicina interna"],
    semestre: 12
  },
  {
    nombre: "Oftalmología",
    creditos: 3,
    requisitos: ["Medicina interna"],
    semestre: 12
  },
  {
    nombre: "Otorrinolaringología",
    creditos: 3,
    requisitos: ["Medicina interna"],
    semestre: 12
  },
  {
    nombre: "Dermatología",
    creditos: 3,
    requisitos: ["Medicina interna"],
    semestre: 12
  },
  {
    nombre: "Traumatología",
    creditos: 6,
    requisitos: ["Medicina interna"],
    semestre: 12
  },
  {
    nombre: "Urgencias",
    creditos: 6,
    requisitos: ["Medicina interna"],
    semestre: 12
  },
  {
    nombre: "Cirugía (internado)",
    creditos: 18,
    requisitos: ["Medicina interna", "Pediatría"],
    semestre: 13
  },
  {
    nombre: "Ginecología - Obstetricia (internado)",
    creditos: 18,
    requisitos: ["Medicina interna", "Pediatría"],
    semestre: 13
  },
  {
    nombre: "Atención primaria urbana",
    creditos: 6,
    requisitos: ["Medicina interna", "Pediatría"],
    semestre: 13
  },
  {
    nombre: "Atención primaria rural",
    creditos: 6,
    requisitos: ["Medicina interna", "Pediatría"],
    semestre: 13
  },
  {
    nombre: "Neurología (internado)",
    creditos: 6,
    requisitos: ["Medicina interna"],
    semestre: 14
  },
  {
    nombre: "Psiquiatría (internado)",
    creditos: 6,
    requisitos: ["Medicina interna"],
    semestre: 14
  },
  {
    nombre: "Electivo I",
    creditos: 6,
    requisitos: ["Medicina interna"],
    semestre: 14
  },
  {
    nombre: "Electivo II",
    creditos: 6,
    requisitos: ["Medicina interna"],
    semestre: 14
  }
];
const contenedor = document.getElementById("contenedor-malla");
let completados = new Set();
const ramosSexto = [
  {
    nombre: "Medicina interna",
    creditos: 26,
    requisitos: ["Casos integradores II", "Módulo integrado interdisciplinario multiprofesional II"],
    anio: "Sexto año"
  },
  {
    nombre: "Pediatría",
    creditos: 26,
    requisitos: ["Casos integradores II", "Módulo integrado interdisciplinario multiprofesional II"],
    anio: "Sexto año"
  },
  {
    nombre: "Urología",
    creditos: 3,
    requisitos: ["Medicina interna"],
    anio: "Sexto año"
  },
  {
    nombre: "Oftalmología",
    creditos: 3,
    requisitos: ["Medicina interna"],
    anio: "Sexto año"
  },
  {
    nombre: "Otorrinolaringología",
    creditos: 3,
    requisitos: ["Medicina interna"],
    anio: "Sexto año"
  },
  {
    nombre: "Dermatología",
    creditos: 3,
    requisitos: ["Medicina interna"],
    anio: "Sexto año"
  },
  {
    nombre: "Traumatología",
    creditos: 6,
    requisitos: ["Medicina interna"],
    anio: "Sexto año"
  },
  {
    nombre: "Urgencias",
    creditos: 6,
    requisitos: ["Medicina interna"],
    anio: "Sexto año"
  }
];

const ramosSeptimo = [
  {
    nombre: "Cirugía (internado)",
    creditos: 18,
    requisitos: ["Medicina interna", "Pediatría"],
    anio: "Séptimo año"
  },
  {
    nombre: "Ginecología - Obstetricia (internado)",
    creditos: 18,
    requisitos: ["Medicina interna", "Pediatría"],
    anio: "Séptimo año"
  },
  {
    nombre: "Atención primaria urbana",
    creditos: 6,
    requisitos: ["Medicina interna", "Pediatría"],
    anio: "Séptimo año"
  },
  {
    nombre: "Atención primaria rural",
    creditos: 6,
    requisitos: ["Medicina interna", "Pediatría"],
    anio: "Séptimo año"
  },
  {
    nombre: "Neurología (internado)",
    creditos: 6,
    requisitos: ["Medicina interna"],
    anio: "Séptimo año"
  },
  {
    nombre: "Psiquiatría (internado)",
    creditos: 6,
    requisitos: ["Medicina interna"],
    anio: "Séptimo año"
  },
  {
    nombre: "Electivo I",
    creditos: 6,
    requisitos: ["Medicina interna"],
    anio: "Séptimo año"
  },
  {
    nombre: "Electivo II",
    creditos: 6,
    requisitos: ["Medicina interna"],
    anio: "Séptimo año"
  }
];

function construirMalla() {
  // Semestres 1 al 10
  for (let i = 1; i <= 10; i++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>${i}° semestre</h2>`;
    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = `${ramo.nombre}`;
      div.dataset.nombre = ramo.nombre;
      div.onclick = () => toggleRamo(ramo.nombre);
      columna.appendChild(div);
    });
    contenedor.appendChild(columna);
  }

  // Sexto año
  const sexto = document.createElement("div");
  sexto.className = "semestre";
  sexto.innerHTML = `<h2>Sexto año</h2>`;
  ramosSexto.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = `${ramo.nombre}`;
    div.dataset.nombre = ramo.nombre;
    div.onclick = () => toggleRamo(ramo.nombre);
    sexto.appendChild(div);
  });
  contenedor.appendChild(sexto);

  // Séptimo año
  const septimo = document.createElement("div");
  septimo.className = "semestre";
  septimo.innerHTML = `<h2>Séptimo año</h2>`;
  ramosSeptimo.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = `${ramo.nombre}`;
    div.dataset.nombre = ramo.nombre;
    div.onclick = () => toggleRamo(ramo.nombre);
    septimo.appendChild(div);
  });
  contenedor.appendChild(septimo);

  actualizarEstado();
}

function toggleRamo(nombre) {
  if (completados.has(nombre)) {
    completados.delete(nombre);
  } else {
    completados.add(nombre);
  }
  guardarEstado(); // 🔹 Guarda el estado al hacer clic
  actualizarEstado();
}

function puedeTomarse(ramo) {
  return ramo.requisitos.every(req => completados.has(req));
}

function actualizarEstado() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const obj =
      ramos.find(r => r.nombre === nombre) ||
      ramosSexto.find(r => r.nombre === nombre) ||
      ramosSeptimo.find(r => r.nombre === nombre);

    div.classList.remove("seleccionado", "bloqueado");

    if (completados.has(nombre)) {
      div.classList.add("seleccionado");
    } else if (!puedeTomarse(obj)) {
      div.classList.add("bloqueado");
    }
  });
}
function guardarEstado() {
  localStorage.setItem("ramosSeleccionados", JSON.stringify([...completados]));
}

function cargarEstado() {
  const guardados = JSON.parse(localStorage.getItem("ramosSeleccionados"));
  if (guardados) {
    completados = new Set(guardados);
  }
}

cargarEstado();  // 🔹 Carga lo guardado antes de construir
construirMalla();

