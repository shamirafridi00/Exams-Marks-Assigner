let noOfStudents = document.getElementById("input-no")
let upper = document.getElementById("input-upper")
let lower = document.getElementById("input-lower")
let listOFStudents = document.getElementById("list-students")
let spinButton = document.getElementById("spin-Button")
let storage = []
let result

function numberGenerator() {
    min = Math.ceil(lower.value);
    max = Math.floor(upper.value);
    return Math.floor(Math.random() * (max - min + 1) + min); 
 
}

function getList() {

    for(let i=0; i<noOfStudents.value; i++){
        result = numberGenerator()
        storage.push(result)
    }
    console.log(storage)
    return storage  
  }
  spinButton.addEventListener("click",function(){
    getList()

    let listItems = ""
    for (let i = 0; i < storage.length; i++) {
        listItems += `
            <li>
                    ${storage[i]}
                </a>
            </li>
        `
    }
    listOFStudents.innerHTML = listItems
})


