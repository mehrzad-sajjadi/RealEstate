import { useRouter } from "next/router";

export default function HomeDetails(){
    const router = useRouter();

    // console.log(router.query.id);
    return(
        <>
            <h1>Home detail Page {router.query.id}</h1>
        </>
    )    
}