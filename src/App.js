import React, { useEffect, useState } from "react";

import styles from './App.module.css'

import { Cards, Charts, CountryPicker } from './components'
import { fetchData } from './api'

export default function App() {
  const [data, setData] = useState([])
  const [country, setCountry] = useState([])

  const handleCountryChange = async (country) => {
      
     setData(await fetchData(country))
     setCountry(await fetchData(country))    
     
  }

  useEffect(() => {
    const responseData = async () =>  {
      setData(await fetchData())
    }
    responseData()
  }, [])

  console.log('country')  
  return (
    <div className={styles.container}> 
      <Cards {...data}/> 
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Charts {...country} />
    </div>
  );
}
