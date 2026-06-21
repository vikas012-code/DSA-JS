//optmize
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b)
    let result = []
    const map = new Map()

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let x=j+1
            let y=nums.length-1

            while(x<y){
                if((nums[i] + nums[j] + nums[x] + nums[y])===target && !map.has(`${nums[i]}${nums[j]}${nums[x]}${nums[y]}`)){
                    result.push([nums[i],nums[j],nums[x],nums[y]])
                    map.set(`${nums[i]}${nums[j]}${nums[x]}${nums[y]}`,1)
                }

                if((nums[i] + nums[j] + nums[x] + nums[y])<target){
                    x++
                }else{
                    y--
                }

            }
        }
    }
    return result
};