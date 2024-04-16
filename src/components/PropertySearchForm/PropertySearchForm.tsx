/** PropertySearchForm documentation
 */
"use client"
import {useState} from 'react'
import "./styles.css";
import { TextInput } from '../TextInput';
import { NumberSelector } from '../NumberSelector';

export interface PropertySearchFormProps {
"data-test-id"?: string;
}

export const PropertySearchForm = () => {
  // * hooks
  // const hook = () => {};

  // * state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [minBeds, setMinBeds] = useState<number | undefined>(0); // make inputs some sort of increment/decrement selector
  const [maxBeds, setMaxBeds] = useState<number | undefined>(undefined); // make inputs some sort of increment/decrement selector
  const [minBaths, setMinBaths] = useState<number | undefined>(0); // make inputs some sort of increment/decrement selector
  const [maxBaths, setMaxBaths] = useState<number | undefined>(undefined); // make inputs some sort of increment/decrement selector

  return <form className='property-search-form'>

    <TextInput value={address} placeholder='' setValue={setAddress} label="address" />

    <span className='input-group'>
      <TextInput value={city } placeholder='' setValue={setCity } label="city" />
      <TextInput value={state } placeholder='' setValue={setState } label="state" />
      <TextInput value={zipCode} placeholder='' setValue={setZipCode} label="zip code" />
    </span>

    <span className='input-group'>
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

    <span className='input-group'>
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
    </span>

  </form>;
};
