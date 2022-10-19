// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 12 min

function solution(s) {
	var cnt = 0;
	var zero = 0;

	// 성공 -> 4.24ms, 35.5MB
	while(s != "1") {
		s = s.split("0")
		zero += s.length - 1;
		s = s.join("").length.toString(2);
		cnt++;
	}

  return [cnt, zero];
}

// testcase
const s = ["110010101001", "01110", "1111111"];

s.forEach((item) => console.log(solution(item)));
