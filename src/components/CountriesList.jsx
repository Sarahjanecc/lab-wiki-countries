import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountriesList(props) {
  const [countriesList, setCountriesList] = useState(null);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        setCountriesList(responseJson.results);
      })

      .catch((err) => console.log(err));
  }, []);

  if (countriesList === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <Link to="/">Navbar</Link>
      <Link to="/country/:alpha3Code">Country</Link>

      <h3>CountriesList</h3>

      {countriesList.map((eachCountry) => {
        return (
          <li>
            <Link to={eachCountry.alpha3Code} key={eachCountry.alpha3Code}>
              {eachCountry.name.common}
              <img
                src={`https://flagcdn.com/16x12/${eachCountry.alpha2Code}.png`}
                alt="country"
              />
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default CountriesList;
