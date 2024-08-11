function candy(A){
    const sortedCandy= A.sort((a,b)=>a-b);
    const candy=1;
    const candyArray=[candy]
    console.log(sortedCandy)
    for(let i=1;i<sortedCandy.length;i++){
            if(sortedCandy[i]>sortedCandy[i-1]){
                console.log(sortedCandy,candyArray[i-1],"sorted--------")
                candyArray.push(candyArray[i-1]+1);
            }
            else{
                candyArray.push(candyArray[i-1]);
            }
    }
    console.log(candyArray)
    let sum= 0;
    for(let i=0; i<candyArray.length; i++){
        sum=sum+candyArray[i];
    }
    console.log(sum)
    return sum;
}
candy([1, 5, 2, 1]);
