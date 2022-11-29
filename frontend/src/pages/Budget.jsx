import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

function Budget() {

    function Table (props) {
        return (props.showVal)? (
            <div>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                    {
                        data.map((element, index) => (
                            <tr>
                                <td>{element.typ}</td>
                                <td>{element.amt}</td>
                            </tr>
                        )
                        )
                    }
                </table>
            </div>
        ): null
    }
    const  getData = async () => {
        const link = "http://localhost:6969/budgetData/" + state + "/" + year;
        const res = await axios.get(link);
        setData(res.data);
        setIsSubmitted(true);
    }

    // );
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [state, setState] = useState("");
    const [year, setYear] = useState("");
    const [isSumbitted, setIsSubmitted] = useState(false);
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
                <button style={{marginLeft : "10px"}}>Update</button>
            </div>
            <Table showVal={isSumbitted}/>
    </div>

  )
}

export default Budget