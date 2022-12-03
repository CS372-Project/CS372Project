
const save = document.getElementById('saveQuiz')
save.addEventListener('submit', sendQuiz)

const del = document.getElementById('deleteQuiz')
del.addEventListener('submit', delQuiz)

const eID = window.sessionStorage.getItem("email")
const title = document.getElementById('qz-title')

function sendQuiz() {
    let form = document.forms['saving']

    getCreator(form)
    numberofQ(form)
    return validateTitle()
}

function numberofQ(f) {
    let c = document.querySelectorAll(".card")
    let num = document.createElement('input')
    num.setAttribute('type', 'hidden')
    num.setAttribute('name', 'count')
    num.setAttribute('value', `${c.length}`)
    f.appendChild(num)
}


function delQuiz() {

    let form = document.forms['del']

    let flag = validateTitle()
    getCreator(form)
    if (flag === false) return false
    else {
        title.setAttribute('form', 'del')
    }
    return true
}


async function getCreator(f) {
    return new Promise(() => {
        let CREATOR = document.createElement('input')
        let SIGNAL = document.createElement('input')
        if (f.id === "del") {
            CREATOR.setAttribute('form', 'del')
            SIGNAL.setAttribute("form", 'del')
            SIGNAL.setAttribute("value", 'del')

        } else {
            CREATOR.setAttribute('form', 'saving')
            SIGNAL.setAttribute("form", 'saving')
            SIGNAL.setAttribute("value", 'saving')
        }

        if (!f['creator']) {
            CREATOR.setAttribute('type', 'hidden')
            CREATOR.setAttribute('name', 'creator')
            SIGNAL.setAttribute("type", 'hidden')
            SIGNAL.setAttribute("name", 'signal')
            CREATOR.setAttribute('value', eID)
            f.appendChild(CREATOR)
            f.appendChild(SIGNAL)
        }
    })
}

function validateTitle() {

    if (title.value != null && title.value != "") {
        return true
    }
    else alert("The title of the quiz cannot be empty")
    return false

}






