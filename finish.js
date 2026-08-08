const parametros = new URLSearchParams(window.location.search);

const effect = parametros.get("effect");

const titulo = document.getElementById("finishTitle");
const descripcion = document.getElementById("finishDescription");
const galeria = document.getElementById("finishGallery");


titulo.textContent = `${effect} Effect`;

descripcion.textContent =
    `Explore our porcelain tile collections with ${effect.toLowerCase()} finishes.`;


const resultados = imagenes.filter(producto =>
    producto.effect === effect
);


resultados.forEach(producto => {

    const card = document.createElement("div");

    card.className = "card";

    card.onclick = function(){

        window.location.href =
            `producto.html?id=${producto.id}`;

    };


    card.innerHTML = `

        <img
            src="images/${producto.archivo}"
            alt="${producto.nombre}"
        >

        <h3>${producto.nombre}</h3>

    `;


    galeria.appendChild(card);

});