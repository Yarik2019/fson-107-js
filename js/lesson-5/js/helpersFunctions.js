export function createDate() {
    const currentDate = new Date()
    const currentMonth = currentDate.toLocaleDateString('uk-UA', {month: "long"})
    const currentDay = currentDate.toLocaleDateString('uk-UA', {day: "numeric"})
    const currentWeekday = currentDate.toLocaleDateString('uk-UA', {weekday: "long"})
    const currentYear = currentDate.toLocaleDateString('uk-UA', {year: "numeric"})
    return {currentMonth, currentDay, currentWeekday, currentYear}
  }
  
export function getAge(ms) {
    return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25) )
  }