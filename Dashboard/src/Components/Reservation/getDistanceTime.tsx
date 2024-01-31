export const getDistanceTime = (arr:any[]) =>{
    let distance =0, time =0; 
      arr.forEach(element => {
        distance += element.distance.value;
        time += element.duration.value;
        
      });
  // converting time
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const formattedTime = `${hours} hours ${minutes} minutes`
  const formatedDistance = `${(distance/1000).toFixed(2)} Km`
 
      console.log('DT:',distance/1000,'km',formattedTime);
      return {formatedDistance, formattedTime}
      
  
  }