 import SelectPersonLuggage from './SelectPerson&Luggage'
import SelectGratuity from './SelectGratuity'
import SelectDateTime from './SelectDateTime'
  
const PassengerDetails = () => {
   return (
    <div className='flex gap-3 w-full '>
        <SelectDateTime />
        <SelectPersonLuggage  />
        <SelectGratuity  />
    </div>
  )
}

export default PassengerDetails