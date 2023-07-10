if(process.argv.length!=3  ||  typeof process.argv[2] != String){
    console.log("Erreur");
}
else{
    console.log("Character number " + process.argv[2].length);
}