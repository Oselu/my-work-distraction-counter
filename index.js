let Scoresheet= document.getElementById("score-sheet")
let ForSaveButton= document.getElementById("for-save-button")
let count=0

function Distraction () {
    count= count+1
    Scoresheet.textContent=count
}

function save () {
let  CountRecord= count + " - "
ForSaveButton.textContent= ForSaveButton.textContent + CountRecord
Scoresheet.textContent=0
count=0

}