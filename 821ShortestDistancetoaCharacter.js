/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let map = []
    let ans = []
    for(let i=0; i<s.length;i++){
        if(s[i]==c){
            map.push(i)
        }
    }
    for(let i=0;i<s.length;i++){
        let first = null
        for(let j=0;j<map.length;j++){
            if(first===null || ans[i] > Math.abs(i-map[j])){
                first = false
                ans[i]=Math.abs(i-map[j])
            }
        }
    }
    return ans
};

//optimize
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let map = []
    let ans = []
    for(let i=0;i<s.length;i++){
        if(s[i]===c) map.push(i)
    }

    let x = 0
    let y = map.length>1 ? 1 : 0
    
    for(let i=0;i<s.length;i++){
        if((Math.abs(map[x]-i)|| 0) <= (Math.abs(map[y]-i) || 0)){
            ans.push(Math.abs(map[x]-i))
        }else{
            ans.push(Math.abs(map[y]-i))
            if(x<map.length-2) x++
            if(y<map.length-1) y++
        }
    }
    return ans
};