
    var a=document.getElementById("input")
    var b=document.getElementById("result")
    var c=document.getElementById("score")
    var d=Math.floor(Math.random()*10)+1
    var total=10
    var re=document.getElementById("restart")


    function check(){
        var e=a.value

         if(total<=0){
                alert("Game over!...please click play again...")
                return
        }

        if(d==Number(e)){
            b.textContent="right"
            alert("you won...")
            re.style.display("inline")
        }

        else{
            total=total-1
            c.textContent="score :"+total

            if(Number(e)<d){
                b.textContent="wrong!...Too low"
            }
            else{
                b.textContent="wrong!...Too high"
            }
            re.style.display="inline"
            a.value=""
        }
    }
    
    function restart(){
        total=10
        d=Math.floor(Math.random()*10)+1
        c.textContent="score :"+total
        b.textContent="you are right or wrong"
        re.style.display="none"
    }
