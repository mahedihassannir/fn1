import {useState, useEffect} from 'react'

const useCategory = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://e-com-server-7zwq.onrender.com/allcategory')
        .then(res => res.json())
        .then(data => {
            setCategory(data)
            setLoading(true)
        })
    },[])

    return [category, loading];
};

export default useCategory;