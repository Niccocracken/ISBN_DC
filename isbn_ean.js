let codisbn = [9,7,8,3,1,6,1,4,8,4,1,0]

function isbn(codigo){

    let sumatoria_imp=0
    
    for(let i=0;i<codigo.length;i+=2){
        sumatoria_imp+=codigo[i]
    }

    let sumatoria_par=0

    for(let i=1;i<codigo.length;i+=2){
        sumatoria_par+=codigo[i]*3
    }

//PASO_1: Hallar b
    let b=(sumatoria_imp+sumatoria_par)%10

//PASO_2: Si b es 0, el dígito de control también
    if(b===0){
        console.log(0)
    }else{

//PASO_3: Restarle b a 10, el resultado es el dígito de control
        console.log(10-b)
    }   
}

isbn(codisbn)