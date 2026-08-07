const formats = [
    {
        size: "12 × 24 in",
        image: "images/formats/12x24.jpg"
    },
    {
        size: "24 × 24 in",
        image: "images/formats/24x24.jpg"
    },
    {
        size: "24 × 48 in",
        image: "images/formats/24x48.jpg"
    },
    {
        size: "8 × 48 in",
        image: "images/formats/8x48.jpg"
    }
];

const formatsGrid = document.getElementById("formatsGrid");

formats.forEach(format => {

    formatsGrid.innerHTML += `
        <div class="format-card">

            <div class="format-image">
                <img src="${format.image}" alt="${format.size}">
            </div>

            <h3>${format.size}</h3>

        </div>
    `;

});