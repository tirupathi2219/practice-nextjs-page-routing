import { useRouter } from "next/router"
export default function ProductDetails() {
    const router=useRouter()
    const product_id = router.query.product_id
    return (
        <>
            <h1>product Details about product {product_id}</h1> 
        </>
    )
}