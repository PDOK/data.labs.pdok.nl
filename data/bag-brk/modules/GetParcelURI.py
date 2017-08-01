from urllib.parse import urlencode

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


def get_parcel_uri_from_sparql(params):
    url = "https://data.pdok.nl/sparql"
    query = '''
        prefix brk:<http://brk.basisregistraties.overheid.nl/def/brk#>
        prefix brk_beg:<http://brk.basisregistraties.overheid.nl/id/begrip/>
        
        select ?uri where {
          ?uri a brk:Perceel;
               brk:kadastraleGemeente brk_beg:%s ;
               brk:sectie "%s" ;
               brk:perceelnummer %s .  
        }              
    ''' % (params['kadastraleGemeentecode'], params['sectie'], str(params['perceelnummer']))

    payload = urlencode({'query': query})

    headers = {
        'accept': "application/sparql-results+json",
        'content-type': "application/x-www-form-urlencoded",
        'cache-control': "no-cache",
        'postman-token': "1361e774-aa9a-bc11-b140-9564f18f5a06"
    }

    response = requests.request("POST", url, data=payload, headers=headers)

    # Bad response code:
    if not response.status_code == 200:
        raise RuntimeError('Bad request response code %s on %s: %s' % (response.status_code, params, response.text))

    response_dict = response.json()

    # Not enough results:
    if len(response_dict['results']['bindings']) == 0:
        raise ValueError('No results for %s' % params)

    # Ambiguous results:
    if len(response_dict['results']['bindings']) > 1:
        raise ValueError('Ambiguous multiple results on request: %s' % response_dict['results']['bindings'])

    uri = response_dict['results']['bindings'][0]['uri']['value']

    return uri


