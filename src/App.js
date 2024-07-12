import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Head from './components/views/global/Head'
import Main from './components/pages/Main';
import Stat from './components/pages/Stat';
import Plan from './components/pages/Plan'

function App() {

const[showPage, setShowPage]=useState('main')
const[data, setData]=useState([])
  return (
   <>
   
   <Head action={setShowPage}></Head>
      <Routes>
        <Route
          path={'/main'}
          element={<Main />}
        />
        <Route
          path={'/stat/:viewType'}
          element={<Stat />}
        />
        <Route
          path={'/plan'}
          element={<Plan/>}
        />
        {/* <Route
          path={'*'}
          element={<Main action={setData}/>  />} */}
       
      </Routes>




   {/* {showPage==='main'
   ?<Main action={setData}></Main>
   : showPage === 'stat'
   ?<Stat statData={data}></Stat>
   :<Plan></Plan>} */}
   </>
  );
}

export default App;
