function MergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let midEle= arr[Math.floor(arr.length/2)];
    const left = arr.slice(0,midEle);
    const right = arr.slice(midEle);
    return merge(MergeSort(left),MergeSort(right));

}

function merge(left, right){
    let result=[];
    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex<left.length&& rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(right[rightIndex]);
            right++;
        }

    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(MergeSort([3,5,2,19,0,5]))