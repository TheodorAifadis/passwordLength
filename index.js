let x = prompt("Type_Password");

while (x.length < 7){
  alert("för kort")
  x = prompt("testa igen")
}

while (x.length > 7){
  alert("för långt")
  x = prompt("testa igen")
}

if (x.length === 7){
  alert("korrekt")
}