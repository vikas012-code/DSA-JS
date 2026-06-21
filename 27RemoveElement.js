//optimize
var removeElement = function(nums, val) {
  let newArr=nums.filter(item=> item!==val)

  for(let i=0;i<newArr.length;i++){
      nums[i]=newArr[i]
  }

  return newArr.length
};