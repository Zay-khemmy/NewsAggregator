import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

const User=()=>{
    const {id} = useParams()
    const [news, setNews] = useState(null)
    const [err, setErr] = useState(null)
    
    useEffect( ()=> {
        fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b23f7d9b8bbc4fcda575ea1e6fa05820/${id}`)
        .then(response => {
            if(!response.ok) {
                setErr(response.status)
                // throw Error(response.status);
            }
            return response
        })
        .then(response => response.json())
        .then((info) => setNews(info.data))
    }, [setNews])

    return(
        <div>
        {err != null ? (
            <p>You have encountered {err}</p>) : 
            news == null ? (
                <p>Loading....</p>) : (
                    <div className="card">
                        {/* <img src={news.avatar} width="300" /> */}
                        <p>Full Name: {news.title} </p>
                        <p>Email: {news.description} </p>
                    </div>
        )}
    </div>
    )
}

export default User;