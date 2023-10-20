import { useEffect, useState } from "react"

const useFetch=(url)=>{
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                setData(result.products)// if we are taking data from fake store there is only need of result not result.products
            })
        })
    },[url])
    return data
    }
export default useFetch;
