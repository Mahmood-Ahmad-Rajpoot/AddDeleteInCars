 import SecondNavbar from '../SecondNavbar/SecondNavbar'
import SideNavbar from '../settings/SideNavbar'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'

const Wrapper = (props:any) => {
  const {headerName} = useSelector((store:any)=>store.headerSlice);
  const url = window.location.pathname.split('/')[1];
  console.log(url);
  
  return (
    <div className='wrapper'>
        <div className='fixed w-full z-50'>
        <Navbar/>
        <SecondNavbar/>
        </div>
        <div className='flex   '>
     {headerName === 'Settings' && <div className='fixed w-auto'>  <SideNavbar /></div>}
        <div className={` w-full min-h-[100vh] max-h-auto mt-[130px]  ${ headerName === 'Settings' && 'ml-[250px] bg-[lightgrey]' } overflow-hidden p-[30px]`}>{props.children}</div>
        </div>
        

    </div>
  )
}

export default Wrapper