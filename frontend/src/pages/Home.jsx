import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {
    const [testStore, setTest] = useState([
        
    ])
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:6969/test2")
                setTest(res.data)
                console.log(res)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[]);


    return (
        <div>
            <h2>Indian Prison Statistics</h2>
            <div className="info">
                {/* {
                testStore.map((testStore,index) => (
                    <div className='testFetch'>
                        <t>{index}</t>
                        <t>{testStore.PrisonState}</t>
                        <t>{testStore.dYear}</t>
                        <t>{testStore.typ}</t>
                        <t>{testStore.amt}</t>
                    </div>
                )
                )
                }  */}
            <div className='container'>

                <button>View Gender Based Distributions</button>

            </div>
            <div className='container'>
                <button>Pie Chart Distribution</button>
                
            </div>
            <div className='container'>
                <button>Graphical Classification of Crimes</button>
                
            </div>
            <div className='container'>
                <button>Budget View and Update</button>
            </div>
           
            </div>
        </div>
    )
}

export default Home