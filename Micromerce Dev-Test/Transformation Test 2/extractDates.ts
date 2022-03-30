// import customer1 from './customer1.json'
// import customer2 from './customer2.json'
// import customer3 from './customer3.json'
// import customer4 from './customer4.json'

//sollen wir das hier schon providen?
type bonus = {
    startDate: string,
    endDate: string
}

const extractDates = (customer: any) => {
    if (!customer.ListeTimestopsBonustime || customer.ListeTimestopsBonustime.toLowerCase() === 'null') {
        return []
    }
    return customer.ListeTimestopsBonustime
        .map(e => e.trim)
        .split('|')
        .map((e) => e.trim())
        .map((e) => {
            const bothDates = e.split('-').map(el => el.trim)
            if (bothDates[0].length !== 10 || bothDates[1].length !== 10) console.error('string length is invalid')
            const result: bonus = {
                startDate: bothDates[0],
                endDate: bothDates[1]
            }
            return result
        })
}

export default extractDates

// console.log(extractDates(customer1))
// console.log(extractDates(customer2))
// console.log(extractDates(customer3))
// console.log(extractDates(customer4))