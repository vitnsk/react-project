import React from 'react';

import Foot from '../views/global/Food'
import DataList from '../views/local/DataList'

export default class Plan extends React.Component{

constructor (props){
    super(props)
}


render(){
return(
    <>
    <span>страница планирования</span>
      
    <DataList viewType={'расход'}  data={this.props.statData} />

    <Foot></Foot>
    
    </>
)

}
}
