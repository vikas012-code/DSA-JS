//optimize
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
    let merge=[]
    let i=0
    let j=0

    while(i<word1.length || j<word2.length){
        if((word1[i]?.charCodeAt(0) || 0) === (word2[j]?.charCodeAt(0) || 0)){
            if(word1.slice(i)>word2.slice(j)){
                merge.push(word1[i])
                i++
            }else{
                merge.push(word2[j])
                j++
            }
        }
        else if((word1[i]?.charCodeAt(0) || 0) < (word2[j]?.charCodeAt(0) || 0)){
            merge.push(word2[j])
            j++
        }else{
            merge.push(word1[i])
            i++
        }
    }

    return merge.join("")
};