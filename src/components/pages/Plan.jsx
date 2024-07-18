import React from 'react';


export default class Plan extends React.Component{
constructor (props){
super(props)
this.state={
    age:27,
    city:'NNN'
}
}
render(){
return(
    <>
    <span>добро пожаловать, {this.props.testProp}  вам {this.state.age} вы из города {this.state.city}</span>
    <button onClick={()=>this.setState({age:30})}>Изменить возраст</button>
    </>
)

}



}