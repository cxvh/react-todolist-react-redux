const defaultState={
    inputValue:'123',
    list:[]
};
export default (state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type==='add_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.unshift(newState.inputValue);
        newState.inputValue="";
        return newState;
    }
    if(action.type==='del_item'){
        const newState=JSON.parse(JSON.stringify(state));
        console.log(action,111111,newState)
        newState.list.splice(action.idx,1);
        return newState;
    }
    return state;
}