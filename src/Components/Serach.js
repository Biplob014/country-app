import React, { useEffect, useState } from "react";

const Serach = (props) => {
  const [searchCountry, setSearchCountry] = useState("");
  const handleChange = (event) => {
    let countryName = event.target.value;
    setSearchCountry(countryName);
  };

  useEffect(() => {
    props.search(searchCountry);
  }, [searchCountry]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        name="name"
        value={searchCountry}
        placeholder="Search your country"
        onChange={handleChange}
      />
    </div>
  );
};

export default Serach;
