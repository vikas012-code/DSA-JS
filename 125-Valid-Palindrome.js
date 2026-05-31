var isPalindrome = function(s) {
    if(s.trim().length<=0) return true

    let arrStr=s.split("")
    let i=0
    let j=arrStr.length-1

    while(i<j){
        // console.log(arrStr[i],arrStr[j])
        let leftChar=arrStr[i].toLowerCase().charCodeAt(0)

        console.log(leftChar)
        if(leftChar >= 65 && leftChar <= 90){
            let rightChar=arrStr[j].toLowerCase().charCodeAt(0)
            if(rightChar >= 65 && rightChar <= 90){
                if(arrStr[i].toLowerCase()==arrStr[j].toLowerCase()){
                    i++
                    j--
                    continue
                }
                return false
            }
            j--
            continue
        }
        i++
    }

    return true
};

console.log(isPalindrome("race a car"))
