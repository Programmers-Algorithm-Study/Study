function googoo(num) {
    let number = 1;
  
    while (number < 4) {
      
      for (let i = 1; i < 10; i++) {
      
        let result = "";
        for (let j = num; j < num + 4; j++) {
            if(j%4==0){
                continue
            }
          
          result += `${j} * ${i} = ${j * i}  `;
        }
        number+=1
        console.log(result);
      }
    }
  }
  
  googoo(2);
  console.log(" ");
  googoo(6);