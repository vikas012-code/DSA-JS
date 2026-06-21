//optimize

var findMedianSortedArrays = function(nums1, nums2) {
  let mergeArray=[...nums1,...nums2];

  mergeArray.sort((a, b) => a - b)

  if(mergeArray.length%2===0){
      let mid=mergeArray.length/2

      let first = mid-1
      let second = mid

      let median= mergeArray[first] + mergeArray[second]
      median=median/2

      return median

  }

  else{

      let mid=mergeArray.length/2

      let median= mergeArray[Math.floor(mid)]

      return median

  }
  
};
