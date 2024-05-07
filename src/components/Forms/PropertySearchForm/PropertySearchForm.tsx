/** PropertySearchForm documentation
 */
"use client"
import {useCallback, useState} from 'react'
import "./styles.css";
import { TextInput } from '../../TextInput';
import { getPropertyByAddress } from '@/src/lib/attom';
import { Button } from '../../Button';
import { add } from 'date-fns';
import { getLongLatFromAddress } from '@/src/lib/positionstack';

export interface PropertySearchFormProps {
"data-test-id"?: string;
}

export const PropertySearchForm = () => {
  // * state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log("CLICK Clear")
    if(!address && !city && !state && !zipCode)return
    setAddress("")
    setCity("")
    setState("")
    setZipCode("")
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log("SEARCH CLICKED")
    if(!address && !city && !state && !zipCode)return
    const address2 = `${city}, ${state}`
        // const data = await getPropertyByAddress({ address1: address, address2 })
        const data = await getLongLatFromAddress(`${address} ${address2}`)
        console.log("SEARCH Click", {data, address, address2})
  }, [address, city, state])

  return <form className='property-search-form'>

    <TextInput value={address} placeholder='' setValue={setAddress} label="address" />

    <span className='input-group'>
      <TextInput value={city } placeholder='' setValue={setCity } label="city" />
      <TextInput value={state } placeholder='' setValue={setState } label="state" />
      <TextInput value={zipCode} placeholder='' setValue={setZipCode} label="zip code" />
    </span>

    <div className='action-buttons'>

      <Button
        label='Search'
        onClick={(event)=>submitSearch(event)}
      />
      <Button
        label='Clear'
        onClick={(event)=>clearForm(event)}
      />
    </div>
  </form>;
};
