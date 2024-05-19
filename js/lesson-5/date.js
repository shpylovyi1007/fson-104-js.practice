const currentDate = new Date();

export const data = {
    month: currentDate.toLocaleDateString('uk-UA', {
       month: 'long',
   }),
   
    day: currentDate.toLocaleDateString('uk-UA', {
       day: 'numeric'
   }),
   
    weekDay: currentDate.toLocaleDateString('uk-UA', {
       weekday: 'long',
   }),
   
    year: currentDate.toLocaleDateString('uk-UA', {
       year: 'numeric',
   })
}