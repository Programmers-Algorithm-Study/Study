function solution(id_list, report, k) {
  // 동일한 사람이 반복해서 신고하면 무효기 때문에 중복을 제거한다.
  report = [...new Set(report)];
  // 아이디 리스트와 같은 순서의 0이 담긴 배열을 만든 후 신고 횟수를 더해준다
  var count = [];
  var answer = [];
  for (i = 0; i < id_list.length; i++) {
    count.push(0);
    answer.push(0);
  }
  report.map((item) => (count[id_list.indexOf(item.split(' ')[1])] += 1));
  // 최종 신고횟수를 k와 비교 후 신고당한 사람이 k번 이상일 경우 신고 한 사람의 아이디 순서 값에 1을 더해준다.
  report.map((item) =>
    count[id_list.indexOf(item.split(' ')[1])] >= k
      ? (answer[id_list.indexOf(item.split(' ')[0])] += 1)
      : null
  );

  return answer;
}
