//optimize
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = (s.length / 2)

    for (let i = 1; i <= len; i++) {
      if(s.length%i===0){
        const word = s.slice(0, i)
        let j=0
        while (j<s.length){
          if (word !=s.slice(j,j+i)){
            break
          }
          j=j+i
          if (j >= s.length) return true
        }
      }
    }

    return false
};