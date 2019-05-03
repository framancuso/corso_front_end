function validanome(a){
    if(validateName(a)==false){
        document.querySelector("#fullname").style.border="1px solid red"
       
    }
}
function validamail(a){
    if(validateEmail(a)==false){
        document.querySelector("#email").style.border="1px solid red"
        
    }
}
function validanumero(a){
    if(validateNumber(a)==false){
        document.querySelector("#telephone").style.border="1px solid red"
        
    }
}
function mostra(){
    document.querySelector("#fullname").style.border="0"
    document.querySelector("#email").style.border="0"
    document.querySelector("#telephone").style.border="0"
    const name= document.querySelector("#fullname").value;
    const numero= document.querySelector("#telephone").value;
    const mail= document.querySelector("#email").value;
    const resultname=validateName(name);
    const resultnumber=validateNumber(numero)
    const resultmail=validateEmail(mail);
    const border="red solid 1px"
    console.log(resultname);
    console.log(resultnumber);
    console.log(resultmail);
    if(resultname==true && resultnumber==true && resultmail==true){
        document.querySelector(".popupno").classList.add("popupsi");
        document.querySelector(".popupno").classList.remove("popupno");
        document.querySelector(".sfondogrigiono").classList.add("sfondogrigiosi");
        document.querySelector(".sfondogrigiono").classList.remove("sfondogrigiono");
    }
    else{
        validanome(name);
        validamail(mail);
        validanumero(numero);
        alert("Controlla i dati");
    }
    
    document.querySelector("#redname").innerHTML=name;
    document.querySelector("#rednumber").innerHTML=numero;
    document.querySelector("#redmail").innerHTML=mail;

}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateName(name){
    var re= /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    return re.test(name);
}
function validateNumber(number){
    var re= /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    return re.test(number);
}
function nascondi(){
    document.querySelector(".popupsi").classList.add("popupno");
        document.querySelector(".popupsi").classList.remove("popupsi");
        document.querySelector(".sfondogrigiosi").classList.add("sfondogrigiono");
        document.querySelector(".sfondogrigiosi").classList.remove("sfondogrigiosi");
}

