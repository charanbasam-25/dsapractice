function rearrage(arr){
    let l=arr[1];
    let h=arr[arr.length-1]
    while(l<=h){
        if(arr[l]<=arr[0]){
            l++
        }
        else if(arr[l]>arr[0]){
            h--
        }
        else{
            let temp = arr[l]
            arr[l]= arr[h];
            arr[h]=temp
            swap(arr[l],arr[h]);
            l++
            h--
        }
    }
    let temp = arr[0]
    arr[0]= arr[l-1];
    arr[l-1]=temp
    
    return arr

}

function swap(a,b){
    let temp =a;
    let 

}
console.log(rearrage([10,2,3,5,6,15,20,19,22]),"rearrange-----s");