//optimize
var mergeArrays = function(nums1, nums2) {
  let mergeArr=[]
  let i=0
  let j=0

  while(true){
      if(i>nums1.length-1 && j>nums2.length-1) break

      if(i>nums1.length-1){
          mergeArr=[...mergeArr,[nums2[j][0],nums2[j][1]]]
          j<nums2.length?j++:""
      }
      else if(j>nums2.length-1){
          mergeArr=[...mergeArr,[nums1[i][0],nums1[i][1]]]
          i<nums1.length?i++:""
      }
      else{

      if(nums1[i][0]==nums2[j][0]){
          mergeArr=[...mergeArr,[nums1[i][0],nums1[i][1]+nums2[j][1]]]
          i<nums1.length? i++:""
          j<nums2.length? j++:""
      }
      else{
          if(nums1[i][0]<nums2[j][0]){
              mergeArr=[...mergeArr,[nums1[i][0],nums1[i][1]]]
              i<nums1.length?i++:""
          }
          else{
              mergeArr=[...mergeArr,[nums2[j][0],nums2[j][1]]]
              j<nums2.length?j++:""
          }
      }
  }
      
  }
 
  return mergeArr
 
};