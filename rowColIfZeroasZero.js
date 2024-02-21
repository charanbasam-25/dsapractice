let arr=[[1,0,1,1],[1,1,0,1],[1,1,1,1]];
for(let i=0; i<arr.length;i++){
    let flag=false;
    for(let j=0; j<arr[0].length; j++){
        if(arr[i][j]==0){
            flag= true;
        }
        
    }
    if(flag==true){
        for(let j=0;j<arr[0].length; i++){
            if(arr[i][j]==0){
                arr[i][j]==-1;
            }
        }
    }
}
for(let i=0; i<arr[0].length;i++){
    let flag=false;
    for(let j=0; j<arr.length; j++){
        if(arr[j][i]==0){
            flag= true;
        }
        
    }
    if(flag==true){
        for(let j=0;j<arr.length; i++){
            if(arr[i][j]==0){
                arr[i][j]==-1;
            }
        }
    }
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[0].length; j++){
        if(arr[i][j]==-1){
            arr[i][j]=0;
        }
    }
}
console.log(arr)