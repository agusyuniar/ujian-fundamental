function cekkoin(x){
    let ctk =0
    if(x%25==0){
        ctk = x/25 
    }else if(x%10==0){
        ctk = x/25 
    }else if(x%5==0){
        ctk = x/5
    }else{        
        ctk = (Math.floor(x/25))+((Math.floor((x%25)/10)))+((Math.floor(((x%25)%10)/5)))+(Math.floor(((x%25)%5)/1))
    }
    return ctk +' koin'
}
console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))
console.log(cekkoin(3))
console.log(cekkoin(7))