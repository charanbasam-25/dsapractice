function sumOfNumbers(N, sum=0){
    if(N==0){
        return sum;
    }
   return sumOfNumbers(N-1, sum+N);
}

console.log(sumOfNumbers(10),"sum--of--all number-----");

function FactorialOfNumber(N){
    if(N==1){
        return 1
    }
    return FactorialOfNumber(N-1)*N;
}

console.log(FactorialOfNumber(5),"Factorail-of-numaber-----");

function NthFibnocci(N){

    if(N<=1){
        return N;
    }
    return NthFibnocci(N-1)+NthFibnocci(N-2);
}

console.log(NthFibnocci(10),"-Nth--fibnoci-number-");

function PowerN(N,pow){
    if(pow==0){
        return 1;
    }
    if(pow==1){
        return Math.pow(N,pow)
    }
    return N*PowerN(N,pow-1)
}
console.log(PowerN(5,4),"pow--one----")

function PowerOptiOne(N,pow){
    if(pow==0){
        return 1;
    }
    if(pow%2==0){
        return PowerOptiOne(N,pow/2)*PowerOptiOne(N,pow/2)   
    }
    else{
        return PowerOptiOne(N,Math.floor(pow/2))*PowerOptiOne(N,Math.floor(pow/2))*N;
    }
    
}

function fastPowerApproach(N,pow){
    if(pow==0){
        return 1;
    }
    let p=PowerOptiOne(N,pow/2);
    if(pow%2==0){
        return p*p;   
    }
    else{
        return p*p*N;
    }

}

console.log(PowerOptiOne(5,2),"Pow--opt---one-----");
console.log(fastPowerApproach(5.,2),"fast-powr--aproach---")