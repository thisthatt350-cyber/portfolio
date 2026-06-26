    //selecting ul
    var a=document.getElementById("three")
    //selecting input
    var c=document.getElementById("one")
    //selecting button
    var b=document.getElementById("two")


    function x()
    {
        if(c.value.trim()==""){
            alert("please...Enter a task!...")
        }

        else{
        var b=document.createElement("li")
        b.innerHTML=c.value+"<button onclick='y(event)'>Delete</button>"
        a.append(b)
        c.value=""
        }
    }

    function y(event)
    {
        event.target.parentElement.remove()
    }

    c.addEventListener("keypress",function(event){
        if(event.key=="Enter"){
            x();
        }
    }
);