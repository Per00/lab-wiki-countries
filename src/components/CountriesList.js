import { Link } from 'react-router-dom';

export function CountriesList({ countryList }) {
  return (
    <div>
      {countryList.map((eachCountry, index) => {
        return (
          <div key={eachCountry.name.common + index}>
            <p>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2code.toLowerCase()}.png`}
                alt="flag"
              />
              <Link to={`/${eachCountry.alpha3Code}`}>
                {eachCountry.name.common}
              </Link>
              <br></br>
            </p>
          </div>
        );
      })}
    </div>
  );
}
