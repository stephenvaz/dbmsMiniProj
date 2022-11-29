import React from 'react'
import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import "./Pie.css"

import axios from 'axios';


const PieTest = () => {

  

  const [testStore, setTest] = useState({
    PrisonState: "All",
    dYear: "All",

});
  const [show, setShow] = useState(false);

const [val1, setVal1] = useState(0);
const [val2, setVal2] = useState(0);
  // const pieYN = false;
  async function handleClick()  {
    // e.preventDefault()
    try {
        const res = await axios.get("http://localhost:6969/test4"+"/"+testStore.PrisonState+"/"+testStore.dYear)
        // const val1 = res.data[0]["npr"]//female
        // const val2 = res.data[1]["npr"]//male
        console.log(res)
        
        setVal1(res.data[0]["npr"])
        setVal2(res.data[1]["npr"])
        // setVals((prev) => ({...prev, [vals.val2]: res.data[1]["npr"]}))

        // setShow(true)
        if(show == false){
          setShow((prev) => ({...prev, [show]: true}))
        }
    }
    catch (error) {
        console.log(error);
        setShow(false)
    }
  }

  const handleChange = (e) => {
    setTest((prev) => ({...prev, [e.target.name]: e.target.value}))
    setShow(false)

}

function Pie(props) {
  if(props.show){
    // console.log("pie")
  return(
    <PieChart
          animate = {true}
            data={[
              { title: 'Male', value: val2, color: '#E38627' },
              { title: 'Female', value: val1, color: '#C13C37' },
  
            ]} label={({ dataEntry }) =>  `${dataEntry.title} (${Math.round(dataEntry.percentage)}%)`}
          />
  )
  }
}
console.log(show)

  return (
    <div>
      <div>PieTest</div>
      <div > 
        <input type="text" name="PrisonState" placeholder='State' onChange={handleChange}/>
        <input type="text" name="dYear" placeholder='Year' onChange={handleChange}/>
        <button onClick={handleClick}>Search</button>
      </div>
      <div className='pie' id='pie0'>

          <Pie show={show}/>

        
      
      </div>

    </div>

  )
}

export default PieTest