import React from 'react'
import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import "./Pie.css"


const PieTest = () => {
  const [testStore, setTest] = useState({
    PrisonState: null,
    dYear: null,

});
  const [show, setShow] = useState(false);

  // const pieYN = false;
  const handleClick = async e => {
    e.preventDefault()
    try {
        // const res = await axios.get("http://localhost:6969/test3"+"/"+testStore.PrisonState+"/"+testStore.dYear)
        // const val = res.data[0]["sum(noPrisoners)"]
        (show) ? null : setShow(true)
    }
    catch (error) {
        console.log(error);
        setShow(false)
    }
  }

  const handleChange = (e) => {
    setTest((prev) => ({...prev, [e.target.name]: e.target.value}))

}
console.log(testStore)
  return (
    <div>
      <div>PieTest</div>
      <div > 
        <input type="text" name="PrisonState" placeholder='State' onChange={handleChange}/>
        <input type="number" name="dYear" placeholder='Year' onChange={handleChange}/>
        <button onClick={handleClick}>Search</button>
      </div>
      <div className='pie' id='pie0'>
      <PieChart
        animate = {true}
          data={[
            { title: 'Male', value: 0, color: '#E38627' },
            { title: 'Female', value: 0, color: '#C13C37' },

          ]} label={({ dataEntry }) => show? `${dataEntry.title} (${Math.round(dataEntry.percentage)}%)` : ''}
        />
      </div>

    </div>

  )
}

export default PieTest