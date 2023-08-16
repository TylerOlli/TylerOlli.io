// Select color input

function changeColor(){
        $('td').click(function () {
            $(this).css('background-color', $('#colorPicker').val());
        });
};

// Select size input

const table = document.getElementById("pixelCanvas");
const numRows = document.querySelectorAll("tr").length;
const numCols = document.querySelectorAll("td").length;

// Creates the grid

function makeGrid(){
    $("#canvasContainer h2").remove();
    $("#pixelCanvas tr").remove();
    $("#canvasContainer input").remove();
    $("#giphy").remove();
    $("#canvasContainer").append('<input type="button" onclick="resetGrid()" value="Reset" class="btn btn-primary btn-sm">')
    $("table").css('outline-style', 'solid')
    $(".pickacolor").remove();
    $("#canvasContainer").prepend('<h2 id="designCanvas">Design Canvas</h2>')
    $("#canvasContainer").prepend('<input type="color" id="colorPicker" value="#ffffff">')
    $("#canvasContainer").prepend('<h4 class="pickacolor">Pick A Color</h4>')
    $("#canvasContainer").append('<input type="button" onclick="saveImage()" value="Save" class="btn btn-primary btn-sm">')
    var inputHeight = document.getElementById("inputHeight").value;
    var inputWeight = document.getElementById("inputWeight").value;
    var numberHeight = Number(inputHeight);
    var numberWeight = Number(inputWeight);

    for (var i = numRows; i < numberHeight; i++) {
        var ii = 0;
        $('#pixelCanvas').append("<tr>");
        
    }

    for (var i = numCols; i < numberWeight; i++) {
        $('tr').append("<td class='add' onclick='changeColor()'>");
    }
    $("td").css('border', '1px solid #696969');
}

// Resets Grid

function resetGrid(){
    $("td").css('background-color', '');
    $("td").css('border', '1px solid #696969');
}

// Saves design to a PNG image

function saveImage() {
    $("td").css('border','1px solid black');
    $("tr").css('border-radius','0px');
    html2canvas(pixelCanvas).then(function(canvas) {
                document.body.appendChild(canvas);
                let imageURI = canvas.toDataURL();
                let myLink = document.createElement('a');
                myLink.download = "yourart.png";
                myLink.href = imageURI;
                document.body.appendChild(myLink);
                myLink.click();
    });
}