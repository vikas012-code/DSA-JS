//optimize
var removeDuplicates = function(nums) {
  let newArr= new Set(nums)
   let arr=[...newArr]
   for(let i=0;i<arr.length;i++){
       nums[i]=arr[i]
   }
   return arr.length
};