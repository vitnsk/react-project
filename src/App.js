import React from 'react';
import { useState } from 'react';
import Head from './components/views/global/Head'
import Main from './components/pages/Main';
import Stat from './components/pages/Stat';

function App() {

const[showPage, setShowPage]=useState('main')
const[data, setData]=useState([])
  return (
   <>
   <Head action={setShowPage}></Head>
   {showPage==='main'
   ?<Main action={setData}></Main>:
   <Stat statData={data}></Stat>}
   </>
  );
}

export default App;
