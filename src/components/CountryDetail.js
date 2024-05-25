import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        setCountry(response.data[0]);

      })
      .catch(error => {
        setError('Could not fetch country details');
      });
  }, [name]);
  
  if (error) {
    return <div>{error}</div>;
  }

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="my-4">{country.name.common}</h1>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} className="img-fluid mb-4" style={{
        border: '3px solid black',
        maxHeight: 500,
        maxWidth: 700
        }} />
      <p><strong>The Capital of {country.name.common} is:</strong> {country.capital}</p>
      <Link to="/" className="btn btn-primary mt-4">Back to Country List</Link>
    </div>
  );
};

export default CountryDetail;
