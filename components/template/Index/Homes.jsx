import db from "@/data/db.json";
import HomeCard from "@/components/modules/HomeCard";
export default function Homes(){
    return(
        <div className="homes">
			{
                db.homes.slice(0,6).map((data)=>{
                    return <HomeCard key={data.id} {...data} />
                })
            }
        </div>
    )
}