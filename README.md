# Timeregistrering

## Hvordan kjøre applikasjonen

- Last ned oppgaven
- unzip mappen
- åpne mappen med filene
- dobbeltklikk på index.html filen
- pass på at du har en browser installert
---
- Last ned oppgaven
- Unzip mappen
- Åpne mappen med filene
- Åpne mappen i VS Code
- Last ned extension som heter live preview
- Åpne en .html fil i VS Code
- Klikk på symbolet opp i høyre hjørne som heter "Show preview"
- Klikk en gang til for å åpne det i en nettleser

Obs: Løsningen bruker localstorage, så hvis løsningen kun testes i preview inne i VS Code, så vil ikke timeregistreringen bli lagret eller vist i Resultater-fanen.

---

Forutsetninger:
Jeg har tatt høyde for at man ønsker å registere timer man har jobbet, og derfor gått ut i fra at tallet aldri vil være negativt eller 0.

Mangler:
Ikke hatt tid til å skrive tester.
Når det kommer til Input validering, så er det kun validert på client siden med HTML5.
Løsningen er ikke dårlig skalerbarhet, særlig for små skjermer.

---

## Kjente feil

> Kode på linje xx: " input type="number" min="1" step="1" required " passer på at det er kun hele positive tall som blir registrert. Valideringsmeldinger vises når kodelinje xx button onclick="saveHours()" ser slik ut. Meldingene vises ikke når button har onclick="saveHours(event)". Siden koden sender parameter til saveHours(), så vil dette være en bug der valideringen fungerer, men brukeren vil ikke få beskjed om eventuelle feilmeldinger.
>
> Feilmeldingene er som følger:
>
> - Ved desimaltall som input Eks 2.3 - **Please enter a valid value. The two nearest values are 2 and 3.**
> - Ved tomt felt på antall timer, uavhengig om kommetarfeltet er tomt eller ikke - **Please fill out this form.**
