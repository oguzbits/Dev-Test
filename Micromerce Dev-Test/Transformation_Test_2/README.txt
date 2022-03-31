Aufgabe: Funktion – Array von Bonuszeiten

In diesem Fall soll aus einem Objekt, in diesem Fall ein Kunde, der als Input der Funktion 
'extractDates' erscheinen soll, ein Array aus Objekten gebaut werden, dass die Bonuszeiten darstellt. Ein Element des Arrays soll jeweils ein Objekt enhalten. Diese Objekt enhält jeweils ein Startdatum und ein Entdatum.
Kundendaten, die in die extractDates.ts importiert werden, sind seperat als .JSON zu finden. 
Die Informationen zu den Bonuszeiten sind am Kundenobjekt unter dem optionalen Property 'ListeTimestopsBonustime' zu finden. 
Die Ergebniss sollten Beispielsweise so aussehen: 

toExtractDates(customer1)       ("ListeTimestopsBonustime": "  15.03.2017 - 01.05.2017")
    => [{
        startDate:  '15.03.2017',
        endDate:    '01.05.2017'
    }]


toExtractDates(customer2)       ("ListeTimestopsBonustime": "12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008")
    => [{
        startDate:  '16.06.2008',
        endDate:    '11.07.2008'
    },
    {
        startDate:  '12.08.2008'
        endDate:    '11.11.2008'
    }]


toExtractDates(customer3)       ("ListeTimestopsBonustime": "NULL")
    => []


toExtractDates(customer4)       (keine Property "ListeTimestopsBonustime")
    => []


Anmerkungen: 
- wenn sinnvoll möglich, sollten TypeScript Definitionen verwendet werden
- Zwar ist das Format mit "Datum11 - Datum12 | Datum21 - Dautum22 | ..." fest, jedoch können Leerzeichen am Anfang, am Ende und zwischendrin entweder existieren, oder nicht da sein.
- wenn die Daten als Strings nicht die erwartete Länge haben, sollte ein Error geworfen werden

Zum Überprüfen Ihrer Lösung können sie im Terminal im Verzeichnis, in dem Sie gerade arbeiten den Command: 'npm install' und dann 'npm test' ausführen.