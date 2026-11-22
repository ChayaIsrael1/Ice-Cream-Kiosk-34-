import { useState } from 'react'
// import './App.css'
import FlavorList from './components/FlavorList/FlavorList.jsx'
import Header from './components/Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)
  const flavors = [
    { name: 'Vanilla', isSoldOut: false, scoopsSelected: 0 },
    { name: 'Chocolate', isSoldOut: false, scoopsSelected: 0 },
    { name: 'Strawberry', isSoldOut: false, scoopsSelected: 0 },
    { name: 'Mint Chip', isSoldOut: true, scoopsSelected: 1 },
    { name: 'Cookie Dough', isSoldOut: false, scoopsSelected: 0 },
  ] 
  return (
    <>
    <Header />
    <FlavorList flavorslist={flavors}/>
    </>
  )
}

export default App
