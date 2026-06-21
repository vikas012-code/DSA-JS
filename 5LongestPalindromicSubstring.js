//optimize
/**
 * @param {string} s
 * @return {string}
 */
function isPal(str,p,q){
    let i=p
    let j=q

    let l=0
    let r=0

    while(i>0 || j<str.length){
        if(str[i]===str[j]) {
            l=i
            r=j

            i--
            j++
        }
        else{
            break
        }
    }
    return [l,r]
}


var longestPalindrome = function(s) {
    let i=0
    let j=0

    let start = 0
    let end = 0

    let alter = true
    while(i<s.length || i<s.length){
        const [l, r] = isPal(s,i,j)

        if(r-l > end-start){
            start=l
            end=r
        }

        if(alter){
            j++
            alter=false
        }else{
            i++
            alter=true
        }   
    }
    return s.slice(start,end+1)
};