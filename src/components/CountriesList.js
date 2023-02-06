import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from "../countries.json"

export function CountriesList() {
  

  const [countries, setCountries] = useState(data)
  console.log(countries);
  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries.map((eachCountry, index) => {
        return (
          <div key={eachCountry.name.common + index}>
            <p>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                alt="flag"
              />
              <Link to={`/${eachCountry.alpha3Code}`}>
                {eachCountry.name.common}
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}
