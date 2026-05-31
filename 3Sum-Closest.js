var threeSumClosest = function(nums=[], target=0) {
    if(nums.length<3) return 0

    nums.sort((a,b)=> a-b)
    console.log(nums)
    let result = null
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i-1]) continue
        let j=i+1
        let x=nums.length-1
        while(j<x){
            let num = nums[i]+nums[j]+nums[x]

            if(result===null || Math.abs(num-target)<Math.abs(result-target)){
                result=num
            }
            if(num-target<result-target){
                j++
            }else{
                x--
            }
            console.log("num = nums[i]+nums[j]+nums[x]",num, nums[i],nums[j],nums[x])
        }
    }

    return result
};

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5],-2))