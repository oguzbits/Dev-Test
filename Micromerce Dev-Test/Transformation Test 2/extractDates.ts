import customer1 from './customer1.json'
import customer2 from './customer2.json'
import customer3 from './customer3.json'
import customer4 from './customer4.json'

//sollen wir das hier schon providen?
type bonus = {
    start: string,
    end: string
}

export const extractDates = (customer) => {
    if (!customer.ListeTimestopsBonustime || customer.ListeTimestopsBonustime.toLowerCase() === 'null') {
        return []
    }
    return customer.ListeTimestopsBonustime
        .map(e => e.trim)
        .split('|')
        .map((e) => e.trim())
        .map((e) => {
            const bothDates = e.split('-').map(e => e.trim)
            if (e[0].length !== 10 || e[1].length !== 10)
            return {
                startDate: e[0],
                endDate: e[1]
            }
        }
        )
}

console.log(extractDates(customer1))
console.log(extractDates(customer2))
console.log(extractDates(customer3))
console.log(extractDates(customer4))