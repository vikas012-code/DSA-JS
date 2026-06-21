//optimize
var threeSumClosest = function(nums=[], target=0) {
  if(nums.length<3) return 0

  nums.sort((a,b)=> a-b)

  let result = null
  for(let i=0;i<nums.length;i++){
      if(nums[i]===nums[i-1]) continue
      let j=i+1
      let x=nums.length-1
      while(j<x){
          
          let num = nums[i]+nums[j]+nums[x]

          if(result===null){
              result=num
          }else{
              if(Math.abs(target - num) < Math.abs(target - result)){
                  result=num
              }
          }

          if(target>num){
              j++
          }else{
              x--
          }
      }
  }

  return result
};