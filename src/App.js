import React, { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./Components/Countries";
import "./App.css";
import Serach from "./Components/Serach";

const url = "https://restcountries.com/v3.1/all";
const App = () => {
  // const [isLoading, setisLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [countries, setCountries] = useState([]);
  // const [filteredCountries, setfilteredCountries] = useState(countries);
  // // fetching data
  // const fetchData = async (url) => {
  //   setisLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCountries(data);
  //     setfilteredCountries(data);
  //     setisLoading(false);
  //     setError(null);
  //   } catch (error) {
  //     setisLoading(false);
  //     setError(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData(url);
  // }, []);
  // // remove country
  // const handleRemoveCountry = (name) => {
  //   const filter = filteredCountries.filter(
  //     (country) => country.name.common !== name
  //   );
  //   setfilteredCountries(filter);
  // };
  // // handle search
  // const handleSearch = (searchvalue) => {
  //   let value = searchvalue.toLowerCase();
  //   const neewCountries = countries.filter((country) => {
  //     const countryName = country.name.common.toLowerCase();
  //     return countryName.startsWith(value);
  //   });
  //   setfilteredCountries(neewCountries);
  // };

  // practice
  const [countries, setCountries] = useState([]);
  // const [copyCountries, setcopyCountries] = useState(countries);
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
        // setcopyCountries(data);
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
  const handleSearch = (countryName) => {
    const searchCountry = countries.filter((country) => {
      const userValue = countryName.toLowerCase();
      const name = country.name.common.toLowerCase();
      return name.includes(userValue);
    });
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
