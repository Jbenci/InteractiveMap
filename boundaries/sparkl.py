import requests
import os
import json
import time

# List of country Wikidata IDs (using camelCase for filenames)
countries = {
    'Afghanistan': 'Q889',
    'Albania': 'Q222',
    'Algeria': 'Q262',
    'Andorra': 'Q228',
    'Angola': 'Q916',
    'Antigua and Barbuda': 'Q781',
    'Argentina': 'Q414',
    'Armenia': 'Q399',
    'Australia': 'Q408',
    'Austria': 'Q40',
    'Azerbaijan': 'Q227',
    'Bahamas': 'Q778',
    'Bahrain': 'Q398',
    'Bangladesh': 'Q902',
    'Barbados': 'Q244',
    'Belarus': 'Q184',
    'Belgium': 'Q31',
    'Belize': 'Q242',
    'Benin': 'Q962',
    'Bhutan': 'Q917',
    'Bolivia': 'Q750',
    'Bosnia and Herzegovina': 'Q225',
    'Botswana': 'Q963',
    'Brazil': 'Q155',
    'Brunei': 'Q921',
    'Bulgaria': 'Q219',
    'Burkina Faso': 'Q965',
    'Burundi': 'Q967',
    'Cabo Verde': 'Q1011',
    'Cambodia': 'Q424',
    'Cameroon': 'Q1009',
    'Canada': 'Q16',
    'Central African Republic': 'Q929',
    'Chad': 'Q657',
    'Chile': 'Q298',
    'China': 'Q148',
    'Colombia': 'Q739',
    'Comoros': 'Q970',
    'Congo (Congo-Brazzaville)': 'Q971',
    'Costa Rica': 'Q800',
    'Croatia': 'Q224',
    'Cuba': 'Q241',
    'Cyprus': 'Q229',
    'Czechia': 'Q213',
    'Democratic Republic of the Congo': 'Q974',
    'Denmark': 'Q35',
    'Djibouti': 'Q977',
    'Dominica': 'Q784',
    'Dominican Republic': 'Q786',
    'Ecuador': 'Q736',
    'Egypt': 'Q79',
    'El Salvador': 'Q792',
    'Equatorial Guinea': 'Q983',
    'Eritrea': 'Q986',
    'Estonia': 'Q191',
    'Eswatini': 'Q1050',
    'Ethiopia': 'Q115',
    'Fiji': 'Q712',
    'Finland': 'Q33',
    #'France': 'Q142',
    'Gabon': 'Q1000',
    'Gambia': 'Q1005',
    'Georgia': 'Q230',
    #'Germany': 'Q183',
    'Ghana': 'Q117',
    'Greece': 'Q41',
    'Grenada': 'Q769',
    'Guatemala': 'Q774',
    'Guinea': 'Q1006',
    'Guinea-Bissau': 'Q1007',
    'Guyana': 'Q734',
    'Haiti': 'Q790',
    'Honduras': 'Q783',
    'Hungary': 'Q28',
    'Iceland': 'Q189',
    'India': 'Q668',
    'Indonesia': 'Q252',
    'Iran': 'Q794',
    'Iraq': 'Q796',
    'Ireland': 'Q27',
    'Israel': 'Q801',
    'Italy': 'Q38',
    'Jamaica': 'Q766',
    'Japan': 'Q17',
    'Jordan': 'Q810',
    'Kazakhstan': 'Q232',
    'Kenya': 'Q114',
    'Kiribati': 'Q710',
    'Kuwait': 'Q817',
    'Kyrgyzstan': 'Q813',
    'Laos': 'Q819',
    'Latvia': 'Q211',
    'Lebanon': 'Q822',
    'Lesotho': 'Q1013',
    'Liberia': 'Q1014',
    'Libya': 'Q1016',
    'Liechtenstein': 'Q347',
    'Lithuania': 'Q37',
    'Luxembourg': 'Q32',
    'Madagascar': 'Q1019',
    'Malawi': 'Q1020',
    'Malaysia': 'Q833',
    'Maldives': 'Q826',
    'Mali': 'Q912',
    'Malta': 'Q233',
    'Marshall Islands': 'Q709',
    'Mauritania': 'Q1025',
    'Mauritius': 'Q1027',
    'Mexico': 'Q96',
    'Micronesia': 'Q702',
    'Moldova': 'Q217',
    'Monaco': 'Q235',
    'Mongolia': 'Q711',
    'Montenegro': 'Q236',
    'Morocco': 'Q1028',
    'Mozambique': 'Q1029',
    'Myanmar': 'Q836',
    'Namibia': 'Q1030',
    'Nauru': 'Q697',
    'Nepal': 'Q837',
    'Netherlands': 'Q55',
    'New Zealand': 'Q664',
    'Nicaragua': 'Q811',
    'Niger': 'Q1032',
    'Nigeria': 'Q1033',
    'North Korea': 'Q423',
    'North Macedonia': 'Q221',
    'Norway': 'Q20',
    'Oman': 'Q842',
    'Pakistan': 'Q843',
    'Palau': 'Q695',
    'Panama': 'Q804',
    'Papua New Guinea': 'Q691',
    'Paraguay': 'Q733',
    'Peru': 'Q419',
    'Philippines': 'Q928',
    'Poland': 'Q36',
    'Portugal': 'Q45',
    'Qatar': 'Q846',
    'Romania': 'Q218',
    'Russia': 'Q159',
    'Rwanda': 'Q1037',
    'Saint Kitts and Nevis': 'Q763',
    'Saint Lucia': 'Q760',
    'Saint Vincent and the Grenadines': 'Q757',
    'Samoa': 'Q683',
    'San Marino': 'Q238',
    'Sao Tome and Principe': 'Q1039',
    'Saudi Arabia': 'Q851',
    'Senegal': 'Q1041',
    'Serbia': 'Q403',
    'Seychelles': 'Q1042',
    'Sierra Leone': 'Q1044',
    'Singapore': 'Q334',
    'Slovakia': 'Q214',
    'Slovenia': 'Q215',
    'Solomon Islands': 'Q685',
    'Somalia': 'Q1045',
    'South Africa': 'Q258',
    'South Korea': 'Q884',
    'South Sudan': 'Q958',
    'Spain': 'Q29',
    'Sri Lanka': 'Q854',
    'Sudan': 'Q1049',
    'Suriname': 'Q730',
    'Sweden': 'Q34',
    'Switzerland': 'Q39',
    'Syria': 'Q858',
    'Tajikistan': 'Q863',
    'Tanzania': 'Q924',
    'Thailand': 'Q869',
    'Timor-Leste': 'Q574',
    'Togo': 'Q945',
    'Tonga': 'Q678',
    'Trinidad and Tobago': 'Q754',
    'Tunisia': 'Q948',
    'Turkey': 'Q43',
    'Turkmenistan': 'Q874',
    'Tuvalu': 'Q672',
    'Uganda': 'Q1036',
    'Ukraine': 'Q212',
    'United Arab Emirates': 'Q878',
    #'United Kingdom': 'Q145',
    #'United States of America': 'Q30',
    'Uruguay': 'Q77',
    'Uzbekistan': 'Q265',
    'Vanuatu': 'Q686',
    'Vatican City': 'Q237',
    'Venezuela': 'Q717',
    'Vietnam': 'Q881',
    'Yemen': 'Q805',
    'Zambia': 'Q953',
    'Zimbabwe': 'Q954'
    # Add other countries as needed
}

# SPARQL endpoint
sparql_endpoint = "https://query.wikidata.org/sparql"

# SPARQL query template with placeholder for country_id and pagination (OFFSET)
query_template = '''
SELECT ?itemLabel ?coord ?article WHERE {{
  ?item wdt:P625 ?coord.
  ?item wdt:P17 wd:{country_id}.
  ?item wdt:P31 ?type.

  VALUES ?type {{
    wd:Q8502
    wd:Q23397
    wd:Q23442
    wd:Q79007
    wd:Q839954
    wd:Q41176
    wd:Q1437452
    wd:Q515
    wd:Q3957
    wd:Q178561
    wd:Q55488
  }}

  OPTIONAL {{
    ?article schema:about ?item ;
             schema:isPartOf <https://en.wikipedia.org/>.
  }}
  
  SERVICE wikibase:label {{ bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }}
}}
LIMIT 100 OFFSET {offset}
'''

# Directory to save the downloaded JSON files
output_dir = "C:/Users/Jason/Documents/Interactive Map Claude/countries"

# Create the output directory if it doesn't exist
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Function to run the SPARQL query with pagination and save the results
def fetch_data_for_country(country_name, country_id, max_offset=3000, step=100):
    file_path = os.path.join(output_dir, f"{country_name}.json")
    
    # Check if the file already exists
    if os.path.exists(file_path):
        print(f"Data for {country_name} already exists. Skipping.")
        return
    
    print(f"\nFetching data for {country_name} (Wikidata ID: {country_id})...")
    
    features = []
    
    for offset in range(0, max_offset, step):
        print(f"  - Fetching data for {country_name} with OFFSET {offset}")
        
        # Prepare the query by inserting the country ID and the current OFFSET
        query = query_template.format(country_id=country_id, offset=offset)
        
        try:
            # Send the request to the Wikidata SPARQL endpoint
            response = requests.get(sparql_endpoint, params={'query': query, 'format': 'json'})
            
            if response.status_code == 200:
                print(f"  Request successful for {country_name} (OFFSET {offset}). Processing data...")
                
                # Parse the JSON response
                data = response.json()
                bindings = data.get('results', {}).get('bindings', [])
                
                # Convert data to GeoJSON features
                for binding in bindings:
                    if 'coord' in binding and 'value' in binding['coord']:
                        coord = binding['coord']['value']
                        lon, lat = map(float, coord.replace('Point(', '').replace(')', '').split())
                        features.append({
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [lon, lat]
                            },
                            "properties": {
                                "name": binding.get('itemLabel', {}).get('value', 'Unknown'),
                                "article": binding.get('article', {}).get('value', None)
                            }
                        })
                
                # If no data is returned, stop fetching further pages
                if len(bindings) == 0:
                    print(f"  No more data for {country_name} at OFFSET {offset}. Stopping pagination.")
                    break
                
            else:
                print(f"Failed to fetch data for {country_name} (OFFSET {offset}). HTTP Status Code: {response.status_code}")
                break
        
        except Exception as e:
            print(f"An error occurred while fetching data for {country_name} (OFFSET {offset}): {e}")
            break

        # Wait briefly before the next request to avoid server overload
        time.sleep(1)
    
    # Save all data into a GeoJSON FeatureCollection
    if features:
        geojson_data = {
            "type": "FeatureCollection",
            "features": features
        }
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(geojson_data, f, ensure_ascii=False, indent=4)
        print(f"Data for {country_name} saved to {file_path}")
    else:
        print(f"No data found for {country_name}.")

# Iterate over the list of countries and fetch data for each
for country_name, country_id in countries.items():
    fetch_data_for_country(country_name, country_id)

print("\nData fetching completed.")
