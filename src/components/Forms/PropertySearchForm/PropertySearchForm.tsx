/** PropertySearchForm documentation
 */
"use client"
import {useCallback, useState} from 'react'
import "./styles.css";
import { TextInput } from '../../TextInput';
import { getPropertyByAddress } from '@/src/lib/attom';
import { Button } from '../../Button';
import { add } from 'date-fns';
// import { NumberSelector } from '../NumberSelector';

export interface PropertySearchFormProps {
"data-test-id"?: string;
}

export const PropertySearchForm = () => {
  // * state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  // const [minBeds, setMinBeds] = useState<number | undefined>(0); // make inputs some sort of increment/decrement selector
  // const [maxBeds, setMaxBeds] = useState<number | undefined>(undefined); // make inputs some sort of increment/decrement selector
  // const [minBaths, setMinBaths] = useState<number | undefined>(0); // make inputs some sort of increment/decrement selector
  // const [maxBaths, setMaxBaths] = useState<number | undefined>(undefined); // make inputs some sort of increment/decrement selector

  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log("CLICK Clear")
    if(!address && !city && !state && !zipCode)return
    setAddress("")
    setCity("")
    setState("")
    setZipCode("")
    // setMinBeds(0)
    // setMaxBeds(undefined)
    // setMinBaths(0)
    // setMaxBaths(undefined)
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log("SEARCH CLICKED")
    if(!address && !city && !state && !zipCode)return
    const address2 = `${city}, ${state}`
        const data = await getPropertyByAddress({ address1: address, address2 })
        console.log("SEARCH Click", {data, address, address2})
  }, [address, city, state])

  return <form className='property-search-form'>

    <TextInput value={address} placeholder='' setValue={setAddress} label="address" />

    <span className='input-group'>
      <TextInput value={city } placeholder='' setValue={setCity } label="city" />
      <TextInput value={state } placeholder='' setValue={setState } label="state" />
      <TextInput value={zipCode} placeholder='' setValue={setZipCode} label="zip code" />
    </span>

    {/* <span className='input-group bedroom-selectors'>
      <NumberSelector
        value={minBeds}
        placeholder=''
        setValue={setMinBeds}
        minValue={0}
        label="minBeds"
        />
      <NumberSelector
        value={maxBeds}
        placeholder=''
        setValue={setMaxBeds}
        minValue={minBeds ?? 0 + 1}
        label="maxBeds"
        />
    </span>

    <span className='input-group bathroom-selectors'>
      <NumberSelector
        value={minBaths}
        placeholder=''
        setValue={setMinBaths}
        label="minBaths"
        minValue={0}
        />
      <NumberSelector
        value={maxBaths}
        placeholder=''
        setValue={setMaxBaths}
        label="maxBaths"
        minValue={minBaths ?? 0 + 1}
        />
    </span> */}

    <div className='action-buttons'>
      {/* <button onClick={() => submitSearch}>Search</button> */}
      <Button
        label='Search'
        onClick={(event)=>submitSearch(event)}
      />
      {/* <button onClick={() => clearForm()}>Clear</button> */}
      <Button
        label='Clear'
        onClick={(event)=>clearForm(event)}
      />
    </div>
  </form>;
};
