
document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementsByClassName("bottone")[0].addEventListener("click",prova);
  function prova(){
    array=[1,2,3,4]
    var div1=document.getElementsByClassName("popupnone")[0];
    var div2=document.getElementsByClassName("content")[0];
    for(var i=0;i<array.length;i++){
      var acapo=document.createElement("p");
      var temp=document.createTextNode(array[i]);
      acapo.appendChild(temp);
      div2.appendChild(acapo);
  }
  div1.classList.add("popup");
  div1.classList.remove("popupnone");
  }
  document.getElementsByClassName("esci")[0].addEventListener("click",togli);
  function togli(){
    var div1=document.getElementsByClassName("popup")[0];
    var div2=document.getElementsByClassName("content")[0];
    while(div2.firstChild){
      div2.removeChild(div2.firstChild);
      }
      div1.classList.add("popupnone");
      div1.classList.remove("popup");
    }    
})