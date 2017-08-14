# one-time migration of csv to db
import csv
import sqlite3

conn = sqlite3.connect('db/processed-lines.db')
c = conn.cursor()

processed_lines = []
print('Opening file...')
with open('data/processed-lines.csv', 'r') as pr:
    processed = csv.reader(pr)
    for line in processed:
        processed_lines.append(line)

print('Inserting rows into database...')
c.executemany('INSERT INTO processed (cadastral_designation, bag_nummeraanduiding_id, match_type, parcel_uri, '
              'dummy, mother_parcel_match, parcel_error) VALUES (?, ?, ?, ?, ?, ?, ?)', processed_lines)

print('Committing records...')
conn.commit()
conn.close()

print('Done!')
