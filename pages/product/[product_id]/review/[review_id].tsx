import { useRouter } from "next/router"
export default function Review() {
    const router=useRouter()
    const {review_id, product_id} = router.query
    return (
        <>
            <h1>Review - {review_id} for Product - {product_id}</h1> 
        </>
    )
}