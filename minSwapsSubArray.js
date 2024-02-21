let arr=[25,30,2,8,7,9,50,3];
let count=0;
for(let i=0; i<5;i++){
    if( arr[i]>10){
        count=count+1;
    }
}
let start =1;
let end=5
while(end<arr.length){
    end=end+1
    if(arr[start-1]>10){
        count=count-1;
    }
    if(arr[end]>10){
        count=count+1;
    }
    start=start+1
}
console.log(count)