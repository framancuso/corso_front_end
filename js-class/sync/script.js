/*const list=[
    {
    "ID":1,
    "NAME":"ANDREA",
    "COGNOME":"ROSSI",
    "GENERE":"MASCHIO",
    "PROFESSIONE":"DEV"
    },
    {
    "ID":2,
    "NAME":"MARCO",
    "COGNOME":"BIANCHII",
    "GENERE":"MASCHIO",
    "PROFESSIONE":"MURATORE"
    },
    {
    "ID":3,
    "NAME":"FEDERICA",
    "COGNOME":"COLOMBO",
    "GENERE":"FEMMINA",
    "PROFESSIONE":"IMPIEGATA"    
    }
];
*/


    
fetch("./response.json").then(response => 
       response.json().then(data => ({
           data:data,
           status: response.status
       })) .then(res => {
           //console.log(res.status,res.data)
           const list=res.data;
           function display(item) {
            const li = document.createElement("li");
            li.setAttribute("id",item.ID);
            li.setAttribute("onclick","mostra(event.target)")
            li.textContent= item.NAME + " " + item.COGNOME;
            document.querySelector("ul").appendChild(li);
            const div= document.createElement("div");
            div.setAttribute("class","content");
            li.appendChild(div);
        }
            list.forEach((item) => display(item) )

       }));
function mostra(e){
    //console.log(e);
    const id=e.getAttribute("id");
   // console.log(id);
    fetch("./response.json").then(response => 
        response.json().then(data => ({
            data:data,
            status: response.status
        })) .then(res => {
                const persone=(res.data).filter(element=>element.ID==id);
               // console.log(persone[0])
                persone.forEach((element,index) => {
                    //console.log(element)
                    const arraykeys=Object.keys(element);
                    arraykeys.forEach((attr)=> {
                        console.log(element["NAME"])
                        //console.log(element[attr])
                        document.querySelector("#result").innerHTML=(""+attr+":"+element[attr])
                    })
                })
                ;
            }));
        };