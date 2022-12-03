/*list of functionalities
delete question card - deletes the full question card
add selection - adds radio, textarea, and delete selection button
delete selection - deletes the full selection (radio and textarea)
add question - adds question card with deault structure (question(text), selection(two preset selections true and false), and with delete question card, delete
selection, and add selection buttons)
*/

//card border-dark mb-3
const container = document.querySelector(".container")

const add_Question = document.getElementById("add-question")
add_Question.addEventListener("click", add_card)



function updateGroups() {
  let listOfCards = document.querySelectorAll(".card")
  let l = listOfCards.length

  for (var i = 0; i < l; i++) {
    var groups = listOfCards[i].lastElementChild
    var groups_selection = groups.children.item(1)
    var groups_sel_length = groups_selection.children.length
    //children are divs qs-selection that has the row in it
    for (var j = 0; j < groups_sel_length; j++) {
      var div_length = groups_selection.children.length
      var div = groups_selection.children.item(j)

      var div_radio = div.children.item(0)
      div_radio.setAttribute("name", `group${i + 1}`)

      //numbering radio buttons to get checked index in body
      div_radio.setAttribute("value", j)

      var div_answer = div.children.item(1)
      div_answer.setAttribute("name", `selection${i + 1}`)
    } // need to go through children of groups_selection in each rename inputs radio and text to card number (i)

  }

}


//adding selection row
function add_card() {

  //adds card container
  var q_card = document.createElement("div")
  q_card.className = "card border-dark mb-3"

  //adds question header to card
  var q_header = document.createElement("div")
  q_header.className = "card-title"
  q_header.innerText = "Question:"

  //adds delete_card button
  var del_q_btn = document.createElement("button")
  del_q_btn.innerText = "Delete"
  del_q_btn.className = "btn-delete del-qs"
  del_q_btn.setAttribute("onclick", "delete_Card(this)")

  //adds div container to hold textarea and delete_card button
  var q_text_div = document.createElement("div")
  q_text_div.className = "inupt input-text"

  //adds text area for question 
  var q_text_input = document.createElement("input")
  q_text_input.className = "card-question"
  q_text_input.type = "textarea"
  // q_text_input.name = "question"
  q_text_input.setAttribute("form", "saving")
  q_text_input.setAttribute("name", "question")

  //adds div container to hold answer selection
  var q_body = document.createElement("div")
  q_body.className = "card-body"
  var selection_header = document.createElement("h5")
  selection_header.innerText = "Answer Selection:"

  //creates checkbox group
  var q_selection_group = document.createElement("div")
  q_selection_group.className = "radio radio-group"

  //add default two selections to the card
  for (var i = 0; i < 2; i++) {
    add_selection(q_selection_group)
  }
  let r = q_selection_group.children.item(0)
  r.setAttribute("checked", 'true')

  var q_add_selection = document.createElement("button")
  q_add_selection.className = "btn btn-add"
  q_add_selection.innerText = " Add selection"
  q_add_selection.setAttribute("onclick", "add_selection(this)")
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
  updateGroups()
}


function add_selection(e) {
  var selection
  var check
  var input
  var btn
  var i
  var x = e.parentNode
  var group;
  selection = document.createElement("div")
  selection.className = 'qs-selection'

  check = document.createElement("input")
  check.type = "radio"
  check.name = `group`
  check.setAttribute("form", "saving")

  input = document.createElement("input")
  input.className = "answer"
  input.type = "textarea"
  input.setAttribute("form", "saving")
  input.setAttribute("name", "selection")

  btn = document.createElement("button")
  btn.className = "btn btn-delete select"
  btn.setAttribute("onclick", "delete_selection(this)")
  i = document.createElement("i")
  i.className = "bi bi-x"

  btn.append(i)
  selection.append(check)
  selection.appendChild(input)
  selection.appendChild(btn)

  //  checks where the call is coming from
  if (e.className === "radio radio-group") {
    e.appendChild(selection)
  }
  else {
    x = e.parentNode.children
    group = x[1]
    group.appendChild(selection)
  }
  updateGroups()
}

function delete_Card(e) {
  var parent = e.parentElement.parentElement

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  parent.remove()
}

function delete_selection(e) {
  var parent = e.parentElement

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  parent.remove()
}