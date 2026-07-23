const producto = JSON.parse(
    localStorage.getItem("productoSeleccionado")
);

document.getElementById("nombre").textContent =
producto.nombre;

document.getElementById("imagenPrincipal").src =
"images/" + producto.archivo;

const miniaturas = document.getElementById("miniaturas");

producto.renders.forEach(render => {

    const img = document.createElement("img");

    img.src = "images/" + render;

    img.className = "miniatura";

    img.onclick = function(){

        document.getElementById("imagenPrincipal").src =
        "images/" + render;

    };

    miniaturas.appendChild(img);

});

document.getElementById("descripcion").textContent =
producto.descripcion;

document.getElementById("acabado").textContent =
producto.acabado;

const formatos = document.getElementById("formatos");

producto.formatos.forEach(formato => {

    const card = document.createElement("div");
    card.className = "formato-card";

    const figura = document.createElement("div");
    figura.className = "formato-figura";

    figura.style.aspectRatio = `${formato.ancho} / ${formato.alto}`;

    const texto = document.createElement("p");
    texto.textContent = `${formato.ancho} × ${formato.alto} cm`;

    card.appendChild(figura);
    card.appendChild(texto);

    formatos.appendChild(card);

});

document.getElementById("video").src =
producto.video;

document.getElementById("ficha").href =
producto.ficha;