import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import Foot from '../views/global/Food'
import DataList from '../views/local/DataList'
import DataChart from '../views/local/DataChart';

const Stat =(props)=>{
    const{statData}=props
    const [ isShowChart, setIsShowChart ] = useState(true)
    const {viewType} = useParams();
return(
    <>    
    <DataList viewType={viewType} setShow={setIsShowChart} data={statData} />
    <DataChart viewType={viewType} show={isShowChart} data={statData}/>
    <Foot></Foot>
    </>
);

}
export default Stat;