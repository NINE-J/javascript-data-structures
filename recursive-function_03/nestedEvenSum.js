/*
nestedEvenSum
nestedEvenSum이라는 재귀 함수를 작성하시오. 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.
*/
function nestedEvenSum (obj) {
  let sum = 0

  for(let key in obj) {
    let cur = obj[key]
    if(typeof cur === 'number') {
      if(cur%2 === 0) {
        sum += cur
      }
    } else {
      if(typeof cur !== 'object') continue
      sum += nestedEvenSum(cur)
    }
  }

  return sum
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10