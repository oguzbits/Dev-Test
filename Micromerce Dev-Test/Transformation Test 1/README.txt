Aufgabe: Funktion toPositiveTemporal() bauen

Hier soll eine Funktion gebaut werden, die aus den Inputs ‘Zeiteinheit’         (‘M’/’Month’ – ‘D’/’Day’ – ‘W’/’Week’ – ‘Y’/’Year’) <-- nicht case-sensitive
und einer Zeitmenge                                                             (z.B. ‘1’/’6’/’12’) 
eine ‘duration’ im folgenden Format erbaut und zurückgibt:

type PositiveTemporal = {
    | { days: string}
    | { weeks: string}
    | { months: string}
    | { years: string}
    | { hours: string}
    | { minutes: string}
}

Für den Fall, dass die Zeitmenge gleich 0 ist, soll ein Error geworfen werden mit der Zeiteinheit, die angegeben wurde. 
Es soll einen dritten Input in die Funktion geben, der optional ist. Wenn dieser (z. B. auf true oder ‘nonNegativ’)  gesetzt ist, soll dieser Error nicht gesetzt werden, denn es handelt sich um ein ‘nonNegativTemporal’. 

Anmerkungen: 

- alle Inputs haben die Form eines Strings (letzter optional auch boolescher Wert)
- es ist nicht nötig, dass beispielsweise automatisch aus 12 Monaten ein Jahr gemacht wird oder aus 31 Tagen ein Monat
- wenn ein Error geworfen wird, sollte ein leeres Objekt ausgegeben werden
- die String-Inputs sollten nicht case-sensitive sein
- besonders gut wäre es, wenn Typescript-Definitionen, wann immer sinnvoll möglich, verwendet werden würde
- Aufruf dieser Funktion könnte beispielsweise so aussehen:


toPositiveTemporal(‘6’, ‘M‘, true)
    => {months: '6'}
toPositiveTemporal(‘1’, ‘M’, ‘nonNegative’)
    => {months: '1}
toPositiveTemporal(‘1’, ‘y’)
    => {years: '1'}
toPositiveTemporal('0', 'M')
    => {} & Error in console: e. g. `Unit in PositiveTemporal cannot be zero. Unit entered was 'M'`
toPositiveTemporal('0', '’Year’, true)
    => {years: '0'}
toPositiveTemporal('31', 'days')
    => {days: '31'}
toPositiveTemporal('2', 'm', false)
    => {months: '2'}