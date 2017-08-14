import sqlite3

conn = sqlite3.connect('db/processed-lines.db')
c = conn.cursor()
c.execute("CREATE TABLE processed (cadastral_designation text, bag_nummeraanduiding_id text, match_type text, "
          "parcel_uri text, dummy text, mother_parcel_match text, parcel_error text, timestamp timestamp default "
          "CURRENT_TIMESTAMP)")
c.execute('create index cadastral_designation_idx on processed (cadastral_designation)')
c.execute('create index bag_nummeraanduiding_id_idx on processed (bag_nummeraanduiding_id)')
