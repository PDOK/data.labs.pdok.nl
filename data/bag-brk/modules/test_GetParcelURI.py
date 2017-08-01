import unittest
from . import GetParcelURI


class TestUtil(unittest.TestCase):
    def test_parcel_from_sparql(self):
        parameters = {
            'kadastraleGemeentecode': 'ADB00',  # cadastral municipality name
            'sectie': 'E',  # cadastral municipality section
            'perceelnummer': 760  # parcel number
        }
        uri = GetParcelURI.get_parcel_uri_from_sparql(params=parameters)
        self.assertEqual(uri, 'http://brk.basisregistraties.overheid.nl/id/perceel/370209219')
