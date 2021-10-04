function sumAll(arr) {  
    let y = arr[0]
    let z = arr[1]
    let suma = 0;
  
    if(y<z){
        for(let i=y; i<=z; i++){
        suma = suma+i    
      }  
    }else{
      for(let i=z; i<=y; i++){
      console.log(i)
      suma = suma+i   
      }
    }  
    console.log(suma);
    return suma;
  }
  
  sumAll([1, 4]);