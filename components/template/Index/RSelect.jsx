import { useEffect, useState } from "react";

//sendDataToParent در زمانی که این تابع اجرا بشه پارامتر داخلش به والد ارسال میشه
export default function RSelect({ arrays,sendDataToParent,title }) {
    const [data,setData] = useState();
    function test(e){
        setData(e.target.value);
    }
    useEffect(()=>{
        sendDataToParent(data);
    },[data]);

    return (
        <div className="flex flex-col mx-10">
            <select className="cursor-pointer min-w-min" onChange={test}>
                <option value="">{title}</option>
                {
                    arrays.map((array) =>(
                        <option key={array.id} value={array.id}>
                            {array.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}