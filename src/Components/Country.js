import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const { country } = props.country;
  const { name, capital, flags, area, continents, population } = country;
  const handleClick = () => {
    props.removeCountry(name.common);
  };

  return (
    <article className={style.country}>
      <div className={style["country-div"]}>
        <img
          src={flags.png}
          alt={`${name.common} flag`}
          className={style.flag}
        />
        <h2>
          Country : <span className={style["country-name"]}>{name.common}</span>
        </h2>
        <h2>Capital : {capital}</h2>
        <h2>Population : {population}</h2>
        <h2>Area : {area}</h2>
        <h2>Continents : {continents}</h2>
        <button onClick={handleClick} className={style.btn}>
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
