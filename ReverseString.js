var reverseString = function(s=[]) {
    for(let i=0;i<s.length/2;i++){
      let temp=s[i]
      s[i]=s[s.length-(i+1)]
      s[s.length-(i+1)]=temp
    }
};

console.time("reverseString")

let s =["h","e","l","l","o"]

reverseString(s)

console.log(s);

console.timeEnd("reverseString")
