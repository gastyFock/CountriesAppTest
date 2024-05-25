import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CountriesList = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then (response => {
            setCountries(response.data);
            setFilteredCountries(response.data);
        })
        .catch (error => {
            setError('Could not fetch any countries');
        });
    },[]);

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredCountries(countries.filter(country =>
            country.name.common.toLowerCase().includes(value)
        ));
    }

    if (error) {
        return <div>{error}</div>;        
    }

    return (
        <div className="container">
            <h1 className="my-4">Countries App by gastyFock</h1>
            <input
            type="text"
            className="form-control mb-4"
            placeholder="Search for a country"
            value={searchTerm}
            onChange={handleSearchChange}
            />
            <div className="list-group">
                {filteredCountries.map(country => (
                    <Link
                    key={country.cca3}
                    to={`/country/${country.name.common}`}
                    className="list-group-item list-group-item-action"
                    >
                        {country.name.common}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CountriesList;