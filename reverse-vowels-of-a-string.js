var reverseVowels = function(s='') {
    let str = s.split('')
    let vowal ="aieou"

    let i=0;
    let j=s.length-1;

    while(i<j){
        if(vowal.includes(s[i]?.toLowerCase()) && vowal.includes(s[j]?.toLowerCase())){
            str[j] = s[i]
            str[i] = s[j]

            i++
            j--
        }
        else{
            if(!vowal.includes(s[i]?.toLowerCase())){
                i++
            }
            if(!vowal.includes(s[j]?.toLowerCase())){
                j--
            }
        }
    }

return str.join('')
};

console.time()
console.log(reverseVowels("IceCreAm"))
console.timeEnd()
