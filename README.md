# Timeregistrering

Løsningen er skrevet i Javascript, HTML5 og CSS. Bootstrap, et CSS-rammeverk er brukt til design.
Løsningen bruker JSON og localstorage til lagring.

## Hvordan kjøre applikasjonen

- Last ned oppgaven
- Unzip mappen
- Åpne mappen med filene
- Åpne mappen i VS Code
- Last ned extension som heter live preview
- Åpne index.html filen i VS Code
- Klikk på symbolet opp i høyre hjørne i VS Code som ser ut som et vindu med en nøkkel og som heter "Show preview"
- Trykk på hamburgermenyen i preview-vinduet og velg "Open in browser"

Obs: Løsningen bruker localstorage, så hvis løsningen kun testes i preview inne i VS Code, så vil ikke timeregistreringen bli lagret eller vist i Resultater-fanen.

---

### Forutsetninger:

Jeg har tatt høyde for at man ønsker å registere timer man har jobbet, og derfor gått ut i fra at tallet aldri vil være negativt eller 0.

### Mangler:

- Ikke hatt tid til å skrive tester.
- Når det kommer til input validering, så er det kun validert på client siden med HTML5.
- Løsningen har dårlig skalerbarhet, særlig for små skjermer.
- Siden reloades for å få oppdatert resultat-siden, som innebærer at bekreftelse på at timene blir lagret vises i en alert for å ikke forsvinne umiddelbart, selv om det hadde vært å foretrekke om det ble vist visuelt på siden.
- Varsel om overskrevet antall timer blir først gitt når man bytter til resultat-siden, og ikke umiddelbart når det sendes inn. Denne er en del av funksjonen som viser resultater, men burde vært en egen funksjon.

---

## Kjente feil

> Kode på linje xx: " input type="number" min="1" step="1" required " passer på at det er kun hele positive tall som blir registrert. Valideringsmeldinger vises når kodelinje xx button onclick="saveHours()" ser slik ut. Meldingene vises ikke når button har onclick="saveHours(event)". Siden koden sender parameter til saveHours(), så vil dette være en bug der valideringen fungerer, men brukeren vil ikke få beskjed om eventuelle feilmeldinger.
>
> Feilmeldingene er som følger:
>
> - Ved desimaltall som input Eks 2.3 - **Please enter a valid value. The two nearest values are 2 and 3.**
> - Ved tomt felt på antall timer, uavhengig om kommetarfeltet er tomt eller ikke - **Please fill out this form.**
