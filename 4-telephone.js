function telephoneCheck(str) {
  let counterNums = 0;
  let counterP = 0;
  let counterD = 0;
  let counterS = 0;
  console.log((str[str.length-1] >= '0' && str[str.length-1] <= '9') !== false);
  for(let i = 0; i < str.length;i++){
    if(str[i] >= '0' && str[i] <= '9'){
       counterNums++;
   }else if(str[i] === "(" ||str[i] === ")" ){
     counterP++;
   }else if(str[i] === " "){
     counterS++;
   }else if(str[i] === "-"){
     counterD++;
   }
  }let noNum = counterP +counterD;
  console.log(noNum);
  if(counterNums === 11 && str[0] !== "1" || counterNums > 11){
    return false;
  }else if (counterNums < 10){
    return false;
  }else if((str[0] >= '0' && str[0] <= '9') === false && noNum == 5){
    return false;
  }else if((str[str.length-1] >= '0' && str[str.length-1] <= '9') === false){
    return false;
  }
  else if(counterP % 2 === 0){
    return true;
  }else if (counterP % 2 !== 0){
    return false;
  }

}
telephoneCheck("1 (555) 555-5555");
//telephoneCheck("555-555-5555");
//telephoneCheck("2 (757) 622-7382");
