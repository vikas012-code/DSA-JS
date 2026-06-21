/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<2) return 0

    if(prices.length===2 && prices[0]>prices[1]) return 0

    let less = 0
    let great = 1
    let profit=0

    for(let i=1;i<prices.length;i++){
        if(prices[i]<prices[less]){
            less=i
            great=i+1
        }else{
            great=i
        }
        if(prices[great]-prices[less]>profit){
            profit=prices[great]-prices[less]
        }
    }

    return profit
};