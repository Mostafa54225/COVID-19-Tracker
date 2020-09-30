import React, { useState, useEffect } from 'react';

import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './countryPicker.module.css'
import { fetchCountries } from '../../api'
const CountryPicker = ({ handleCountryChange }) => {

  const [fetchedCountries, setFetchedCountries] = useState([]) 

  useEffect(() => {
    const fetchApiCountries = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchApiCountries()
  }, [setFetchedCountries])

  
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="Global" onChange={(e) => handleCountryChange(e.target.value)}>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;