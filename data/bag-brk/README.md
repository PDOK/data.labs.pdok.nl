# Linkset BAG-BRK

In het kader van een INSPIRE RDF pilot is er gewerkt aan een linkset tussen de BAG panden en BRK percelen. Het achterliggende verhaal is [hier](https://data.labs.pdok.nl/stories/bag-brk/).

## Bestanden en scripts
Alle benodigdheden om de brondata in deze set te genereren, is hier te vinden:
- De [brondata van de linkset](data/BRK-Adressen-Koppelingen-Nederland-07062016.zip)
- Het [transformatiescript](bag-brk.py)

## Installatie en gebruik
Pak de [zip](data/Inspire-BRK-Adressen-Koppelingen-Nederland-07062016.zip) uit en pak de sub-zips uit. 

Het draaien van het script vereist [Python 3](https://www.python.org/downloads/) (of hoger). Het script gebruikt, buiten standaard libraries, de `requests` bibliotheek:
`pip install requests`.

Draaien van het script gaat als volgt:
1. Unzip data/Inspire-BRK-Adressen-Koppelingen-Nederland-07062016.zip
2. Run `python3 create_db.py`
4. Run `python3 bag-brk.py data/BRK-Adressen-Koppelingen-Nederland-07062016.csv`

Het script draait nu ongeveer een week. Mocht het script crashen, dan is het met hetzelfde commando te hervatten. Het zal dan verder gaan waar het gebleven was. Het gebruik van een sqlite3 database is met een goede reden: het maakt en index aan van links die al verwerkt zijn. Hiermee wordt niet alleen de hervatting verkort van dagen naar minuten, maar ook het opstarten van het script gaat een stuk sneller en de memory-footprint van het script is aanzienlijk kleiner. 

Wil je alleen een kleine test draaien, gebruik dan:
```bash
python bag-brk.py data/lko-head.csv
```

De output van de transformatie wordt opgeslagen in `linkset.nq`