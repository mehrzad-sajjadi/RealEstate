import { useEffect, useMemo, useState } from "react";
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

    // Emit
    //مقادیر دریافت شده از فرزند
    const [countryId, setCountryId] = useState();
    function recivedCountry(data) {
        setCountryId(data);
    }
    
    const accessCities = useMemo(() => {
        return countryId ? cities.filter((e)=>e.country_id == countryId) : []
    }, [countryId])

    const [cityId, setCityId] = useState();
    function recivedCity(param) {
        setCityId(param);
    }


    return (
        <div className="">
            <div className="w-full flex max-h-max ">
                <RSelect arrays={countries} sendDataToParent={recivedCountry} title="choos country"></RSelect>

                {countryId &&
                    <p className="bg-gray-500">
                        {countryId}
                    </p>
                }
                {countryId &&
                    <RSelect arrays={accessCities} sendDataToParent={recivedCity} title="choos city"></RSelect>
                }
            </div>
        </div>

    );
}