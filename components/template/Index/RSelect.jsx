import { useEffect, useState } from "react";

export default function RSelect({ arrays,sendDataToParent }) {
    const [data,setData] = useState();
    function test(e){
        setData(e.target.value);
    }
    useEffect(()=>{
        sendDataToParent(data);
    },[data]);
    return (
        <div className="flex flex-col mx-10">
            <select className="cursor-pointer" onChange={test}>
                <option value="">Select a country </option>
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