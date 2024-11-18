// // function patternPrintingII(N) {
// //   for(let i = 1; i<= N; i++){
// // let star = ""
// // for(let j=1; j <= N; j++){
// //    if(j== N || i == 1 || (i == 1 && j > 1) || i == N ){
// //       star += "* "
// //    }else(
// //     star += "  "
// //    )}
// //    console.log(star)
// //   }
// // }
// // patternPrintingII(5)
// // // (i == 1 || (j == N && i < N) || (i == N && j > 1) || (i == N - 1 && j == 1)

// // function patternPrinting(N){
// //   for(let i = 1; i <= N; i++){
// //     let star = ""
// //     for (j = 1; j<= N; j++){
// //       if(i==1 || j == 1 || j == N){
// //         star += "* "
// //       }else{
// //         star += " "
// //       }
// //   }console.log (star)
// //  }
// // }

// function patternPrinting(N){
  
//   for(let i = N; i >= 1; i--){
//   let star = ""
//   let space = 5
//   for(let j = 1; j<=N; j++){
//     if(j== N){
//       star += "*" 
      
//     }else{
//       star += "*_"
//       space--
//     }
      
//   }console.log(star)
// }
// }
// patternPrinting(5)

// ?
// function patternPrinting(N) {
//   for (let i = N; i >= 1; i--) {
//     let line = "";
//     // Loop to add stars
//     for (let j = 1; j <= i; j++) {
//       line += "* ";
//     }
//     for (let k = i + 1; k <= N; k++) {
//       line += "  ";
//     }
//     console.log(line);
//   }
// }

// patternPrinting(5);

// function patternPrinting(N) {
//   for (let i = N; i >= 1; i--) {
//     let star = "";
    
//     // Add stars with spaces
//     for (let j = 1; j <= i; j++) {
//       star += "* ";
//     }

//     // Add spaces at the end of the row to maintain the square shape
//     for (let k = i ; k < N; k++) {
//       star += "  ";  // Two spaces after the stars
//     }
    
//     console.log(star);
//   }
// }

// patternPrinting(5);

function patternPrinting(N) {
  for (let i = N; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
      if (j !== i) {  
        star += " ";
      }
    }
    if (i !== N) {
      for (let k = i; k < N; k++) {
        star += "  "; 
      }
    }
    console.log(star);
  }
}

patternPrinting(5);
