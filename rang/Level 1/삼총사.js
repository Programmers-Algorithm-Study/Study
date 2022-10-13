// https://school.programmers.co.kr/learn/courses/30/lessons/131705
// 6 min

function solution(number) {
  var answer = 0;

  // 성공 -> 0.22ms, 33.5MB
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

const number = [
  [-2, 3, 0, 2, -5],
  [-3, -2, -1, 0, 1, 2, 3],
  [-1, 1, -1, 1],
];

number.forEach((item) => console.log(solution(item)));
