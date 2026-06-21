//optimize
var lengthOfLongestSubstring = function(s) {
  if(s.length===0) return 0
  max=1
  let copy=""
  copy+=s[0]
  for(let i=1;i<s.length;i++){
      
      if(copy.includes(s[i])){

          let index = copy.indexOf(s[i])

          let newcopy = copy

          copy = newcopy.slice(index+1)
      }
      
      copy+=s[i]

      if(copy.length>max) max=copy.length
  }
  return max
};
