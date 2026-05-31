var fourSum = function(nums=[], target=0) {
  let map = new Map
  let array=[]
  
  for(let i=0;i<nums.length;i++){
    map.set(nums[i],i)
  }

  for(let i=0;i<nums.length-3;i++){
    for(let j=i+1;j<nums.length-2;j++){
      for(let x=j+1;x<nums.length-1;x++){
        const find = target - (nums[i]+nums[j]+nums[x])
        if(map.has(find) && map.get(find)!==i && map.get(find)!==j && map.get(find) !== x) array.push([nums[i],nums[j],nums[x],nums[map.get(find)]])
      }
    }
  }
  
  return array
    
};


let nums = [1,0,-1,0,-2,2], target = 0

console.time("time")


console.log(fourSum(nums,target));

console.timeEnd("time")


