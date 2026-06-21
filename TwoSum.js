// brute-force
// var twoSum = function(nums, target) {
//   let sum=-1

//   for(let i=0;i<=nums.length;i++){
//       for(let j=0;j<=nums.length;j++){
//           if(i===j) continue

//           sum=nums[i]+nums[j]

//           if(sum===target) return [i,j]
//       }
//   }
// };


// optimize
// O(n)
var twoSum = function(nums, target) {
  let hashmap={}

  for(let i=0 ; i<nums.length;i++){
      if(target-nums[i] in hashmap){
          return [i, hashmap[target-nums[i]]]
      }
      hashmap[nums[i]]=i
  }
};
