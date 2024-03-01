function QuickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let midEle= arr[Math.floor(arr.length/2)];
    const left = [];
    const right= [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<midEle){
            left.push(arr[i]);
        }
        else if(arr[i]>midEle){
            right.push(arr[i]);
        }
    }
    console.log(left, right, midEle,"left------")
    return [...QuickSort(left),midEle,...QuickSort(right)]
}

console.log(QuickSort([3,4,1,8,0,6]));