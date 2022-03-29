import { useState, useEffect } from 'react'

const useSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `http://hn.algolia.com/api/v1/search?query=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData();
    }, [term])
    return { data }
}

export default useSearch