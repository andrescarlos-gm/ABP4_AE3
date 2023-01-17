function ejercicio2(x)
{
    if (x < 100){
        let divisor = 0
        for (let i = (x - 1); i > 0; i--) {
            if(x%i==0){
                divisor++}
            if(divisor>1){
                console.log(x+" NO es primo");
                return}}
    if(x===1){
    console.log("El 1 es el único número que no es primo ni compuesto."); 
            }else {
    console.log(x+" ES primo");}}}