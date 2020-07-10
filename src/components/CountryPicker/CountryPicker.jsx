import React from 'react';
import {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import Styles from './CountryPicker.module.css'
import {Countries} from '../../api'
const CountryPicker =({handleCountryChange})=> {
  const [country, setCountry]= useState([]);
  useEffect(()=>{
    const fetchCountries = async()=>{
      setCountry ( await Countries())
    }
    fetchCountries();
  },[setCountry])
  
    return (

      <FormControl className={Styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
          {country.map((c, i)=> <option key={i}value={c}>{c}</option>)}
        </NativeSelect>
      </FormControl>
    )
}
export default CountryPicker;