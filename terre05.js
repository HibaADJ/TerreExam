  /*Program that fraction.
  input :  2 numbers 
  output :  fraction + rest*/
  if(process.argv[3] != 0 && process.argv[2] >= process.argv[3]){
    console.log("resultat: " + Math.floor(process.argv[2]/process.argv[3]));
    console.log("le reste: " + process.argv[2]%process.argv[3]);
  }
  else{
    console.log("Erreur");
  }
  