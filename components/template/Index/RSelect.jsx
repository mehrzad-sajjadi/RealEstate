export default function RSelect({ arrays }) {

    arrays.map((e)=>{
        console.log("e",e.name);
    });
    return (
        <div className="flex flex-col mx-10">
            <select className="cursor-pointer">
                <option value="">Select a country</option>
                {
                    arrays.map((array) =>(
                        <option value={array.id}>
                            {array.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}