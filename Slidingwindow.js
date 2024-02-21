let arr=[1,2,5,8,6,3,2];
let start=0;
let end=3;
let N=arr.length;
let max_sum=0;
for(let i=0; i<end;i++){
    max_sum=max_sum+arr[i];
}
while(end<N){
    let k=0;
    for(let j=start; j<end; j++){
        k=k+arr[j];
    }
    if(k>max_sum){
        max_sum=k
    }
    start=start+1;
    end=end+1;
}
console.log(max_sum)