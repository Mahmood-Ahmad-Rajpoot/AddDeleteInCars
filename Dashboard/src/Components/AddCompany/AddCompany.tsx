 import { Outlet } from 'react-router'
import SideNavbar from './SideNavbar'

const AddCompany = () => {
  return (
    <div className='flex'>
        <SideNavbar/>
        <Outlet/>

    </div>
  )
}

export default AddCompany