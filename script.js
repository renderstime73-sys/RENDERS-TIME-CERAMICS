
const collectionsGrid = document.getElementById("collectionsGrid");

collections.forEach(collection=>{

    collectionsGrid.innerHTML += `

    <div class="collection-card">

        <img src="${collection.imagen}">

        <div class="collection-content">

            <h3>${collection.nombre}</h3>

            <p>${collection.descripcion}</p>

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
