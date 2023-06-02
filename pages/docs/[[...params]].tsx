import { useRouter } from "next/router"
export default function Documents() {
    const router = useRouter()
    const {params = []} = router.query
    if(params.length === 2){
        return <h1>viewing feature {params[0]} and concept {params[1]}</h1>
    }
    else if (params.length === 1) {
        return <h1>viewing feature {params[0]}</h1>
    }
    return (
        <>
            <h1>Docs Home Page</h1> 
        </>
    )
}