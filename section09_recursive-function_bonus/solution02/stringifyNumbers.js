/*
stringifyNumbers
객체를 받아 숫자인 모든 값을 찾아 문자열로 변환하는 StringifyNumbers라는 함수를 작성하시오. 재귀(Recursion) 함수는 이 문제를 해결하는 좋은 방법이 될 것입니다!
*/
function stringifyNumbers(obj) {
  let newObj = JSON.parse(JSON.stringify(obj))

  for(let key in obj) {
    let cur = obj[key]

    if(typeof cur === 'number') {
      newObj[key] = cur.toString()
    } else {
      if(typeof cur !== 'object') continue
      else Object.assign(newObj[key],stringifyNumbers(cur))
    }
  }

  return newObj
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(JSON.stringify(stringifyNumbers(obj)))
/*
obj={
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/