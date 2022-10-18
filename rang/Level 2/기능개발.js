// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
// 25 min

function solution(progresses, speeds) {
  var answer = [];
  var days = [];

  // 성공 -> 0.24ms, 33.6MB
  progresses.forEach((item, idx) => {
    days.push(Math.ceil((100 - item) / speeds[idx]))
  });

  for (let i = 0; i < days.length; i++) {
    for (let j = i; j < days.length; j++) {
      if (days[i] < days[j]) {
        answer.push(j - i);
        i = j - 1;
        break;
      } else if (j === days.length - 1) {
        answer.push(j - i + 1)
        i = j;
        break;
      }
    }
  }

  return answer;
}

// testcase
const progresses = [
  [93, 30, 55],
  [95, 90, 99, 99, 80, 99]
]

const speeds = [
  [1, 30, 5],
  [1, 1, 1, 1, 1, 1]
]

for (let i = 0; i < progresses.length; i++) {
  console.log(solution(progresses[i], speeds[i]))
}