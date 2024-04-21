/** CrimeSearchForm documentation
 */
"use client"
import {Dispatch, useCallback, useState} from 'react'
import "./styles.css";
import { TextInput } from '../../TextInput';
import { Button } from '../../Button';
import { getCrimes } from '@/src/lib/marinCrime';
import { tCrime } from '@/src/utils/marinCrimeAPI';

export interface iCrimeSearchFormProps {
  "data-test-id"?: string;
  setCrimes: Dispatch<tCrime[]>
}

type tFormState = {
  crime: string;
  incident_city_town: string;
  $where: string;
  limit?: string | number;
  offset?: string | number;
}

const INITIAL_FORM_STATE = {
  crime: "",
  incident_city_town: "",
  $where: "",
  limit: 1000,
  offset: 0,
}

export const CrimeSearchForm = ({setCrimes}: iCrimeSearchFormProps) => {
  // * state
  const [formState, setFormState] = useState<tFormState>(INITIAL_FORM_STATE);


  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setFormState(INITIAL_FORM_STATE)
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log("SEARCH CLICKED")
        const data = await getCrimes(formState)
  }, [formState])

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
