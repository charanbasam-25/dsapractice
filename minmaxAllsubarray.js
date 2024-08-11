function MinMaxAllSubArray(A){
    let max=[];
    let min = [];
    let finalValue=0;
    for(let i=0 ; i<A.length; i++){
        max.push(A[i]);
        min.push(A[i])
        // console.log(max)
        let maxValue= A[i];
        let minValue= A[i];
        for(let j=i+1; j<A.length; j++){
            if(A[j]>maxValue){
                max.push(A[j])
                maxValue=A[j];
            }
            else{
                max.push(maxValue)
            }
            
        }
        for(let k=i+1; k<A.length; k++){
            console.log(minValue,k,"minValue------")
            if(A[k]<minValue){
                min.push(A[k])
                minValue=A[k];
            }
            else{
                min.push(minValue)
            }
        }

        // console.log(min, max)

        
    }
    console.log(max, min)
    for(let i=0; i<max.length; i++){
        finalValue= (max[i]-min[i])+finalValue;
    }
    return finalValue;

}
console.log(MinMaxAllSubArray([4,7,3,8]),"finalValue---------");