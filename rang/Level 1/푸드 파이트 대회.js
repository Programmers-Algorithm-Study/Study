// https://school.programmers.co.kr/learn/courses/30/lessons/134240
// 10 min

function solution(food) {
  var answer = "";

	// 성공 -> 0.19ms, 33.5MB
  food.forEach((item, idx) => (answer += idx.toString().repeat(Math.floor(item / 2))));

  return answer + "0" + [...answer].reverse().join("");
}

// testcase
const food = [
  [1, 3, 4, 6],
  [1, 7, 1, 2],
];

food.forEach((item) => console.log(solution(item)));
