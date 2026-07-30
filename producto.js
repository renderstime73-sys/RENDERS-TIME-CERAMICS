const producto = JSON.parse(
    localStorage.getItem("productoSeleccionado")
);

document.getElementById("nombre").textContent =
producto.nombre;

document.getElementById("imagenPrincipal").src =
"images/" + producto.archivo;

const miniaturas = document.getElementById("miniaturas");

producto.renders.forEach(render => {

    const item = document.createElement("div");
    item.className = "miniatura-item";

    const img = document.createElement("img");
    img.src = "images/" + render.imagen;
    img.className = "miniatura";

    img.onclick = function(){

        document.getElementById("imagenPrincipal").src =
        "images/" + render.imagen;

    };

    const titulo = document.createElement("p");
    titulo.className = "miniatura-titulo";
    titulo.textContent = render.nombre;

    item.appendChild(img);
    item.appendChild(titulo);

    miniaturas.appendChild(item);

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


if(producto.recorrido){

    document.getElementById("tour360").src =
    producto.recorrido;

}else{

    document.getElementById("tour360").style.display = "none";

}


// ===============================
// APPLICATIONS
// ===============================

const iconos = {
    "Residential": "fa-house",
    "Commercial": "fa-building",
    "Floor": "fa-border-all",
    "Wall": "fa-grip-lines-vertical",
    "Bathroom": "fa-bath",
    "Kitchen": "fa-utensils",
    "Living Room": "fa-couch",
    "Bedroom": "fa-bed",
    "Outdoor": "fa-tree",
    "Terrace": "fa-mountain-sun"
};

const applications = document.getElementById("applications");

if(producto.aplicaciones){

    producto.aplicaciones.forEach(app=>{

        applications.innerHTML += `
            <div class="app-item">
                <i class="fa-solid ${iconos[app]}"></i>
                <span>${app}</span>
            </div>
        `;

    });

}