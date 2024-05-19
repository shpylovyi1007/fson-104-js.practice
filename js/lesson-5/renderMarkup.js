
export function renderMarkup(rootSelector, data){
    rootSelector.querySelector('.js-month').textContent = data.month
    rootSelector.querySelector('.js-day-number').textContent = data.day
    rootSelector.querySelector('.js-day').textContent = data.weekDay
    rootSelector.querySelector('.js-year').textContent = data.year
    
}