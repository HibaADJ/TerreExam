let heure12 = process.argv[2];
let minutes = process.argv[3];
let AmPm = process.argv[4];
let heure24;

if(heure12<13 && heure12>=0 && minutes>=0 && minutes<60){
if(heure12==12){
if(AmPm == 'AM'){
    console.log("Il est  " + '00' + " : " + minutes );
}
else{
    console.log("Il est  " + '12' + " : " + minutes );
}
}
else {
if(heure12<12 && AmPm=='AM'){
    heure24=heure12;
    console.log("Il est  " + heure24 + " : " + minutes );
}
else{
    heure24=12+Number(heure12);
    console.log("Il est  " + heure24 + " : " + minutes );
}
}
}

else{
    console.log("Entre un format valide")
}
