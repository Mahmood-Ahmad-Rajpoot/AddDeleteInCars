import React from 'react'
import Reservation from '../../Reservation/Reservation';

interface RoutingProps{
    serviceDetail:string;
}

const Routing:React.FC<RoutingProps> = ({serviceDetail}) => {
    let placeHolders={};
    if(serviceDetail==='To Airport')      placeHolders = {from:'Enter Pick up Location', to:'Enter Airport Location'}
    if(serviceDetail==='From Airport')    placeHolders = {from:'Enter Airport Location', to:'Enter Drop off Location'}
    if(serviceDetail==='Point to Point')  placeHolders = {from:'Enter Pick up Point', to:'Enter Drop off Point'}
    if(serviceDetail==='Hourly Charter')  placeHolders = {from:'Enter Pick up Point', to:'Enter Drop off Location'}

  return (
    <div className='w-full '>
        <h1 className="text-[1.3rem] text-blue-950 mb-3 mt-3">
          Routing
        </h1>
        
        {serviceDetail==='To Airport' && <Reservation placeHolders={placeHolders}  hourlyLocal='local' isShowMap={false}/>}
       {serviceDetail==='From Airport' && <Reservation placeHolders={placeHolders} hourlyLocal='local' isShowMap={false}/>}
       {serviceDetail==='Point to Point' && <Reservation placeHolders={placeHolders} hourlyLocal='local' isShowMap={false}/>}
       {serviceDetail==='Hourly Charter' && <Reservation placeHolders={placeHolders} hourlyLocal='hourly' isShowMap={false}/>}
    </div>
  )
}

export default Routing