function TwoDMatrix(mat,k){
    for(let i=0; i<mat.length;i++){
        console.log(i,"i------s")
        for(let j=0; j<mat[0].length; j++){
            if(mat[i][j]==k){
                return true+" and timecomplexity is n*m";
            }
        }
    }
    return false +" and timecomplexity is n*m";
}
console.log("two----------")

let Mat1=TwoDMatrix([[1,2,3],[10,8,9],[16,17,5]],100);
let Mat2=TwoDMatrix([[1,2,3],[11,8,9],[16,17,5]],11);
console.log(Mat1)
console.log(Mat2)

function optimisedSolution(matrix,num){
    
    let i=0;
    let j= matrix[0].length-1;
    console.log(matrix[i])
    console.log(i,j)
    while(i<matrix.length && j>=0){
        console.log(matrix[i][j],num, i,j, matrix.length)
        if(matrix[i][j] == num){
            return true;
        }
        else if(matrix[i][j]>num){
            
            j= j-1;
        }
        else{
            i=i+1
        }
    }
    return false;
}

let Mat4=optimisedSolution([[1,2,3],[9,11,13],[6,7,8]],11);


function BinaryTwoDMatrix(matrix){
    let i= 0;
    let j=matrix[0].length-1;
    let ans= 0
    while(i<matrix.length && j>=0){
        while(j>=0 && matrix[i][j]==1){
            j=j-1;
            ans=i;
        }
        i=i+1;
    }
    return ans;
}

console.log(Mat4);
console.log(BinaryTwoDMatrix([[0,0,0,1,1],[0,0,1,1,1],[0,0,1,1,1]]))