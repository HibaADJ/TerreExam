/*Create a program that displays the alphabet in lowercase letters, followed by a line break.
Input : nothing
Output : alphabet in lowercase */

let alphabets= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alphabetsToDisp = " " ;
for(i=0;i<alphabets.length;i++){
 alphabetsToDisp = alphabetsToDisp + alphabets[i].toString();
}
console.log(alphabetsToDisp + '\n');