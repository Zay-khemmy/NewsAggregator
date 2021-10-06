import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

const Home=()=>{
    const[user, setUser] = useState(null)

    useEffect( ()=>{
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b23f7d9b8bbc4fcda575ea1e6fa05820')
        .then( (response) => response.json())
        .then( (data) => setUser(data.articles))
    }, [setUser])
    // console.log(user)
    
    // return(
    //     <div>
    //         <Navbar/>

    //         <div className="container">
    //             <div className="row mt-3">
    //                 <div className="col-sm-6">
    //                     <div className="card">
    //                         <div className="card-body">
    //                             <h5 className="card-title">{val.title}</h5>
    //                             {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    return(
        <div>
              <Navbar/>
            <div className="card-session">
            {
                user == null ? (<p>Loading...</p> ): (
                    user.map( (val, key) => {
                        return(
                            <a href={val.url} target="_blank" rel="noreferrer" key={key} to={`/${val.id}`}>
                                <div className="container">
                                    <div className="row mt-3">
                                        <div className="col-sm-6">
                                            <div className="card bg-white">
                                                <div className="card-body">
                                                    <h5 className="card-title">{val.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{val.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </a>
                            
                        )
                        
                    })
                )
            }
            </div>
            
        </div>
    )
}

export default Home;