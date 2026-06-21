//optmize
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let perm=[]
    let j=0
    let x=0
    for(let i=0; i<s.length; i++){
        if(s[i]=="I"){
            perm.push(j)
            j++
        }else{
            perm.push(s.length-x)
            x++
        }
    }
    if(s[s.length-1]==="I") perm.push(j)
    else perm.push(s.length-x)

    return perm
};