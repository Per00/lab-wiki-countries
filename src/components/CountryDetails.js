import { countries } from '../countries.json';
import { Params } from 'react-router-dom';

function CountryDetails() {
  const { id } = Params();
  console.log(id);

  const countryFiltered = countries.filter((eachCountry) => {
    return eachCountry.alpha3Code === id;
  });
}
