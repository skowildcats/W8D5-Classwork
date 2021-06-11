Function.prototype.curry = function(numArgs) {
  let args = [];

  let that = this
  return function _curry(arg) {
    args.push(arg)

    if (args.length === numArgs) {
      return that(...args)
    } else {
      return _curry
    }
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

let f1 = sumThree.curry(3)

f1 = f1(4)
f1 = f1(20)
f1 = f1(6)
console.log(f1)


