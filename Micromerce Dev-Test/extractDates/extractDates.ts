// import customer1 from './customer1.json'
// import customer2 from './customer2.json'
// import customer3 from './customer3.json'
// import customer4 from './customer4.json'

//sollen wir das hier schon providen?

const extractDates = (customer: any) => {
    if (!customer.ListeTimestopsBonustime || customer.ListeTimestopsBonustime.toLowerCase() === 'null') {
        return []
    }
    return customer.ListeTimestopsBonustime
        .map((e: string) => e.trim())
        .split('|')
        .map((e: string) => e.trim())
        .map((e: string) => {
            const bothDates = e.split('-').map((el: string) => el.trim())
            const startDate = bothDates[0]
            const endDate = bothDates[1]
            if (startDate.length !== 10 || endDate.length !== 10) return 'string length is invalid'
            return {
                startDate,
                endDate
            }
        })
}

export default extractDates

// console.log(extractDates(customer1))
// console.log(extractDates(customer2))
// console.log(extractDates(customer3))
// console.log(extractDates(customer4))