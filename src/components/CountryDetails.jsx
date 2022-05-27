import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { countryname } = useParams();

  const getCountryDetails = async () => {
    try {
      const response = await fetch(
        'https://ih-countries-api.herokuapp.com/countries/${countryname}'
      );
      const responseJSON = await response.json();
      setCountryDetails(responseJSON);
      console.log(responseJSON);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountryDetails();
  });

  if (CountryDetails === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h3>{countryDetails}</h3>
      <p>{countryDetails.alpha2Code}</p>
      <p>{countryDetails.common}</p>
      <p>{countryDetails.img}</p>
    </div>
  );
}

export default CountryDetails;
