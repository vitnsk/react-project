import React from 'react';


export default class Plan extends React.Component{
constructor (props){
super(props)
this.state={
    age:27,
    city:'NNN'
}
//this.changeAge=this.changeAge.bind(this)
}

//changeAge(){
    changeAge=()=>{  
    this.setState({age: 30})
}
render(){
return(
    <>
    <span>добро пожаловать, {this.props.testProp}  вам {this.state.age} вы из города {this.state.city}</span>
    {/* <button onClick={()=>this.setState((prevState,props)=>({age: prevState.age+4}))}>Изменить возраст</button> */}
    <button onClick={this.changeAge}>Изменить возраст</button>
    </>
)

}

}