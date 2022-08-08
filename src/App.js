import React, { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./Components/Countries";
import "./App.css";
import Serach from "./Components/Serach";

const url = "https://restcountries.com/v3.1/all";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetching data by axios
  const makeRequest = async (url) => {
    const apiContainer = await axios.get(url);
    return apiContainer.data;
  };
  const fetchData = () => {
    makeRequest(url)
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => setError(error));
    setisLoading(false);
    setError(null);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // removing country
  const handleRemoveCountry = (name) => {
    const filteredCountries = countries.filter(
      (country) => country.name.common !== name
    );
    setCountries(filteredCountries);
  };

  // matching search
  const keys = ["common"];
  const handleSearch = (countryName) => {
    const userValue = countryName.toLowerCase();
    const searchCountry = countries.filter((country) =>
      keys.some((key) => country.name[key].toLowerCase().includes(userValue))
    );
    setCountries(searchCountry);
  };

  return (
    <>
      <h1>Country App</h1>
      <Serach search={handleSearch} />
      {isLoading && (
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Loading ...</h2>
      )}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries removeCountry={handleRemoveCountry} countries={countries} />
      )}
    </>
  );
};
export default App;
