function validParanthesis(stack){
    let checkStack=[];
    for(let i=0; i<stack.length;i++){
        let each= stack[i];
        if(each=="{"|| each=="(" || each=="["){
            checkStack.push(stack[i]);
        }
        else if( each=="}"|| each==")" || each== "}"){
            if(checkStack.length==0){
                return false;
            }
            checkStack.pop();
        }
    }

}

validParanthesis(["{","(","{",")","[","]"])