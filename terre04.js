if(process.argv[2] > 0){
    if(process.argv[2] % 2 == 0){ 
        console.log("Paire");
    }
    else{
       console.log("Impaire");
    }
  }
else{
    console.log("Tu ne me la mettras pas à l’envers.");
}