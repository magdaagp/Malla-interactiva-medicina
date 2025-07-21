const ramos = [
  {
    nombre: "Anatomía I",
    creditos: 6,
    requisitos: "Ninguno"
  },
  {
    nombre: "Fisiología I",
    creditos: 8,
    requisitos: "Anatomía II, Biología celular y molecular, Física"
  },
  {
    nombre: "Bioquímica",
    creditos: 4,
    requisitos: "Biología celular y molecular"
  },
  {
    nombre: "Ginecología - Obstetricia",
    creditos: 10,
    requisitos: "Cirugía"
  },
  {
    nombre: "Psiquiatría infantil",
    creditos: 2,
    requisitos: "Medicina general familiar II"
  }
  // ← Aquí agregaremos todos los demás ramos después
];

const mallaDiv = document.querySelector(".malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = "ramo";
  div.innerText = `${ramo.nombre} (${ramo.creditos} cr.)`;
  div.onclick = () => mostrarModal(ramo);
  mallaDiv.appendChild(div);
});

function mostrarModal(ramo) {
  document.getElementById("modal-nombre").innerText = ramo.nombre;
  document.getElementById("modal-creditos").innerText = ramo.creditos;
  document.getElementById("modal-requisitos").innerText = ramo.requisitos;
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
