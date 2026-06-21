//optimize
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let counter = 0
    let count0=0

    for(let i=0;i<s.length;i++){
        if(s[i]==="0"){
            count0++
        }else{
            if(count0>0){
                counter++
                count0--
            }

            if(s[i]==="1" && s[i+1]==="0"){
                count0=0
            } 
        }
    }

    let count1=0

    for(let i=0;i<s.length;i++){
        if(s[i]==="1"){
            count1++
        }else{
            if(count1>0){
                counter++
                count1--
            }

            if(s[i]==="0" && s[i+1]==="1"){
                count1=0
            } 
        }
    }

    return counter
};