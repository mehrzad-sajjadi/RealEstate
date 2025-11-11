//sendDataToParent در زمانی که این تابع اجرا بشه پارامتر داخلش به والد ارسال میشه
export default function RSelect({ arrays,sendDataToParent,title }) {
    function test(event){
        sendDataToParent(event.target.value);
    };

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