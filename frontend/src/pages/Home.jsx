import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {
    const [testStore, setTest] = useState([])
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
            <h1>testData</h1>
            <div className="info">
                {
                testStore.map(testStore => (
                    <div className='testFetch'>
                        <t>{testStore.PrisonState}</t>
                        <t>{testStore.dYear}</t>
                        <t>{testStore.typ}</t>
                        <t>{testStore.amt}</t>
                    </div>
                )
                )
                } 
            </div>
        </div>
    )
}

export default Home