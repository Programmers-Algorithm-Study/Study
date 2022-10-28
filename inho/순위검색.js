function solution(info, query) {
    var answer = [];
    for(i=0;i<query.length;i++){
        answer.push(0)
    }
    //모양 맞추기
    info.map((item,index)=>info[index]=item.split(' '))
    query.map((item,index)=>query[index]=item.split(' and '))
    for(i=0;i<query.length;i++){
        query[i][3]=query[i][3].split(" ")
        query[i] = [query[i][0],query[i][1],query[i][2],...query[i][3]]
    }
    let result = [false,false,false,false,false]
    
    //
    for(i=0;i<query.length;i++){
        for(k=0;k<info.length;k++){
            
            for(j=0;j<query[i].length;j++){
                
                if(j>0&&result[j-1]==false){
                    break
                }
                
                if(j==4&&Number(info[k][j])>=Number(query[i][j])){
                    result[j] = true
                    continue
                }
                
                else if(query[i][j]=="-"||(query[i][j]==info[k][j])){
                     result[j] = true
                 }      
                
                

                }
            
             if(!result.includes(false)){
            answer[i] += 1
           }
        result = [false,false,false,false,false]  

        }

    }
    return answer 
}