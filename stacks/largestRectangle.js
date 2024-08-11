
       function largestRect(A) {
           function NearestSamllerLeft(Arr){
               let stack=[];
               let ans=[]
               for(let i=0; i<Arr.length; i++){
                   ans[i]=-1;
               }
               for(let i=0; i<Arr.length; i++){
                   while(stack.length!==0 && Arr[stack[stack.length-1]]>=Arr[i]){
                       stack.pop()
                   }
                   if(stack.length!==0){
                       ans[i]=stack[length-1]
                   }
                   stack.push(i);
               }
               return  ans
           }
           function NearestSamllerRight(Arr){
               let stack=[];
               let ans=[]
               for(let i=0; i<Arr.length; i++){
                   ans[i]=Arr.length;
               }
               for(let i=A.length-1; i>=0; i--){
                   while(stack.length!==0 && Arr[stack[stack.length-1]]>=Arr[i]){
                       stack.pop()
                   }
                   if(stack.length!==0){
                       ans[i]=stack[length-1]
                   }
                   stack.push(i);
               }
               return  ans
           }
   
           let NSL= NearestSamllerLeft(A);
           let NSR= NearestSamllerRight(A);
   
           let ans=0;
           console.log(NSR)
           console.log(NSL)
           for(let i=0; i<A.length; i++){
               
               let h=A[i];
               let w= NSR[i]-NSL[i]-1
               ans=Math.max(ans, w*h);
           }
   
           return ans
   
       }
       console.log(largestRect([1]))
   