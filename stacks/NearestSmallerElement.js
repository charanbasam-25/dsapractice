function NearestSmallerElement(A){
    let finalArray= new Array(A.length).fill(-1)
    let stack=[]

    for(let i=0; i<A.length;i++){

        while(stack.length!==0 && stack[stack.length-1]>A[i]){
            stack.pop()
        }
        if(stack.length!==0){
            finalArray[i]=stack[stack.length-1];
        }
        stack.push(A[i])



    }
    console.log(finalArray)
    return finalArray

}
NearestSmallerElement([4,5,2,10,18,2])