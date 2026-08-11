import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    // "Give me all exchange rates for USD."
    const [data, setData] = useState({})   // reate a place to store data
    useEffect( () => {
        fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)   // Go to the internet and get the rates."
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
    }, [currency])  // runs when age loads and currency changes
    console.log(data);
    return data
}


export default useCurrencyInfo;