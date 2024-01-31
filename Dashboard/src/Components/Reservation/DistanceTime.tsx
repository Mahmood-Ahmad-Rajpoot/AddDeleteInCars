import React from 'react'

interface DistanceTimeProps{
    details:any;
     
}


const DistanceTime:React.FC<DistanceTimeProps> = ({details}) => {
  return (
   <>  
        <div className="flex gap-5">
          <span className=" border-1 rounded-xl">
            <h1 className="text-[1.2rem] font-semibold">
              {  details.formatedDistance}
            </h1>
          </span>
          <span className=" border-1 rounded-xl">
            <h1 className="text-[1.2rem] font-semibold">
              {  details.formattedTime}
            </h1>
          </span>
        </div>
    
      </>
  )
}

export default DistanceTime