import csv
import sqlite3

conn = sqlite3.connect('processed-lines.db')
c = conn.cursor()
# c.execute('CREATE TABLE processed (cadastral_designation text, bag_pand_id text, match_type text, parcel_uri text, '
#           'dummy text, mother_parcel_match text, parcel_error text, timestamp timestamp default CURRENT_TIMESTAMP)')
# c.execute('create index cadastral_designation_idx on processed (cadastral_designation)')

processed_lines = []

print('Opening file...')
with open('processed-lines.csv', 'r') as pr:
    processed = csv.reader(pr)
    for line in processed:
        processed_lines.append(line)

print('Inserting rows into database...')
c.executemany('INSERT INTO processed (cadastral_designation, bag_pand_id, match_type, parcel_uri, '
              'dummy, mother_parcel_match, parcel_error) VALUES (?, ?, ?, ?, ?, ?, ?)', processed_lines)

print('Committing records...')
conn.commit()
conn.close()

print('Done!')
