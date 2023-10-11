import axios from "axios"
const { Auth } = require("two-step-auth");
import { useEffect, useState } from "react"

export default function Home() {
    const [data, setData] = useState([])
    const [email, setEmail] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await axios.get('https://fakestoreapi.com/products')
                setData(products.data)
            }
            catch (error) {
                console.log('16::', error);
            }
        }
        fetchData()

    }, [])
    const handleEmail = async () => {
        console.log('25 0::', email)
        try {
            const res = await Auth(email)
            console.log('25 1::', res)
        }
        catch (error) {
            console.log('29::', error);
        }

    }

    return (
        <>
            <input type='email' onChange={(e) => setEmail(e.target.value)} /> <button onClick={handleEmail}>Send OTP</button>
            {
                data?.map((item: any) => <li>{item.title}</li>)
            }
        </>
    )
}