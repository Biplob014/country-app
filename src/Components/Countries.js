import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import style from "./countries.module.css";

const Countries = (props) => {
  const handleremoveCountry = (name) => {
    props.removeCountry(name);
  };
  return (
    <section className={style.countries}>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return (
          <Country
            removeCountry={handleremoveCountry}
            country={{ ...countryNew }}
            key={countryNew.id}
          />
        );
      })}
    </section>
  );
};

export default Countries;
