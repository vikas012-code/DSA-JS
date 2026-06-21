var pivotArray = function(nums, pivot) {
  let less=[]
  let greater=[]
  let pv=[]
  for(let i=0;i<nums.length;i++){
      if(nums[i]<pivot){
          less.push(nums[i])
      }
      else if(nums[i]==pivot){
          pv.push(nums[i])
      }
      else{
          greater.push(nums[i])
      }
  }
  return [...less,...pv,...greater]
};
