function forLoop(array){
  for(var i = 0; i < 26; i++){
   if(i === 0){
     array.push(['I am 1 strange loop.']);
     return array
   } else {
     array.push([`I am ${i} strange loops.`]);
     return array
  }
}
}

function whileLoop(n){
  while(n > 0){
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(num){
  var i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
  }
  
  do{
    console.log("I run once regardless.");
  } while(incrementVariable() < num);
}


