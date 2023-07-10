console.log(typeof process.argv[2]);
console.log(typeof process.argv[3]);
if(process.argv[3] < 0 ){
    console.log("Erreur");
}
else{
    console.log(Math.pow(process.argv[2],process.argv[3]));
}