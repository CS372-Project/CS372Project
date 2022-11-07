
/*list of functionalities

delete Quiz - deletes the entire quiz

save quiz - saves the quiz (title, question cards[question(text), 
answer selction (radio(correct answer), text)]) and writes in jason format to send to server

delete question card - deletes the full question card

add selection - adds radio, textarea, and delete selection button

delete selection - deletes the full selection (radio and textarea)

add question - adds question card with deault structure (question(text), selection(two preset selections true and false), and with delete question card, delete
selection, and add selection buttons)

*/

//card border-dark mb-3
const container = document.querySelector(".container")

const delQuiz = document.getElementById("deleteQuiz");
// const delQuestion = document.getElementById("del-qs");
// delQuestion.addEventListener("click", () =>{

// })

const del = document.getElementsByClassName("select")
// const selctions = document.getElementsByClassName("qs-selection")

const add_Question = document.getElementById("add-question")
add_Question.addEventListener("click", add_card)



const question_arr = new Array(1);
const cards = document.querySelectorAll(".card")

//const sel = document.querySelectorAll(".radio-group .answer")



//adding selection row
function add_card(){
    var q_card = document.createElement("div")
    q_card.className = "card border-dark mb-3"

    var q_header = document.createElement("div")
    q_header.className = "card-title"
    q_header.innerText = "Question:"

    var del_q_btn = document.createElement("button")
    del_q_btn.innerText = "Delete"
    del_q_btn.className="btn-delete del-qs"
    del_q_btn.setAttribute("onclick", "delete_Card(this)")

    var q_text_div = document.createElement("div")
    q_text_div.className = "inupt input-text"

    var q_text_input = document.createElement("input")
    q_text_input.className = "card-question"
    q_text_input.type = "textarea"
    q_text_input.name = "question"

    var q_body = document.createElement("div")
    q_body.className = "card-body"
    var selection_header = document.createElement("h5")
    selection_header.innerText = "Answer Selection:"

    var q_selection_group = document.createElement("div")
    q_selection_group.className = "radio radio-group"
    
    for(var i = 0; i < 2; i++){
      add_selection(q_selection_group)
    }

    var q_add_selection = document.createElement("button")
    q_add_selection.className = "btn btn-add"
    q_add_selection.innerText = " Add selection"
    var icon = document.createElement("i")
    icon.className = "bi bi-plus-circle"
    q_add_selection.insertAdjacentElement("afterbegin", icon)
   

    q_body.appendChild(selection_header)
    q_body.appendChild(q_selection_group)
    q_body.appendChild(q_add_selection)
    q_text_div.appendChild(q_text_input)
    q_header.appendChild(del_q_btn)
  
    q_card.appendChild(q_header)
    q_card.appendChild(q_text_div)
    q_card.appendChild(q_body)
    container.insertBefore(q_card, add_Question)

}

function add_selection(q){

    var selection = document.createElement("div")
    selection.className = "qs-selection"

    var radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "qs-selection"

    var input = document.createElement("input")
    input.className = "answer"
    input.type = "textarea"

    var btn = document.createElement("button")
    btn.className = "btn btn-delete select"

    var i = document.createElement("i")
    i.className = "bi bi-x"

    btn.append(i)
    selection.append(radio)
    selection.appendChild(input)
    selection.appendChild(btn)
    q.appendChild(selection)
    
}

function delete_Card(e){

  var parent = e.parentElement.parentElement
 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    parent.remove()

   
  
}