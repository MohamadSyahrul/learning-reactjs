// parent component
import React, { useEffect, useState } from 'react'
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  // kiri -> getter
  // kanan -> setter
  const [testTing, setTesting] = useState(1)
  const [namaTesting, setNama] = useState("")

  useEffect(() => {
    if(testTing === 1){
      setNama("sahrul")
    }else{
      setNama("test")
    }
  }, [testTing])

  return (
    <>
      <h5>nama: {namaTesting}</h5>
      <h1>saya memiliki nilai: {testTing}</h1>
      <button onClick={() => setTesting( (prev) => prev + 1)} >tambah data</button>
      <button onClick={() => setTesting( (prev) => prev - 1)} >kurang data</button>
    </>
  );
}

export default App;
