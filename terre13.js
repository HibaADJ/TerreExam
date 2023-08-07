let nb1 = process.argv[2];
let nb2 = process.argv[3];
let nb3 = process.argv[4];
let mid;
let t1 = nb2-nb1;
let t2 = nb3-nb2;
if(t1<0){
mid=nb1
}
else if(t2<0){
mid=nb3
}
else{
    console.log("something wrong")
}
console.log("The mid is :" + mid);