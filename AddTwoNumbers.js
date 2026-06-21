//O(n)
var addTwoNumbers = function(l1, l2) {
  let newnode = new ListNode()
  let res = newnode
  
  let carry=0
  

  while (l1 || l2 || carry){
      let num1=0
      let num2=0
      if(l1){
          num1=l1.val
          l1=l1.next
      }

      if(l2){
          num2=l2.val
          l2=l2.next
      }
      let value=num1+num2+carry
      
      if(value>9){
          carry=1
          value=value-10
      }
      else{
          carry=0
      }
      console.log(num1,num2,carry,value)
      newnode.next= new ListNode(value)
      newnode=newnode.next
  }

  return res.next
};
