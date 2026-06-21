//optimize??
var threeSum = function(nums) {
  let res=[]

  nums.sort((a ,b)=> a-b)
  for(let i=0;i<=nums.length;i++){
      
      if(nums[i]==nums[i-1]) continue

      let j=i+1
      let x=nums.length-1

      while(j<x){
          if(nums[i]+nums[j]+nums[x]==0){
              res.push([nums[i],nums[j],nums[x]])
              j+=1

              while( nums[j]==nums[j-1] && j<x) {
              j++
              }
          }

          else if(nums[i]+nums[j]+nums[x] < 0) {
              j++
          }

          else{
              x--
          }

      }
  }   

  return res
}