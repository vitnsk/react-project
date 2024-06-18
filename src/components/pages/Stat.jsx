import React from 'react';

import Foot from '../views/global/Food'
import DataList from '../views/local/DataList'
const Stat =(props)=>{
    const{statData}=props
return(
    <>
    
    <DataList data={statData} />
    <Foot></Foot>
    </>
);

}
export default Stat;