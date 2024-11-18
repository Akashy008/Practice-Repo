function newYorkSkylines(N,arr){
  for (let i = 0; i < N; i++) {
        if((arr[i-1] < arr[i] && arr[i] > arr[i + 1])){
            console.log(2)
        }else if ( arr[i-1] < arr[i] || arr[i] > arr[i + 1]){
            console.log(1)
        }else{
            console.log(0)
        }
  }
}
newYorkSkylines(5, [1,4,3,2,7])