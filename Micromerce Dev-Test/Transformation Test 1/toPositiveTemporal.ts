type PositiveTemporal = {
    | { days: string}
    | { weeks: string}
    | { months: string}
    | { years: string}
    | { hours: string}
    | { minutes: string}
}

const toPositiveTemporal = (amount: string, unit: string, nonNegative): PositiveTemporal => {
    let amountAsInt: string = parseFloat(amount).toFixed(0);
  
    if (amountAsInt === "0") {
      if (!nonNegative) {
        console.error('', `unit in positive temporal cannot be 0`)
        amountAsInt = "1";
      }
    }
  
    switch (unit) {
      case 'Month':
      case 'M':
        return { months: amountAsInt }
      case 'Day':
      case 'D':
        return { days: amountAsInt }
      case 'Week':
      case 'W':
        return { weeks: amountAsInt }
      case 'Y':
      case 'Year': 
        return { years: amountAsInt }
      default:
        console.error('', `unable to handle period type - ${unit}`)
    }
  }