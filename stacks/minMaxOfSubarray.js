function nearestGreateleft(A){

    let stack=[]
    let NGL=new Array(A.length).fill(-1);
    for(let i=0; i<A.length; i++){
        while(stack.length!==0 && A[stack[stack.length-1]]<=A[i]){
            console.log(A[stack[stack.length-1]],"stack=-------")
            stack.pop()
        }
        if(stack.length!==0){
            NGL[i]=stack[stack.length-1]
        }
        stack.push(i);

    }
    return NGL


}

console.log(nearestGreateleft([4,7,3,8]),"NGL-------")

function nearestGreaterRight(A){
    let stack=[]
    let NGR=new Array(A.length).fill(A.length);
    for(let i=A.length-1; i>=0; i--){
        while(stack.length!==0 && A[stack[stack.length-1]]<=A[i]){
            stack.pop()
        }
        if(stack.length!==0){
            NGR[i]=stack[stack.length-1]
        }
        stack.push(i)
    }
    return NGR

}
console.log(nearestGreaterRight([4,7,3,8]),"NGR-----");

function nearestSmallerLeft(A){
    let stack =[]
    let NSL= new Array(A.length).fill(-1);
    for(let i=0; i<A.length; i++){
        while(stack.length!==0 && A[stack[stack.length-1]]>=A[i]){
            stack.pop()

        }
        if(stack.length!==0){
            NSL[i]=stack[stack.length-1];
        }
        stack.push(i);
    }
    return NSL

}
console.log(nearestSmallerLeft([4,7,3,8]),"Nsl----");

function nearestSmallerRight(A){

    let stack =[]
    let NSR= new Array(A.length).fill(A.length);
    for(let i=A.length-1; i>=0 ; i--){
        while(stack.length!==0 && A[stack[stack.length-1]]>=A[i]){
            stack.pop()
        }
        if(stack.length!==0){
            NSR[i]=stack[stack.length-1]
        }
        stack.push(i);
    }
    return NSR
}
console.log(nearestSmallerRight([4,7,3,8]),"NSR______");


function minMax(A){
    let maxSum= 0;
    let minSum=0;
    let NGL= nearestGreateleft(A)
    let NGR= nearestGreaterRight(A);
    let NSL= nearestSmallerLeft(A);
    let NSR= nearestSmallerRight(A);
    for(let i=0; i<A.length; i++){
        maxSum = maxSum + ((i - NGL[i]) * (NGR[i] - i) * A[i]);
        minSum = minSum + ((i - NSL[i]) * (NSR[i] - i) * A[i]);
    }

    return maxSum-minSum;

}
console.log(minMax([4,7,3,8]))