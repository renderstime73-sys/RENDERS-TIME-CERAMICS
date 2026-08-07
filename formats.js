const formats = [
    {
        size: "12 × 24",
        width: 65,
        height: 130
    },
    {
        size: "24 × 24",
        width: 120,
        height: 120
    },
    {
        size: "24 × 48",
        width: 75,
        height: 150
    },
    {
        size: "8 × 48",
        width: 35,
        height: 170
    }
];


const grid = document.getElementById("formatsGrid");

formats.forEach(format=>{

    grid.innerHTML += `

    <div class="format-card">

        <div class="format-preview">

            <div
                class="tile"
                style="
                    width:${format.width}px;
                    height:${format.height}px;
                ">
            </div>

        </div>

        <h3>${format.size}</h3>

    </div>

    `;

});