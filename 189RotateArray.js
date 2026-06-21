//optimize
var rotate = function(nums, k) {
  if(nums.length<=1 || k<=0) return
   let len=nums.length

  let p=len

  for(let i=0;i<k;i++){
      p>0?p--:p=len-1
  }
  let newArr=[]
  let j=0

  for(let i=0;i<len;i++){
      newArr[i]=nums[p]
      p<len-1?p++:p=0
  }
  for(let i=0;i<len;i++){
      nums[i]=newArr[i]
  } 
};