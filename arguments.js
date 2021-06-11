function sum(...args) {
  let counter = 0;
  for(let i = 0; i < args.length; i++) {
    counter += args[i];
  }
  return counter
}

// console.log(sum(1,2,3,4))
// console.log(sum(1, 2, 3, 4) === 10)
// console.log(sum(1, 2, 3, 4, 5) === 15)

