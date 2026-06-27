//selecting popup box, popup overlay, button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


//selecting container, add-book, book-title-input, book-author-input, book-description-input

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()

    if(booktitleinput.value.trim()==="" || bookauthorinput.value.trim()===""){
        alert("Please...Fill out the Title and Author !...");
        return;
    }

    var existingTitles=container.querySelectorAll("h2");
    for (var i=0;i<existingTitles.length;i++){
        if(existingTitles[i].textContent.trim().toLowerCase()===booktitleinput.value.trim().toLowerCase()){
            alert("This book is already exists!...");
            return;
        }
    }
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
                   <h5>${bookauthorinput.value}</h5>
                   <p>${bookdescriptioninput.value}</p>
                   <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}

