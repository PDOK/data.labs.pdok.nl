# Linkset BAG-BRK

In het kader van een INSPIRE RDF pilot is er gewerkt aan een linkset tussen de BAG panden en BRK percelen. Het achterliggende verhaal is [hier](https://data.labs.pdok.nl/stories/bag-brk/).

## Bestanden en scripts
Alle benodigdheden om de brondata in deze set te genereren, is hier te vinden:
- De [brondata van de linkset](BRK-Adressen-Koppelingen-Nederland-07062016.zip)
- Het [transformatiescript](bag-brk.py)

## Installatie en gebruik
Pak de [zip](Inspire-BRK-Adressen-Koppelingen-Nederland-07062016.zip) uit en pak de sub-zips uit. 

Het draaien van het script vereist [Python 3](https://www.python.org/downloads/) (of hoger). Het script gebruikt, buiten standaard libraries, de `requests` bibliotheek:
`pip install requests`.

Draaien van het script gaat als volgt:

```bash
python bag-brk.py BRK-Adressen-Koppelingen-Nederland-07062016.csv
```

Het script draait nu ongeveer een dag. Mocht het script crashen, dan is het met hetzelfde commando te hervatten. Het zal dan verder gaan waar het gebleven was. 

Wil je alleen een kleine test draaien, gebruik dan:
```bash
python bag-brk.py lko-head.csv
```

De output van de transformatie wordt opgeslagen in `linkset.nq`