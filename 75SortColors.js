//unoptimize O(n)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     let i=0
//     let j=i+1

//     while(i<nums.length){
//         if(nums[j]<nums[i]){
//             let temp=nums[j]
//             nums[j]=nums[i]
//             nums[i]=temp

//         }
        
//         j++

//         if(j>=nums.length){ 
//             i++
//             j=i+1
//         }
//     }
// };


//optimize O(n)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeros=0
    let ones=0
    let twos=0

    for(let i=0;i<nums.length;i++){
        if(nums[i]===0) zeros++
        if(nums[i]===1) ones++
        if(nums[i]===2) twos++
    }

    for(let i=0;i<nums.length;i++){
        if(i<zeros){
            nums[i]=0
            continue
        }
        if(i<zeros+ones){
            nums[i]=1
            continue
        }
        if(i<zeros+ones+twos){
            nums[i]=2
        }
    }
};