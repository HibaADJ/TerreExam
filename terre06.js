let argumentPhrase = process.argv;
let inversedPhrase = " ";
console.log(typeof argumentPhrase);
console.log(argumentPhrase);
console.log(argumentPhrase.length);
for(i=argumentPhrase.length - 1 ; i>1 ; i--){
  for(j=argumentPhrase[i].length - 1 ; j>=0 ; j--){
  inversedPhrase = inversedPhrase + argumentPhrase[i].charAt(j);
   }
   inversedPhrase = inversedPhrase + " " ;
}
console.log(inversedPhrase);