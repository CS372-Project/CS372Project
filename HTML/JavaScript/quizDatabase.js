

const save = document.getElementById('saveQuiz')
save.addEventListener('submit', sendQuiz)

const del = document.getElementById('deleteQuiz')
del.addEventListener('submit', delQuiz)

const eID = window.sessionStorage.getItem("email")
const title = document.getElementById('qz-title')

function sendQuiz() {
    let form = document.forms['saving']

    getCreator(form)
    numberSelection()
    grouping()
    return false
    // return validateTitle()


}

function delQuiz() {

    let form = document.forms['del']

    getCreator(form)
    let flag = validateTitle()

    if (flag === false) return false
    else {
        title.setAttribute('form', 'del')
    }
    return true

}

function numberSelection() {
    let form = document.forms['saving']['qs-selection']
    let i = 0;
    for (i; i < form.length; i++) {
        form[i].setAttribute('value', `${i}`)
    }
}



async function getCreator(f) {
    return new Promise(() => {
        let CREATOR = document.createElement('input')
        let SIGNAL = document.createElement('input')
        console.log(f.id)
        if (f.id === "del") {
            CREATOR.setAttribute('form', 'del')
            SIGNAL.setAttribute("form", 'del')
            SIGNAL.setAttribute("value", 'del')

        } else {
            CREATOR.setAttribute('form', 'saving')
            SIGNAL.setAttribute("form", 'saving')
            SIGNAL.setAttribute("value", 'saving')
        }

        CREATOR.setAttribute('type', 'hidden')
        CREATOR.setAttribute('name', 'creator')
        SIGNAL.setAttribute("type", 'hidden')
        SIGNAL.setAttribute("name", 'signal')
        CREATOR.setAttribute('value', eID)
        f.appendChild(CREATOR)
        f.appendChild(SIGNAL)
    })
}

function validateTitle() {

    if (title.value != null && title.value != "") {
        return true
    }
    else alert("The title of the quiz cannot be empty")
    return false

}

function grouping() {
    let form = document.forms['saving']['question']
    let len = form.length
    console.log("size of questions\n")
    console.log(len)
    console.log(question_parent)

    let array = []
    for (let i = 0; i < len; i++) {
        let question_parent = form[0].parentNode
        console.log(question_parent)
    }
}




