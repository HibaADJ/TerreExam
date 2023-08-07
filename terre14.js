let stat; 
for(i=2; i<process.argv.length-1; i++){
    if(process.argv[i+1]>process.argv[i]){
        stat = "triees";
    }
    else{
        stat = "Pas triees";
    }
   }
if(typeof stat == 'undefined'){
    console.log("Erreur")
   
}else{
    console.log(stat);
}