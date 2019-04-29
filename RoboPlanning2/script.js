document.addEventListener('DOMContentLoaded', function(event) {
    var scritta1=document.getElementsByClassName("scritte2")[0]
    var scritta2=document.getElementsByClassName("scritte2")[1]
    var scritta3=document.getElementsByClassName("scritte2")[2]
    var bottone1=document.getElementsByClassName("bottone")[0]
    var bottone2=document.getElementsByClassName("bottone")[1]
    var bottone3=document.getElementsByClassName("bottone")[2]
    scritta2.classList.add("displaynone");
    scritta3.classList.add("displaynone");
    bottone1.addEventListener("click",mostra1)
    function mostra1(){
        scritta1.classList.remove("displaynone")
        scritta1.classList.remove("banana")
        scritta2.classList.add("displaynone")
        scritta3.classList.add("displaynone")
    }
    bottone2.addEventListener("click",mostra2)
    function mostra2(){
        scritta2.classList.remove("displaynone")
        scritta1.classList.add("displaynone")
        scritta3.classList.add("displaynone")
    }
    bottone3.addEventListener("click",mostra3)
    function mostra3(){
        scritta3.classList.remove("displaynone")
        scritta1.classList.add("displaynone")
        scritta2.classList.add("displaynone")
    }
    })