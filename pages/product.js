fetch(fetch ("http://localhost:3000/api/teddies")
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value){
    console.log(value);
    PushTeddies(value);
})
.catch(function(error){}));


let select = document.getElementById("select");
let options = ["0"]["1"]["2"] ["3"] ["4"];
for(let i = 0;i < "options.length"; i++){
    let opt =option[i];
    let el = document.createElement("options");
    el.textcontent = opt
    select.appendChild(el);
}



    