let arr=[2,3,1,6,4,5];
let qur=[[1,3],[2,5],[0,4],[3,3]];
let psEven=[];
psEven[0]=0;
psEven[1]=arr[1]; 
for(let i=2;i<arr.length;i++){
    if(i%2==1){
        psEven[i]=psEven[i-1]+arr[i]
    }
    else{
        psEven[i]=psEven[i-1];
    }
}
console.log(psEven)
for(let j=0; j<qur.length;j++){
    if(qur[j][0]==0){
        console.log(psEven[qur[j][1]])
    }
    else{
        console.log(psEven[qur[j][1]]-psEven[qur[j][0]-1]);
    }
    
}