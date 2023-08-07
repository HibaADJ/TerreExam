  /*a program that displays its file name.
  input : filepath 
  output : filename */

  let filePath = `Filename is ${__filename}`
  let fileName = " ";
  for (i=filePath.length; i>0; i--){
  if (filePath.charAt(i)=="/"){
    break;
  }
  else{
    fileName = filePath.charAt(i).concat(fileName);
  }
  }
  console.log(fileName);