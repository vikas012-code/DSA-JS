/**
 * @param {string} s
 * @return {string}
 */



const palindromeCache = new Map
    
function isPalindromeCached(str) {
    if (palindromeCache.has(str)) {
        return palindromeCache.get(str)
    }

    let result=true
    let max=str.length-1
    for(let i=0;i<=str.length/2;i++){
        if(str[i]!=str[max]){
            result=false
            break
        }
        max--
    }

    palindromeCache.set(str,result)
    return result;
}


var longestPalindrome = function(s) {
    let substring=""

    if(s.length===1) return s
    if(s.length===2){
        if(s[0]==s[1]){
            return s
        }
        else{
            return s[0]
        }  
    }

    let l=0
    let r=0

    while(l>=s.length && r>=s.length){
        if(isPalindromeCached(s.slice(l,r))){
            if(s.slice(l,r).length>substring){
                substring=s.slice(l,r)
            }
        }
        if(r>=s.length){
            l++
            r=l
        }
        r++
    }

    return substring
};


console.log(longestPalindrome("aba"))
