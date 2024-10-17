let arrayAleatorio=[];

function gerar(){
    arrayAleatorio=[];
    for(i=0;i<10;i++){
        const num=Math.floor(Math.random()*10)+1;
        arrayAleatorio.push(num);
    }
    document.getElementById("randomArray").textContent="["+arrayAleatorio.join(", ")+"]";
}

function calc(){
    const somaPares=arrayAleatorio.reduce((acc,num)=>{
        if(num%2==0){
            return acc+num;
        }
        return acc;        
    },0);

    const somaImpares=arrayAleatorio.reduce((acc,num)=>{
        if(num%2!==0){
            return acc+num;
        }
        return acc;
    },0);

    document.getElementById("somaPares").textContent=somaPares;
    document.getElementById("somaImpares").textContent=somaImpares;
}