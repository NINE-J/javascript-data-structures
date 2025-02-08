function naiveSearch(long, short) {
  let count = 0; // 일치하는 문자열 개수

  // long 문자열을 순회하면서 short 문자열과 비교
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // short의 각 문자와 long의 i+j번째 문자가 다르면 break
      // long의 다음 문자부터 다시 비교
      if (short[j] !== long[i + j]) break;
      // j가 short 문자열의 길이와 같다면 카운트
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

function test(func, long, short, expected) {
  func(long, short) === expected ? console.log("success") : console.log("failed");
}

test(naiveSearch, "lorie loled", "lol", 1);
