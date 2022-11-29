$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
function clickPicture(){
    let file = document.getElementById("file")
    file.click()
}
function previewFile(){
    console.log("debug1")
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
         preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}