//optimize
var applyOperations = function(nums) {
  let nonZero=[]
  let zero=[]

  for(let i=0;i<nums.length;i++){
      if(nums[i]==nums[i+1]){
          nums[i]=nums[i]*2
          nums[i+1]=0
      }
      if(nums[i]==0){
          zero.push(nums[i])
      }
      else{
          nonZero.push(nums[i])
      }
  }
  
  return [...nonZero,...zero]
};