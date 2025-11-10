import { useEffect, useState } from "react";
import RSelect from "@/components/template/Index/RSelect";

export default function selection() {

    // Static country data
    const countries = [
        { id: 1, name: 'USA' },
        { id: 2, name: 'Canada' },
    ];

    const cities = [
        { id: 1, name: "New York", country_id: 1 },
        { id: 2, name: "Los Angeles", country_id: 1 },
        { id: 3, name: "Chicago", country_id: 1 },
        { id: 4, name: "Toronto", country_id: 2 },
        { id: 5, name: "Vancouver", country_id: 2 },
        { id: 6, name: "Montreal", country_id: 2 },
    ];
    const [selectedCountry, setSelectedCountry] = useState('');

    const [availableCities, setAvailableCities] = useState([]);

    const [selectedCity, setSelectedCity] = useState([]);

    function handleCountryChange(e) {
        const country = e.target.value;
        setSelectedCountry(country);
        // const 
        // console.log(cities.filter((e)=>e.country_id==country));
        setAvailableCities(cities.filter((e) => e.country_id == country));
    }
    useEffect(() => {
        console.log(availableCities);
    }, [availableCities])

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <div>
            <RSelect label="کشور" arrays={countries}></RSelect>


            {/* <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select a country</option>
                {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                        {country.name}
                    </option>
                ))}
            </select>


            {selectedCountry &&
                <select onChange={handleCityChange} value={selectedCity}>
                    <option value="">Choos city</option>
                    {availableCities.map((city) => (
                        <option key={city.id} value={city.id}>
                            {city.name}
                        </option>
                    ))}
                </select>
            }  */}

        </div>

    );
}