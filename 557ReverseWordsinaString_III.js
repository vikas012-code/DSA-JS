//optimize
var reverseWords = function(s) {
  let words=s.split(" ")

  let reverse=''

  for(let i=0;i<words.length;i++){
      for(let j=words[i].length-1;j>=0;j--){
          reverse=reverse+words[i][j]
      }
      if(i!=words.length-1)reverse+=" "
  }

  return reverse
};