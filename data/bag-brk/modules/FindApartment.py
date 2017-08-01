# Initialize the lookup table for apartments
import csv

lut = []
reader = csv.DictReader(open('Apprechtcomplex-met-Grondpercelen-mei2017.csv'), fieldnames=['apartment', 'parcel'])

# Populate the lookup table: allows file handle to be released.
for row in reader:
    lut.append(row)


def find_apartment(apartment):
    parcel_matches = []

    for entry in lut:
        if entry['apartment'] == apartment:
            parcel_matches.append(entry['parcel'])

    return parcel_matches
