$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
function clickPicture(){
    let file = document.getElementById("file");
    file.click();
}
function previewFile(){
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
         preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}
function getAllGameQuiz(){
    let games = [{title:"AGame", link:"https://www.google.com/", creator:"Mr. A"},{title:"BGame", link:"https://www.youtube.com/", creator:"Mr. B"}];
    let contener = document.getElementById("gameQuiz");
    for (let index = 0; index < games.length; index++) {
        const element = games[index];
        let oneGame = document.createElement("div");
        let title = document.createElement("a");
        title.innerText = element.title;
        title.href = element.link;
        oneGame.appendChild(title);
        let creator = document.createElement("h4");
        creator.innerText = element.creator;
        oneGame.appendChild(creator);
        contener.appendChild(oneGame);
    }
}