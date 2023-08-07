let heure24 = process.argv[2];
let minutes = process.argv[3];
let heure12;

if(heure24<24 && heure24>=0 && minutes>=0 && minutes<60){
    if(0<heure24 && heure24<12){
        heure12=heure24;
        console.log("Il est  " + heure12 + " : " + minutes + "  AM ");
    }
    else if(heure24==12){
        heure12=heure24;
        console.log("Il est  " + heure12 + " : " + minutes + "  PM ");
    } 
    else if (12<heure24 && heure24<=23){
        heure12 = heure24-12;
        console.log("Il est  " + heure12 + " : " + minutes + "  PM ");
    }
    else if(heure24==0){
        heure12=12;
        console.log("Il est  " + heure12 + " : " + minutes + " AM");
    
    }
}
else{
    console.log("Entre un format valide")
}