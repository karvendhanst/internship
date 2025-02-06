// Todo Application 

let btn = document.querySelector("button")

let ul = document.querySelector("ul")

btn.addEventListener("click", ()=>{
    let userInput = document.querySelector("input").value
    
    let li = document.createElement("li")

    li.innerHTML = userInput

    ul.append(li)

    li.addEventListener("dblclick", ()=>{
        li.style.textDecoration = "line-through"
    })
})

