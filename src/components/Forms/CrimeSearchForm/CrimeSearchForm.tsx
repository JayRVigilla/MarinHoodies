/** CrimeSearchForm documentation
 */
"use client"
import {Dispatch, useCallback, useState} from 'react'
import "./styles.css";
import { TextInput } from '../../TextInput';
import { Button } from '../../Button';
import { getCrimes } from '@/src/lib/marinCrime';
import { tCrime } from '@/src/utils/marinCrimeAPI';
import { DropdownSelector } from '../../DropdownSelector';

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

    <div className='inputs'>
      <DropdownSelector
      value={formState.crime}
      onChange={(event)=> {
        setFormState({...formState, crime: event.target.value})
      }}
      options={[]}
      />

      <DropdownSelector
      value={formState.incident_city_town}
      onChange={(event)=> {
        setFormState({...formState, incident_city_town: event.target.value})
      }}
      options={[]}
      />

      <DropdownSelector
      value={formState.$where}
      onChange={(event)=> {
        setFormState({...formState, $where: event.target.value})
      }}
      options={[]}
      />
    </div>


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
