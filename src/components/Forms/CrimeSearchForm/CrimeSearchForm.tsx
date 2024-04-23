/** CrimeSearchForm documentation
 */
"use client"
import {Dispatch, useCallback, useState} from 'react'
import "./styles.css";
import { Button } from '../../Button';
import { getCrimes } from '@/src/lib/marinCrime';
import { CRIME_CLASSES_TO_CRIMES, MARIN_TOWNS, tCrime } from '@/src/utils/marinCrimeAPI';
import { DropdownSelector } from '../../DropdownSelector';

export interface iCrimeSearchFormProps {
  "data-test-id"?: string;
  setCrimes: Dispatch<tCrime[]>
}

type tFormState = {
  crime_class: string;
  crime: string;
  incident_city_town: string;
  // $where: string;
  limit?: string | number;
  offset?: string | number;
}

const INITIAL_FORM_STATE = {
  crime_class: "",
  crime: "",
  incident_city_town: "",
  // $where: "",
  // limit: 1000,
  // offset: 0,
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
    console.log("SEARCH CLICKED", formState)
    const data = await getCrimes(formState)
    console.log("page/.submitSearch data length ", data.length)
    setCrimes(data)
  }, [formState])

  return (
    <form className='property-search-form'>

    <div className='inputs'>
      <DropdownSelector
        label='crime class'
      value={formState.crime_class}
      onChange={(event)=> {
        setFormState({...formState, crime_class: event.target.value})
      }}
      options={Object.keys(CRIME_CLASSES_TO_CRIMES)}
      />

     {formState.crime_class && <DropdownSelector
        label='crime'
      value={formState.crime}
      onChange={(event)=> {
        setFormState({...formState, crime: event.target.value})
      }}
      options={CRIME_CLASSES_TO_CRIMES[formState.crime_class]}
      />}

      <DropdownSelector
        label='City/Town'
      value={formState.incident_city_town}
      onChange={(event)=> {
        setFormState({...formState, incident_city_town: event.target.value})
      }}
      options={MARIN_TOWNS}
      />

      {/* <DropdownSelector
      value={formState.$where}
      onChange={(event)=> {
        setFormState({...formState, "$where": event.target.value})
      }}
      options={[]}
      /> */}
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
  </form>);
};
