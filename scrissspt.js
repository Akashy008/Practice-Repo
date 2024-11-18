function findSmallestOdd(arr) {
 
   for (let i = 0; i < arr.length; i++) { 
    let smallNum = -1
    if(arr[i] % 2 == 0){
      if(arr[i]< smallNum){
      smallNum = arr[i]
    }
    }console.log(smallNum)
    
   } 
}

