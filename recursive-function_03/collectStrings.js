/*
collectStrings
객체를 받아들이고 문자열에 해당하는 모든 값의 배열을 반환하는 collectStrings라는 함수를 작성합니다.
*/
function collectStrings(obj) {
  let arr = []

  for(let key in obj) {
    let cur = obj[key]

    if(typeof cur !== 'object') {
      arr.push(cur)
    } else {
      arr.push(...collectStrings(cur))
    }
  }

  return arr
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(JSON.stringify(collectStrings(obj))) // ["foo", "bar", "baz"])