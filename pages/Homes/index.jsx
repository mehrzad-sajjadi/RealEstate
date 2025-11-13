import HomeCard from "@/components/modules/HomeCard";
import db from "@/data/db.json"
import { useEffect, useState } from "react";
export default function AllHomes() {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([...db.homes]);
    const [sort, setSort] = useState("-1");

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
            default:{
                setResult([...db.homes]);
            }
        }
    }, [sort]);
    // useEffect(() => {
    //     const newHomes = result.toSorted((a, b) => a.price - b.price);
    //     setResult(newHomes);
    // })

    return (
        <div className="home-section" id="houses">
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
            <div className="homes">
                {
                    result.map((home) => {
                        return <HomeCard key={home.id} {...home} />
                    })
                }
            </div>
            <ul className="pagination__list">
                <li className="pagination__item"><a href="#" className="">  </a></li>
                <li className="pagination__item"><a href="#" className="">2</a></li>
                <li className="pagination__item active"><a href="#" className="">1</a></li>
            </ul>
        </div>
    )
}