// brute-force

// var nextGreaterElement = function(nums1, nums2) {
//   let len = nums1.length
//   let newArr= new Array(len)
//   newArr.fill(-1)
//   for(let i=0;i<len;i++){
//       let val=[]
//       for(let j=nums2.length-1;j>0;j--){
//           if(nums1[i]==nums2[j]){
//               break
//           }
//           else{
//               val=[nums2[j],...val]
//           }
//       }
//       for(let j=0;j<val.length;j++){
//           if(nums1[i]<val[j]){
//               newArr[i]=val[j]
//               break
//           }
//       }
//   }

//   return newArr
// };

// optimize
var nextGreaterElement = function(nums1, nums2) {
  let newArr= new Array(nums1.length)
  newArr.fill(-1)
  for(let i=0;i<nums1.length;i++){
      for(let j=nums2.length-1;j>=0;j--){
          if(nums2[j]!=nums1[i]){
              if(nums1[i]<nums2[j]){
                  newArr[i]=nums2[j]
              }
          }
          else{
              break
          }
      }
  }
  return newArr
};