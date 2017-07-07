function whatCanIBuy(allowance) {
  if (allowance === 0) {
    return 'nothing'
  } else if (allowance <= 5){
    return "protein bars"
  } else if (allowance <= 20){
    return "superman shirt"
  } else {
    return "Not sure."
  }

}

console.log(whatCanIBuy(-9));









// function whatCanIBuy(allowance) {
//   if (allowance === 0) {
//     return 'nope'
//   }
//   if (allowance <= 5) {
//     return 'small'
//   } else if (allowance <= 10){
//     return 'large'
//   } else {
//     return 'not sure'
//   }
// }
