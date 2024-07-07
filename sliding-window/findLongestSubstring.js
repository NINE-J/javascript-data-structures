/*
Sliding Window - findLongestSubstring
문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

//문제 설명이 이상하긴 하네.. 번역이 이상한 것 같기도 하고.
//sliding window 형식의 문제라는 점을 고려하면 고유한 문자열의 개수만 세는 걸로 오해하면 안 되는 거고.
//sliding window 탐색으로 고유한 문자로만 이루어진 가장 긴 문자열을 찾는 것.
//즉, 모든 고유 문자를 포함하는 하위 문자열이 아니다. 만들 수 있는 하위 문자열 중 고유 문자로만 이루어진 가장 긴 것의 길이를 반환.

//두 개의 창을 문자열 위에 올렸다고 생각해보자.
//조건에 맞추어 오른쪽 창을 움직이다가 걸리면 멈춘다.
//조건에 맞추어 왼쪽 창을 움직인 후 다시 오른쪽 창을 움직인다.
//조건에 맞게끔 창을 움직이며 왼쪽 창 끝 ~ 오른쪽 창 끝 길이를 계산한다.
//반복하다가 조건에 만족하도록 길이를 반환한다.
function findLongestSubstring(str){
  let answer = 0
  let board = {}
  let st = 0

  for(let i = 0; i < str.length; i++) {
    //오른쪽 창을 움직인다.
    let char = str[i]
    //중복되는 글자를 만난 시점.
    //기존 시작 지점과 지금 문자와 중복되는 기존 문자의 지점 중 큰 값을 시작 지점으로 변경한다. 왼쪽 창을 움직인다고 생각하자.
    if(board[char]) st = Math.max(st, board[char])
    //지금 문자는 중복된 문자다.
    //이 앞에서 다시 탐색을 하면 또 마주칠 게 분명하므로 지금 char의 지점을 변경한다.
    board[char] = i+1
    //순회의 시작 지점을 변경한 것으로 변경 지점부터 다시 탐색하는 건 비효율적이다.
    //0~i 길이에서 st를 빼는 것으로 시작 지점을 움직인다고 생각하자.
    //board[char]의 값은 지금 마주친 중복된 문자지만 st는 이전에 기록된 위치이다.
    //길이만 계산하면 되는 알고리즘이므로 현재 인덱스에서 시작 지점을 제외하는 것으로 동일한 값을 얻을 수 있다.
    answer = Math.max(answer, i-st+1)
  }

  return answer
}

findLongestSubstring('thisisawesome')

/*
ex) 문자열 'rithmschool'에서 'rithmsc'까지 중복 없는 하위 문자열을 만들어 나가고 있다.
이후 h를 만나게 되면 기존에 있던 h까지 만든 문자열 'rith'의 길이는 버린다.
'mschool' 이후로 재개한다.

breakpoint 걸고 확인하는 게 쉽겠지만 논리 이해를 위해 정리해본다.

ex2) 문자열 'thisisawesome'을 가지고 진행
1. char = 't', 중복되는 문자인지 확인을 위해 board[char] 존재 여부를 판별하고 값을 '시작 지점'과 '현재 문자의 인덱스+1(길이)'중 큰 값으로 초기화한다. (이후 중복 문자를 만날 때 추가 설명)
board = {t:1}
가장 긴 하위 문자열의 길이를 계산한다.
시작하는 지점이니까 가장 긴 문자열의 길이는 0
지금 문자의 인덱스(=i) 0, 시작 지점(=st) 0 이지만 길이는 1과 같으므로 식은 i-st+1. (이후 중복 문자를 만날 때 추가 설명)
현재 가장 긴 문자열의 길이는 0과 1중 큰 값 = 1

2. char = 'h'
board = {t:1, h:2}
현재 가장 긴 문자열의 길이는 1
i = 1, st = 0, i-st+1 = 2 >>> 가장 긴 문자열의 길이는 1과 2중 큰 값 = 2

3. char = 'i'
board = {t:1, h:2, i:3}
현재 가장 긴 문자열의 길이는 2
i = 2, st = 0, i-st+1 = 3 >>> 가장 긴 문자열의 길이는 2와 3중 큰 값 = 3

4. char = 's'
board = {t:1, h:2, i:3, s:4}
현재 가장 긴 문자열의 길이는 3
i = 3, st = 0, i-st+1 = 4 >>> 가장 긴 문자열의 길이는 3과 4중 큰 값 = 4

5. char = 'i' *중복
중복되는 문자인지 확인을 위해 board[char] 존재 여부를 판별하고 값을 '시작 지점'과 '현재 문자의 인덱스+1(길이)'중 큰 값으로 초기화한다.
시작 지점을 중복된 문자의 인덱스+1로 변경한다.
'thisisawesome'에서 'thi'의 길이를 빼고 시작 지점을 바꿔 'sisawesome'에서 다시 탐색하는 것과 같은 행위가 된다.
board = {t:1, h:2, i:5, s:4}
현재 가장 긴 문자열의 길이는 4, 시작 지점이 변경됐으니까 'thi'이후인 'si' 길이 2
i = 4, st = 3, i-st+1 = 4 >>> 가장 긴 문자열의 길이는 4와 2중 큰 값 = 4

계속 순회하며 지금까지 가장 길었던 하위 문자열의 길이와 새로 계산한 문자열의 길이를 비교하여 더 큰 값을 반환한다.
*/