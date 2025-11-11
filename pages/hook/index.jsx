// import { useEffect, useState } from "react";

// export default function hook(){
//     const [filter,setFilter] = useState("");
//     const [items,setItems] = useState(["APPLE","orange","banana"]);
//     const [filterdItems,setFilterdItems] = useState([]);

//     // useEffect(()=>{
//     //     setFilterdItems(items.filter((e)=>e.includes(filter) ))
//     // },[filter]);
//     const [b,setB] = useState(0);
//     const [a,setA] = useState(0);

//     useEffect(()=>{
//         console.log("ankda");
//     },[b])
//     return(
//         <div className="w-[100vh] flex flex-col justify-center items-center bg-blue-400 ">
//             <button onClick={()=>setB(b+1)} className="bg-white flex w-80 p-10 ">IN</button>
//             {b}
//             <button onClick={()=>setA(a+1)} className="bg-white flex w-80 p-10 ">IN</button>
//             {a}
//             <input type="text" onChange={(e)=>setFilter(e.target.value)} className="min-w-min min-h-min p-40 rounded bg-amber-300" />
//             <div>
//                 {filterdItems.map((item)=>(
//                     <p>{item}</p>
//                 ))}
//             </div>
//         </div>
//     );
// }



// کامپوننت فرزند که فقط در صورت تغییر props رندر مجدد می‌شود
const DisplayStyles = React.memo(({ style }) => {
    console.log('کامپوننت DisplayStyles دوباره رندر شد!');
    return <div style={style}>این یک نمونه استایل است.</div>;
});

function ParentComponent() {
    const [count, setCount] = useState(0);

    // ❌ روش غلط: این آبجکت در هر رندر دوباره ساخته می‌شود
    // const badStyle = { color: 'blue', fontSize: 16 };

    // ✅ روش صحیح: آبجکت فقط یک بار ساخته می‌شود و در حافظه باقی می‌ماند
    const goodStyle = useMemo(() => ({
        color: 'blue',
        fontSize: 16
    }), []); // <-- آرایه خالی یعنی این مقدار هرگز تغییر نمی‌کند

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>شمارنده: {count}</button>
            {/* پاس دادن goodStyle باعث می‌شود DisplayStyles دوباره رندر نشود */}
            <DisplayStyles style={goodStyle} />
        </div>
    );
}