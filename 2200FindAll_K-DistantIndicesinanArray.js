//optimize
var findKDistantIndices = function(nums, key, k) {
  let res=[]
  let indx=[]

  function compare(i){
      for(let j=0;j<indx.length;j++){
          if(Math.abs(i-indx[j])<=k){
              return true
          }
      }

      return false
      
  }
  
  for(let i=0;i<nums.length;i++){
      if(nums[i]==key){
          indx.push(i) 
      }
  }
  for(let i=0;i<nums.length;i++){
      if(compare(i)){
          res.push(i)
      }
  }
  return res
};