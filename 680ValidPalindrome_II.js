//optimize
var validPalindrome = function(s) {
  let i=0
  let j=s.length-1
  let indexOfLeft=null
  let indexOfRight=null
  let oneChance=true
  while(i<j){
      if(s[i]!=s[j]){
          if(indexOfLeft===null){
              indexOfLeft=i
              indexOfRight=j
              i++
              continue
          }

          if(oneChance){
              i=indexOfLeft
              j=indexOfRight-1
              oneChance=false
              continue
          }   

          return false
      }
      i++
      j--
  }
  return true
};