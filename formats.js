const formats = [

{
    size:"60×120",
    width:70,
    height:140
},

{
    size:"60×60",
    width:120,
    height:120
},

{
    size:"80×80",
    width:140,
    height:140
},

{
    size:"120×120",
    width:155,
    height:155
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