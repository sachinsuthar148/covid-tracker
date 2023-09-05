import React, { useEffect, useState } from 'react'
import './Vaccination.css'

export default function Vacination() {

    const [data,setData]=useState([]); 


    const getCovidData = async () => {
        try{
       const res= await fetch('https://data.covid19india.org/data.json');
       const actualData = await res.json();
       console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect( () =>
    {
        getCovidData();
    },[]);




  return (
    <div>
        <h1>Covid 19 Vaccination Tracker</h1>
        <div className='mainbox'>
            <div className='subbox'>
                <span>Active</span><br />
                <span className='cases'>cases</span>
                <h1>{data.active}</h1>
            </div>
            <div className='subbox'>
                <span>Confirmed</span><br />
                <span className='cases'>cases</span>
                <h1>{data.confirmed}</h1>
            </div>
            <div className='subbox'>
                <span>Recovered</span><br />
                <span className='cases'>cases</span>
                <h1>{data.active}</h1>
            </div>
            <div className='subbox'>
                <span>Last Time</span><br />
                <span className='cases'>Updated</span>
                <h1>{data.lastupdatedtime}</h1>
            </div>
        </div>
        {/* <h1>Active cases : {data.active}</h1>
        <h1>Confirmed cases : {data.confirmed}</h1>
        <h1>Recovered cases : {data.recovered}</h1>
        <h1>Last Updated Time : {data.lastupdatedtime}</h1>
         */}

     
    </div>
  )
}
