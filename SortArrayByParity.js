//optimize
var sortArrayByParity = function(nums) {
  let evenArray=[]
  let oddarray=[]
  for(let i=0;i<nums.length;i++){
      if(nums[i]%2==0){
          evenArray.push(nums[i])
      }
      else{
          oddarray.push(nums[i])
      }
  }
  return [...evenArray,...oddarray]
};
