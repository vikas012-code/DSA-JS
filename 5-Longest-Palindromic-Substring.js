var longestPalindrome = function(s) {
    let i=0
    let j=1

    let start = 0
    let end = 0

    const map = new Map()

    function isPal(str,l,r){
        const val=l+" "+r
        const res = map.get(val)
        
        if(res) return res

        let i=l
        let j=r
        let result = true

        while(i<j){
            if(str[i]!=str[j]) {
                result = false
                break
            }
            i++
            j--
        }

        map.set(val,result)
        return result
    }

    while(i<s.length){
        if(isPal(s,i,j)){
            if((j-i)>(end-start)){
                start=i
                end=j
            }
        }
        if(j>=s.length){
            i++
            j=i+1
        }else{
            j++
        }
    }
    return s.slice(start,end+1)
};
