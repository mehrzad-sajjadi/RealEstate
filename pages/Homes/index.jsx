import HomeCard from "@/components/modules/HomeCard";
import db from "@/data/db.json"
import Link from "next/link";
import { useEffect, useState } from "react";
export default function AllHomes() {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([...db.homes]);
    const [sort, setSort] = useState("-1");
    const [pagination, setPagination] = useState([...db.homes].length);
    const pageSize = 3;


    //start Filters 
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
        setResult(() => {
            return db.homes.filter((e) => e.title.includes(search));
        });
    }, [search]);
    useEffect(() => {
        switch (sort) {
            case "price": {
                const sortedHomes = result.toSorted((a, b) => a.price - b.price);
                setResult(sortedHomes);
                break;
            }
            case "roomCount": {
                const sortedHomes = result.toSorted((a, b) => a.roomCount - b.roomCount);
                setResult(sortedHomes);
                break;
            }
            case "meterage": {
                const sortedHomes = result.toSorted((a, b) => a.meterage - b.meterage);
                setResult(sortedHomes);
                break;
            }
            default: {
                setResult([...db.homes]);
            }
        }
    }, [sort]);
    //end Filters 


    function pagainateHandler(event, page) {
        event.preventDefault();
        const endIndex = page * pageSize;
        const startIndex = endIndex - pageSize;
        setResult(db.homes.slice(startIndex, endIndex));
    }

    return (
        <div className="home-section" id="houses">
            {/* Filter */}
            <div className="home-filter-search">
                <div className="home-filter">
                    <select onChange={(e) => setSort(e.target.value)} defaultValue={sort} >
                        <option value="-1" >انتخاب کنید</option>
                        <option value="price">بر اساس قیمت</option>
                        <option value="roomCount">بر اساس تعداد اتاق</option>
                        <option value="meterage">بر اساس اندازه</option>
                    </select>
                </div>

                <div className="home-search">
                    <input type="text" value={search} onChange={handleSearch} placeholder="جستجو کنید" />
                </div>
            </div>

            {/* HomeCard List Rendering */}
            <div className="homes">
                {
                    result.slice(0, pageSize).map((home, index) => (
                        <HomeCard key={index} {...home} />
                    ))
                }
            </div>

            {/* pagination btns */}
            <ul className="pagination__list">
                {
                    Array.from({ length: Math.ceil(pagination / pageSize) }).map((item, index) => (
                        <li key={index} 
                            onClick={(event) => pagainateHandler(event, index + 1)} 
                            className="pagination__item active"
                        >
                            <a href="#" className="">{index + 1}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}