function solution(number, limit, power) {
    
    // 약수 개수 구하기
       function countDivisors(n)
    {
        let cnt = 0;
        for (let i = 1; i <= Math.sqrt(n); i++)
        {
            if (n % i == 0) {
                // If divisors are equal,
                // count only one
                if (n / i == i)
                    cnt++;
 
                else // Otherwise count both
                    cnt = cnt + 2;
            }
        }
        return cnt;
    }
    
    
    
    var answer = 0;
    var count = 0
    var add = false
    
    for(let i=1;i<number+1;i++){
if(countDivisors(i)>limit){
    answer += power
}else{
     answer += countDivisors(i)
}
    }
    return answer;
}