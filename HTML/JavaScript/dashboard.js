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
    console.log("debugTest");
    $.ajax({
        type: "POST",
        url: "dashboard",
        error: function(req, err){
            console.log(err)
        },
        success: function(data) {
            console.log("debugTest");
            console.log(data);
            let games = data;
            let contener = document.getElementById("gameQuiz");
            for (let index = 0; index < games.length; index++) {
                const element = games[index];
                let oneGame = document.createElement("div");
                let button = document.createElement("form");
                button.setAttribute("method","post");
                button.setAttribute("action","/play");
                let input = document.createElement("input");
                input.setAttribute("type", "hidden");
                input.setAttribute("name", "title");
                input.setAttribute("value", element.title);
                let title = document.createElement("a");
                title.setAttribute("onclick", "this.parentNode.submit();");
                title.innerText = element.title;
                button.appendChild(input);
                button.appendChild(title);
                oneGame.appendChild(button);
                let creator = document.createElement("h4");
                creator.innerText = element.creator;
                oneGame.appendChild(creator);
                contener.appendChild(oneGame);
            }
        },
    })
}