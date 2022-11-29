import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Crime.css'
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJs} from 'chart.js/auto';


function Crime() {

    function Table (props) {
        return (props.showVal)? (
            <div>
                <table>
                    <tr>
                        <th>Year</th>
                        <th>Prisoners</th>
                    </tr>
                    {
                        data.map((element, index) => (
                            <tr>
                                <td>{element.dYear}</td>
                                <td>{element.sum}</td>
                            </tr>
                        )
                        )
                    }
                </table>
            </div>
        ): null
    }

    function BarChart(props) {

        return (props.showVal)? (
        <Bar data={barData}  />
        ) : null
    }

    // const[data, setData] = useState(
    //     {
    //         crime: null,
    //         noOfcrimes: 0,
    //     }
    // );
    // const [noOfCrimes, setNoOfCrimes] = useState();
    const [crime, setCrime] = useState([]);
    const [ageGrp, setAgeGrp] = useState([]);
    const [PrisonState, setPrisonState] = useState([]);

    //
    const [crimeType, setCrimeType] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [state, setState] = useState("");

    const [data, setData] = useState([]);
    const [barData, setBarData] = useState({
        labels: [],
        datasets: [
            {label: "Prisoners",
            data: data.map((element) => element.sum)}
        ]
    });

    const [isSumbitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // console.log(data.noOfcrimes);
        const getCrime = async () => {
            const req = await axios.get("http://localhost:6969/crime");
            console.log(req.data);
            setCrime(req.data);
            const req2 = await axios.get("http://localhost:6969/ageGrp");
            console.log(req2.data);
            setAgeGrp(req2.data);
            const req3 = await axios.get("http://localhost:6969/state");
            setPrisonState(req3.data);
        }
        getCrime();
    }, []);
    const handleClick = async e => {
        const link = "http://localhost:6969/crime/" + crimeType + "/" + ageGroup + "/" + state;
        const req = await axios.get(link);
        console.log(req.data);
        setBarData(
            {
            labels: req.data.map((element) => element.dYear),
            datasets: [
                {label: "Prisoners",
                data: req.data.map((element) => element.sum)
            }
            ]}

        )
        setData(req.data);
        setIsSubmitted(true);
    }

   
    return (

        <div>
            <h1>Crime</h1>
            <div className='selectors'>
                <select name="Type"  onChange = {(e) => {setCrimeType(e.target.value);}}>
                    {
                        crime.map((crime, index) => (
                            <option key={index} value= {crime.ctyp}>{crime.ctyp}</option>
                        )
                        )
                    }
                </select>
                <select name = "Age Group" onChange = {(e) => {setAgeGroup(e.target.value);}}>
                {
                        ageGrp.map((ageGrp, index) => (
                            <option key={index}>{ageGrp.agegroup}</option>
                        )
                        )
                    }
                </select>
                <select name = "State" onChange = {(e) => {setState(e.target.value);}}>
                {
                        PrisonState.map((state, index) => (
                            <option key={index}>{state.PrisonState} </option>
                        )
                        )
                    }
                    
                </select>
                <button onClick={handleClick}>Submit</button>
                {/* <div>
                    {crimeType}
                </div> */}
                {/* <Table showVal={isSumbitted}/> */}
            </div>
            <div className='chart'>
                <BarChart showVal={isSumbitted}/>
                </div>
        </div>
    )
}



export default Crime