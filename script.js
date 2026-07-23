const imagenes = [

    {
        nombre: "Amiata Gris Oscuro",
        archivo: "TP6012B0034_AMIATA GRIS OSCURO 3D.jpg"
    },
{
    nombre: "Gardenia",
    archivo: "TC6012A0210_GARDENIA.jpg"
},

{
    nombre: "Asleth",
    archivo: "TC6012A0320_ASLETH 3D.jpg"
},

{
    nombre: "Dozza Elite",
    archivo: "TC6012A0510_DOZZA ELITE 3D.jpg"
},

{
    nombre: "Positano",
    archivo: "TC6012A0580_POSITANO 3D.jpg"
},

{
    nombre: "Nevado",
    archivo: "TC6012A0980_NEVADO.jpg"
},

{
    nombre: "Brescia",
    archivo: "TC6060A0010-brescia.jpg"
},

{
    nombre: "Perla",
    archivo: "TC6060A0120-perla.jpg"
},

{
    nombre: "Seda",
    archivo: "TC6060A0290_SEDA.png"
},

{
    nombre: "Bellagio",
    archivo: "TC6060A0550_BELLAGIO.png"
},

{
    nombre: "Paraty",
    archivo: "TC6060A0950-PARATY.jpg"
},

{
    nombre: "Zara",
    archivo: "TC6012A0060_ZARA.png"
},

{
    nombre: "Statuario",
    archivo: "TC6060A0960_STATUARIO.png"
},

{
    nombre: "Marquis Beige Soft",
    archivo: "TP6012A0081_MARQUIS BEIGE SOFT_FINAL.jpg"
},

{
    nombre: "Arcadia Beige",
    archivo: "TP6012A0200_ARCADIA BEIGE 3D.jpg"
},

{
    nombre: "Carrara Gold",
    archivo: "TC6012A0140_CARRARA GOLD_FINAL.png"
},

{
    id: "corezzi-beige",
    nombre: "Corezzi Beige",
    archivo: "TP6012B4011_COREZZI BEIGE.jpg",
    descripcion: "Inspired by the beauty of natural marble, it is designed to create warm, bright, and sophisticated spaces. Its delicate beige and ivory veining adds depth and harmony, delivering a refined aesthetic that seamlessly complements both residential and commercial projects.",
    formatos: [
    {
        ancho: 60,
        alto: 120
    },
      
    ],
    acabado: "Matte",
    video: "videos/corezzi.mp4",
    ficha: "pdf/corezzi.pdf",
    renders: [
        "TP6012B4011_COREZZI BEIGE.jpg",
        "COREZZI_TP6012B4010.png",
        
       ] 
},

{
    id: "olmec-beige",

    nombre: "Olmec Beige",
    archivo: "TA3060A0180_OLMEC BEIGE.jpg",
    descripcion: "This matte-finish porcelain tile faithfully reproduces the subtle beauty of natural tone, combining soft light gray tones with delicate textural variations and mineral-inspired nuances. Its design achieves a refined visual balance, where organic details and subtle veining create an authentic, serene, and sophisticated surface. Its uniform appearance and neutral tones enhance a sense of spaciousness, brightness, and tranquility, making it an excellent choice for residential and commercial spaces seeking a modern and timeless aesthetic. The matte finish further emphasizes the natural character of the design, delivering an elegant and understated look",
    
    formatos: [
    {
        ancho: 60,
        alto: 120
    },
      {
        ancho: 30,
        alto: 60
    }
    ],

    acabado: "Matte",
    video: "videos/olmec.mp4",
    ficha: "pdf/olmec.pdf",
    renders: [
        "TA3060A0180_OLMEC BEIGE.jpg",
        "UP6012A0181_OLMEC GRIS CLARO 3D_.jpg",
        "UP6012A0181_OLMEC GRIS CLARO 3D.jpg"
       ] 
},




{
    id: "husen",
    nombre: "Husen",
    archivo: "TT2012B4210_HUSEN.jpg",
    descripcion: "The warmth of natural wood combines with the durability of our high-quality porcelain tile in a 8 x 48 in format. With highly realistic grain patterns and a timeless aesthetic, this tile strikes the perfect balance between comfort, luxury, and durability for any architectural space. It is designed to offer the tactile and visual beauty of natural wood while ensuring the technical superiority and durability characteristic of the material.",
     formatos: [
    {
        ancho: 20,
        alto: 120
    }
],
    acabado: "Matte",
    video: "videos/HUSEN_2.mp4",
    ficha: "pdf/husen.pdf",
    renders: [
        "TT2012B4210_HUSEN.jpg",
        "HUSEN_1.png",

        ]
},





{

    id: "laurent-gold",

    nombre: "Laurent Gold",

    archivo: "TW6012C0652_LAURENT GOLD 3D.jpg",

    descripcion:
    "La elegancia del mármol negro se redefine en esta superficie de acabado High Gloss, donde la profundidad del fondo oscuro se realza con delicadas vetas doradas que recorren la pieza de manera orgánica y sofisticada. Su brillo espejo aporta amplitud, luminosidad y una sensación de lujo contemporáneo, convirtiéndolo en una opción ideal para proyectos residenciales y comerciales de alto nivel.",

    formatos: [
    {
        ancho: 60,
        alto: 120
    }
],

    acabado: "Polished",

    video: "videos/laurent.mp4",

    ficha: "pdf/Laurent-Gold.pdf",

    renders: [
        "TW6012C0652_LAURENT GOLD 3D.jpg",
        "laurent2.jpg",
        "laurent3.jpg"
    ]
}



];


const galeria = document.getElementById("galeria");

imagenes.forEach((imagen, indice) => {

    galeria.innerHTML += `

        <div class="card" onclick="abrirImagen(${indice})">

            <img src="images/${imagen.archivo}" alt="${imagen.nombre}">

            <h3>${imagen.nombre}</h3>

        </div>

    `;

});

function abrirImagen(indice){

    localStorage.setItem(
        "productoSeleccionado",
        JSON.stringify(imagenes[indice])
    );

    window.location.href = "producto.html";

}

document.getElementById("cerrar").onclick = function(){

    document.getElementById("lightbox").style.display = "none";

}


