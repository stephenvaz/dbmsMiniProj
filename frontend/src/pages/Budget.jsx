import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

function Budget() {

    function Table (props) {
        return (props.showVal)? (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((element, index) => (
                            <tr key={index}>
                                <td>{element.typ}</td>
                                <td>{element.amt}</td>
                            </tr>
                        )
                        )
                    }
                    </tbody>
                </table>
            </div>
        ): null
    }

    const handle= (e) => {
        setDataS((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    
    const update = () => {
        axios.post("http://localhost:6969/update", {typ: dataStore.typ, amt: dataStore.amt, PrisonState: state, dYear: year})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const  getData = async () => {
        const link = "http://localhost:6969/budgetData/" + state + "/" + year;
        const res = await axios.get(link);
        setData(res.data);
        setIsSubmitted(true);
    }


    // );
    // const [typ, setTyp] = useState("");
    // const [amt, setAmt] = useState(0);
    const [dataStore, setDataS] = useState({
        typ: "",
        amt: 0
    });
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [state, setState] = useState("");
    const [year, setYear] = useState("");
    const [isSumbitted, setIsSubmitted] = useState(false);
    const [isOnUpdate, setIsOnUpdate] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:6969/state")
                const res2 = await axios.get("http://localhost:6969/year")
                // setData({
                //     states: res.data,
                //     years: res2.data
                // })
                setData1(res.data);
                setData2(res2.data);
                console.log(res)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    // onChange = {(e) => {setCrimeType(e.target.value);}}
  return (
    <div>
        <h1>Budget</h1>
        <div className='selectors'>
                <select name="State" onChange = {(e) => {setState(e.target.value);}} >
                    {
                        data1.map((ele, index) => (
                            <option key={index} value= {ele.PrisonState}>{ele.PrisonState}</option>
                        )
                        )
                    }
                </select>
                <select name="Year" onChange = {(e) => {setYear(e.target.value);}} >
                    {
                        data2.map((ele, index) => (
                            <option key={index} value= {ele.dYear}>{ele.dYear}</option>
                        )
                        )
                    }
                </select>
                <button onClick={getData}>View</button>
                <button style={{marginLeft : "10px"}} onClick={()=>{
                    
                        update();
                    
                }}>Update</button>
                <div>
                <input key="typ" type="text" placeholder='Type' name='typ' onChange={handle}></input>
                <input key = "amt" type="number" placeholder='Amount' name='amt' onChange={handle}></input>
            </div>
            </div>
            <Table showVal={isSumbitted}/>
    </div>

  )
}

export default Budget