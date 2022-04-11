// Sleep Hours through the week. 
const getSleepHours = day => {
 switch(day){
   case 'Monday':
    return 5;
   
   case 'Tuesday':
    return 8;
  
  case 'Wednsday':
   return 8;
   
  case 'Thursday':
   return 8;
 
  case 'Friday':
   return 8;
  
  case 'Saturday':
   return 8;
 
  case 'Sunday':
  return 6;
 }
}
//Actual Sleep Hours 
const getActualSleepHours = () =>{
  return  5 + 8 + 8 + 8 + 8 + 8 + 6;
}
const getIdealSleepHours = idealHours => {
  return idealHours * 7;
}
//Calculate Sleep Debt 
const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours){
  console.log('You got the perfect amount of sleep.zzz');
} else if (actualSleepHours > idealSleepHours) {
 console.log ('You got' + " " + (idealSleepHours - actualSleepHours) + " " + 'hours more than needed. zzz');
} else if ( actualSleepHours < idealSleepHours) {
  console.log('You got' + " " + (idealSleepHours - actualSleepHours) + " " + 'hours less than sleep needed.zzz');
 } else {
    console.log('Get Some Sleep!zzz')
 }
}



calculateSleepDebt()

//console.log(getIdealSleepHours());
//console.log(getActualSleepHours());
