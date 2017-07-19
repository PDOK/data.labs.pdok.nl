import time
import requests


def get_parcel_uri(params):
    # Don't flood the server
    time.sleep(0.2)

    r = requests.get('https://brk.basisregistraties.overheid.nl/api/v1/perceel', params=params)
    # Too many requests:
    if r.status_code == 429:
        time.sleep(2)  # Give it two seconds to recuperate
        r = requests.get('https://brk.basisregistraties.overheid.nl/api/v1/perceel', params=params)
    # Other bad response code:
    elif not r.status_code == 200:
        raise RuntimeError('Bad request response code %s on %s: %s' % (r.status_code, params, r.text))

    response_dict = r.json()

    # Not enough results:
    if len(response_dict['_embedded']['results']) == 0:
        raise ValueError('No results for %s' % params)

    # Ambiguous results:
    if len(response_dict['_embedded']['results']) > 1:
        raise ValueError('Ambiguous multiple results on request: %s' % response_dict['_embedded']['results'])

    uri = response_dict['_embedded']['results'][0]['_links']['source']['href']

    return uri


