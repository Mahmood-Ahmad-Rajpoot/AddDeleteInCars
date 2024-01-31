 import Wrapper from '../Components/wrapperComponent/Wrapper'
 import Reservation from '../Components/Reservation/Reservation'

const HourlyReservationPage = () => {
  const placeHolders={from:'Enter Pick up Location', to:'Enter Drop off Location'}

  return (
    <Wrapper>
        <Reservation placeHolders={placeHolders}  hourlyLocal='local' isShowMap={true} />
      
    </Wrapper>
  )
}

export default HourlyReservationPage