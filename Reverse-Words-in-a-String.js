var reverseWords = function(s) {
let str = s.trim().split(' ')
let newStr = str.filter((val)=> val.trim().length>=1)
let j= newStr.length-1;
for (let i=0; i<newStr.length/2; i++){
    let temp = newStr[i]
    newStr[i] = newStr[j]
    newStr[j] = temp
    j--
}
return newStr.join(' ')
};  

console.time()
console.log(reverseWords("a good   example"))
console.timeEnd()