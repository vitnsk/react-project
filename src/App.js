import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Head from './components/views/global/Head'
import Main from './components/pages/Main';
import Stat from './components/pages/Stat';
import Plan from './components/pages/Plan'

function App() {
  const [ ,setShowPage ] = useState('main')

const[data, setData]=useState([])
  return (
   <>
   
   <Head action={setShowPage}></Head>
      <Routes>
        <Route
          path={'/main'}
          element={<Main action={setData}/>}
        />
        <Route
          path={'/stat'}
          element={<Stat statData={data}/>}
        />
        <Route
          path={'/plan/:demoparam'}
          element={<Plan/>}
        />
      

        {/* <Route
          path={'*'}
          element={<Main action={setData}/>  />} */}
       
      </Routes>




  
   </>
  );
}

export default App;
