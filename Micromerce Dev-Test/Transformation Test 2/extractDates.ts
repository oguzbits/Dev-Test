import customer1 from './customer1.json'
import customer2 from './customer2.json'
import customer3 from './customer3.json'
import customer4 from './customer4.json'

//sollen wir das hier schon providen?
type bonus = {
    start: string,
    end: string
}

const extractDates = (customer): bonus[] => {
    return customer.ListeTimeStopBonusTime
    // your code here
}

console.log(extractDates(customer1))
console.log(extractDates(customer2))
console.log(extractDates(customer3))
console.log(extractDates(customer4))