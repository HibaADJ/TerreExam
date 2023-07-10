let nombre = process.argv[2];
let decision = false;
for(i=nombre-1 ; i>1 ; i--){
if(nombre%i == 0 && nombre>2){
    decision = true;
}
}
if(decision){
    console.log("Non "+ nombre +" n'est un nombre premier.");
}
else{
    console.log("Oui "+ nombre +" est un nombre premier.");
}
