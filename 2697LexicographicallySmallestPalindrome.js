//optimize
var makeSmallestPalindrome = function(s) {
  let i=0
  let j=s.length-1
  let arrStr=s.split("")

  while(i<j){
      if(arrStr[i]!=arrStr[j]){
          if(arrStr[i].charCodeAt(0) < arrStr[j].charCodeAt(0)){
              arrStr[j]=arrStr[i]
              continue
          }
          else{
              arrStr[i]=arrStr[j]
              continue
          }
      }
      i++
      j--
  }
  return arrStr.join("")
};