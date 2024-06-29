import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <div className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {countries.map((country) => (
                    <Country country={country}></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;