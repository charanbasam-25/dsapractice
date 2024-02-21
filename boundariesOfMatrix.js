let matrix=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
let start =0;
let m = matrix[0].length;
let rowLen=matrix.length;
for(let i=start; i<m; i++){
    console.log(matrix[start][i]);
}
for (let j=1; j<rowLen; j++){
    console.log(matrix[j][m-1]);
}
for(let k=m-1; k>0; k--){
    console.log(matrix[rowLen-1][k]);
}
for(let p=rowLen-1; p>0; p--){
    console.log(matrix[p][0]);
}