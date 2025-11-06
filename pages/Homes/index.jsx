import HomeCard from "@/components/modules/HomeCard";
import db from "@/data/db.json"
import { useEffect, useState } from "react";
export default function AllHomes() {
    const [search, setSearch] = useState('');
    const [result,setResult] = useState([]);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    
    useEffect(()=>{
        setResult(()=>{
            return db.homes.filter((e)=>e.title.includes(search))
        });
    },[search]);

    return (
        <div className="home-section" id="houses">
            <div className="home-filter-search">
                <div className="home-filter">
                    {/* <select name="" id="">
                        <option defaultValue="" selected>انتخاب کنید</option>
                        <option defaultValue="">بر اساس قیمت</option>
                        <option defaultValue="">بر اساس تعداد اتاق</option>
                        <option defaultValue="">بر اساس ادرس</option>
                        <option defaultValue="">بر اساس اندازه</option>
                    </select> */}
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