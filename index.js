let txt = document.getElementById("CHG")
let save = document.getElementById("saved")

let blank = 0

function Go() {


    blank += + 1

    txt.textContent = blank

}



function Save(
) {
    let SaveNumb = blank
    save.textContent += " " + SaveNumb
}
// this resets results in order to log new query
function reset() {
    blank = 0
}

let infoMe = document.getElementById("info-el")
let person = {
    name: "Marquise",
    age: "19",
    country: "the United States"
}


function logData() {
    let info = person.name + " is " + person.age + " years old and lives in " + person.country
    infoMe.textContent = info
}
