  /*Program that displays alphabets.
  input :  argument statring alphabet 
  output :  Display alphabets*/
  let startingAlphabet = process.argv[2];
  let alphabetsToDisp = " " ;
  let alphabets= "abcdefghijklmnopqrsuvwxyz";
  for(i=0 ; i<alphabets.length ; i++){
    if(alphabets.charAt(i)==startingAlphabet){
        alphabetsToDisp=alphabets.slice(i,alphabets.length);
        break;
    }
  }
  console.log(alphabetsToDisp);
  