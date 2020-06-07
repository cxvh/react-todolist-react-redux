import React,{Component} from 'react';
import {connect} from 'react-redux';
class TodoList extends Component{
    // constructor(props){
    //     super(props);
    //     // this.state=store.getState();
    // }
    render(){
        return (
            <div>
                <div>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                    />
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,idx)=>{
                        return <li
                            key={idx}
                            // onclick {用函数，否则会自动执行}
                            onClick={()=>{
                                this.props.itemDelete(idx)
                            }}
                        >{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
};
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
// store.dispatch, props
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputChange(e){
            console.log(e.target.value)
            const action={
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action);
        },
        handleClick(){
            const action={
                type:'add_item'
            }
            dispatch(action);
        },
        itemDelete(idx){
            const action={
                type:'del_item',
                idx
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);