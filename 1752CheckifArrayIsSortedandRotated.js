//optimize
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let drop=null
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            drop=i+1
            break
        }
    }

    if(drop!==null){
        let j = (drop<nums.length-1) ? drop+1 : 0

        for(let i=0;i<nums.length-1;i++){
            if(nums[drop]>nums[j]){
                return false
            }

            if(j<nums.length-1) j++;
            else j=0;

            if(drop<nums.length-1) drop++;
            else drop=0;
        }
    }

    return true
};