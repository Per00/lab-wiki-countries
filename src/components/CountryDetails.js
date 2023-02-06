import countries from '../countries.json';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { alpha3Code } = useParams();
  console.log(alpha3Code);

  const countryFiltered = countries.filter((eachCountry) => {
    return eachCountry.alpha3Code === alpha3Code;
  })[0];
  console.log(countryFiltered);
  return (
    <div class="col-7">
      <h1>France</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
               
                
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;