//optimize
var mergeAlternately = function(word1, word2) {
  let str=[];
  let len=(word1.length > word2.length) ? word1.length : word2.length;

  for(let i=0;i<len;i++){
      if(i<=word1.length-1) str.push(word1[i])
      if(i<=word2.length-1) str.push(word2[i])
  }

  return str.join("")
};