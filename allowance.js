function whatCanIBuy(allowance) {
  if (allowance === 0) {
    return 'nope'
  }
  if (allowance <= 5) {
    return 'small'
  } else if (allowance <= 10){
    return 'large'
  } else {
    return 'not sure'
  }
}

console.log(whatCanIBuy(9100));
