import React, { useState } from 'react'
import Foot from '../views/global/Food'
import DataList from '../views/local/DataList'
import DataChart from '../views/local/DataChart';

const Stat =(props)=>{
    const{statData}=props
    const [ isShowChart, setIsShowChart ] = useState(true)
return(
    <>    
    <DataList setShow={setIsShowChart} data={statData} />
    <DataChart show={isShowChart} data={statData}/>
    <Foot></Foot>
    </>
);

}
export default Stat;