import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";


const data = () => {

    const [items, setItems] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2");
            const data = await response.json();
            setItems(data)
            dispatch((FETCH_DATA(data)))
        } fetchData()
    }, []);
    return items
}

export default data