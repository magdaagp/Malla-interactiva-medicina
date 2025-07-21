const ramos = [
  { nombre: "Matemáticas", creditos: 3, requisitos: [], semestre: 1 },
  { nombre: "Química", creditos: 6, requisitos: [], semestre: 1 },
  { nombre: "Anatomía I", creditos: 6, requisitos: [], semestre: 1 },
  { nombre: "Introducción a la profesión médica", creditos: 6, requisitos: [], semestre: 1 },
  { nombre: "Medicina y sociedad", creditos: 4, requisitos: [], semestre: 1 },
  { nombre: "Formación general I", creditos: 2, requisitos: [], semestre: 1 },
  { nombre: "Inglés I", creditos: 3, requisitos: [], semestre: 1 },
  { nombre: "Física", creditos: 5, requisitos: [], semestre: 2 },
  { nombre: "Biología celular y molecular", creditos: 6, requisitos: [], semestre: 2 },
  { nombre: "Anatomía II", creditos: 4, requisitos: ["Anatomía I"], semestre: 2 },
  { nombre: "Histología y embriología", creditos: 6, requisitos: [], semestre: 2 },
  { nombre: "Medicina, persona y sociedad", creditos: 4, requisitos: ["Medicina y sociedad"], semestre: 2 },
  { nombre: "Introducción a la salud pública", creditos: 2, requisitos: ["Introducción a la profesión médica"], semestre: 2 },
  { nombre: "Inglés II", creditos: 3, requisitos: [], semestre: 2 }
];

const contenedor = document.getElementById("contenedor-malla");
let completados = new Set();

function construirMalla() {
  for (let i = 1; i <= 14; i++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>${i}° semestre</h2>`;
    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = `${ramo.nombre}`;
      div.dataset.nombre = ramo.nombre;
      div.onclick = () => seleccionarRamo(ramo.nombre);
      if (!puedeTomarse(ramo)) div.classList.add("bloqueado");
      columna.appendChild(div);
    });
    contenedor.appendChild(columna);
  }
}

function puedeTomarse(ramo) {
  return ramo.requisitos.every(req => completados.has(req));
}

function seleccionarRamo(nombre) {
  completados = new Set();
  completados.add(nombre);

  document.querySelectorAll(".ramo").forEach(d => {
    d.classList.remove("seleccionado", "dependiente", "bloqueado");
  });

  ramos.forEach(r => {
    if (r.requisitos.includes(nombre)) {
      completados.add(r.nombre);
    }
  });

  document.querySelectorAll(".ramo").forEach(div => {
    const n = div.dataset.nombre;
    const obj = ramos.find(r => r.nombre === n);
    if (n === nombre) div.classList.add("seleccionado");
    else if (completados.has(n)) div.classList.add("dependiente");
    else if (!puedeTomarse(obj)) div.classList.add("bloqueado");
  });
}

construirMalla();
