function solution(X, Y) {
  X = X.split('');
  Y = Y.split('');
  var result = [];
  var answer = '';
  var Xlength = 0;
  var Ylength = 0;
  //1차
  // for(i=0;i<X.length;i++){
  //     if(Y.includes(X[i])){
  //         result.push(X[i])
  //       Y =  Y.replace(X[i],'')
  //       X =  X.replace(X[i],'')
  //         i--
  //     }
  // }
  //     result.sort(function(a,b){
  //     return b-a
  // })
  // result.map((item)=>answer+=item)
  // return answer[0] === "0" ? "0" : answer === "" ? "-1" : answer

  //2차

  // for(i=0;i<10;i++){
  //     if(X.includes(i)&&Y.includes(i)){
  //         result.push(i)
  //        X= X.replace(i,'')
  //        Y= Y.replace(i,'')
  //         i--
  //     }
  // }
  // result.reverse().map((item)=>answer+=item)
  // return answer[0] === "0" ? "0" : answer === "" ? "-1" : answer

  for (i = 0; i < 10; i++) {
    Xlength = X.filter((item) => item == i).length;
    Ylength = Y.filter((item) => item == i).length;
    let testArr = [Xlength, Ylength].sort(function (a, b) {
      return b - a;
    });
    if (Ylength > 0 && Xlength > 0) {
      result.push(String(i).repeat(testArr[1]));
    }
  }

  result.reverse().map((item) => (answer += item));
  return answer[0] === '0' ? '0' : answer === '' ? '-1' : answer;
}
