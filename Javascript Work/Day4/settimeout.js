
for (var index = 1; index <= 3; index++){
    setTimeout(()=>{
        console.log('after' + index +'second(s)', + index)
        
    }, index*1000);
}