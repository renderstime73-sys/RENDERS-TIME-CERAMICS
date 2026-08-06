
// ===================================
// COLLECTIONS
// ===================================

const collectionsGrid = document.getElementById("collectionsGrid");

// Obtener una sola colección por nombre
const collections = [...new Map(
    imagenes.map(item => [
        item.collection,
        {
            nombre: item.collection,
            imagen: "images/" + item.archivo,
            descripcion: item.descripcion
        }
    ])
).values()];

// Crear tarjetas
collections.forEach(collection => {

    collectionsGrid.innerHTML += `

        <div class="collection-card"
             onclick="filtrarCollection('${collection.nombre}')">

            <img src="${collection.imagen}" alt="${collection.nombre}">

            <div class="collection-content">

                <h3>${collection.nombre}</h3>

                <p>
                    ${collection.descripcion.substring(0,120)}...
                </p>

            </div>

        </div>

    `;

});

const finishes = [
    {
        nombre: "Stone effect",
        imagen: "images/stone.jpg",
        effect: "Stone"
    },
    {
        nombre: "Polished effect",
        imagen: "images/white_marble.jpg",
        effect: "Polished"
    },
    {
        nombre: "Matte effect",
        imagen: "images/matte_marble.jpg",
        effect: "Matte"
    },
    {
        nombre: "Wood effect",
        imagen: "images/wood.jpg",
        effect: "Wood"
    }
];

const finishesGrid = document.getElementById("finishesGrid");

finishes.forEach(finish => {

    finishesGrid.innerHTML += `

    <div class="finish-card">

        <img src="${finish.imagen}" alt="${finish.nombre}">

        <div class="finish-overlay">

            <span>${finish.nombre}</span>

            <i class="fa-solid fa-arrow-up-right-from-square"></i>

        </div>

    </div>

    `;

});



const galeria = document.getElementById("galeria");

function mostrarGaleria(lista){

    galeria.innerHTML = "";

    lista.forEach(imagen => {

        const indice = imagenes.findIndex(p => p.id === imagen.id);

        galeria.innerHTML += `

            <div class="card" onclick="abrirImagen(${indice})">

                <img src="images/${imagen.archivo}" alt="${imagen.nombre}">

                <h3>${imagen.nombre}</h3>

            </div>

        `;

    });

}

mostrarGaleria(imagenes);

function abrirImagen(indice){

    window.location.href =
    `producto.html?id=${imagenes[indice].id}`;

}

const buscar = document.getElementById("buscar");

buscar.addEventListener("input", function () {

    const texto = this.value.toLowerCase().trim();

    const resultados = imagenes.filter(producto => {

        const formatos = producto.formatos
            .map(f => `${f.ancho}x${f.alto}`)
            .join(" ");

        return (
            producto.nombre.toLowerCase().includes(texto) ||
            producto.descripcion.toLowerCase().includes(texto) ||
            producto.acabado.toLowerCase().includes(texto) ||
            formatos.includes(texto)
        );

    });

    mostrarGaleria(resultados);

});


function filtrarCollection(nombre){

    const resultados = imagenes.filter(producto =>
        producto.collection === nombre
    );

    mostrarGaleria(resultados);

    window.scrollTo({
        top: document.querySelector(".products-home").offsetTop - 80,
        behavior: "smooth"
    });

}