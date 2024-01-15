 
import Wrapper from '../wrapperComponent/Wrapper'
import Cars from './Cars'
import SideNavbar from './SideNavbar'

const AddCompany = () => {
  return (
    <div className='w-full flex'>
        {/* <SideNavbar/> */}
        <Wrapper>
            <Cars/>
        </Wrapper>

    </div>
  )
}

export default AddCompany