//optimize
var rearrangeArray = function(nums) {
  let newArr=new Array(nums.length)
  let posI=0
  let negI=1
  for(let i=0;i<nums.length;i++){
      if(nums[i]>0){
          newArr[posI]=nums[i]
          posI=posI+2
      }
      else{
          newArr[negI]=nums[i]
          negI=negI+2
      }
  }

  return newArr
};