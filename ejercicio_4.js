function ejercicio4(x){
    var i=0
    var y=0
    if (x>10&&x<100){
        for (i=1;i<=x;i++) { 
        if ((i%2)==0){
            y=i+y
        }}
console.log('El resultado de la sumatoria de pares desde 1 hasta '+x+' es '+y);
}}