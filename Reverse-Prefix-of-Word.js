var reversePrefix = function(word='', c='') {
    let revese=''
    let found=false
    for(let i=0;i<word.length;i++){
        if(word[i]===c){
            found=true
            revese=word[i]+revese
            revese=revese+word.slice(i+1)
            break
        }
        else{
            revese=word[i]+revese
        }
    }

    if(found) return revese
    else return word
};

console.log(reversePrefix("abcdefd","d"))