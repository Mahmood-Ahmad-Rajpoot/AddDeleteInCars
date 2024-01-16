import { useEffect } from 'react'

 
import Paths from "./paths/Paths"
import { useDispatch } from 'react-redux'
import { setDispatchBackUp } from './features/dispatchSlice'
 

 
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(setDispatchBackUp())},[])
 
  return <Paths/>
}

export default App
