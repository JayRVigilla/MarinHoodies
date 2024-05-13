/** CrimeSearchForm documentation
 */
"use client"
import {Dispatch, SetStateAction, useCallback, useState} from 'react'
import "./styles.css";
import { Button } from '../../Button';
import { getCrimes } from '@/src/lib/marinCrime';
import { CRIME_CLASSES_TO_CRIMES, MARIN_TOWNS, tCrime } from '@/src/utils/marinAPI/marinCrimeAPI';
import { DropdownSelector } from '../../DropdownSelector';
import { DatePicker } from '../../DatePicker';
import { subDays } from 'date-fns';
import isEqual from "lodash/isEqual"
import { DATE_RANGE_OPTIONS, DATE_RANGE_OPTIONS_LABELS, homeCords } from '@/src/constants';
import { iCrimeLocationMarker } from '../../Map/Marker/types';

export interface iCrimeSearchFormProps {
  "data-test-id"?: string;
  setCrimes: Dispatch<SetStateAction<iCrimeLocationMarker[]>>;
}

type tFormState = {
  crime_class: string;
  crime: string;
  incident_city_town: string;
  dateRange: [string, string]; // [MinISOString, MaxISOString]
  limit?: string | number;
  offset?: string | number;
}

const INITIAL_FORM_STATE: tFormState = {
  crime_class: "",
  crime: "",
  incident_city_town: "",
  dateRange: ["", ""]
}

export const CrimeSearchForm = ({setCrimes}: iCrimeSearchFormProps) => {
  // * state
  const [formState, setFormState] = useState<tFormState>(INITIAL_FORM_STATE);
  const [whereFilter, setWhereFilter] = useState<string|undefined>(undefined);


  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setFormState(INITIAL_FORM_STATE)
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const data = await getCrimes({
      ...formState,
      focalLatLong: [homeCords.lat, homeCords.lon]
    })
    // setResults(data.length)
    setCrimes(data!)
  }, [formState, whereFilter])

  return (
    <form className='crime-search-form'>

      <div className='inputs'>
        <span className='input-group crime'>

          <DropdownSelector
            label='crime class'
            value={formState.crime_class}
            onChange={(event)=> {
              setFormState({...formState, crime_class: event.target.value})
            }}
            options={Object.keys(CRIME_CLASSES_TO_CRIMES).sort()}
            />

          {formState.crime_class && <DropdownSelector
            label='crime'
            value={formState.crime}
            onChange={(event)=> {
              setFormState({...formState, crime: event.target.value})
            }}
            options={CRIME_CLASSES_TO_CRIMES[formState.crime_class].sort()}
            />}
        </span>

        <DropdownSelector
          label='City/Town'
          value={formState.incident_city_town}
          onChange={(event)=> {
            setFormState({...formState, incident_city_town: event.target.value})
          }}
          options={MARIN_TOWNS}
        />

        <span className='input-group date-range'>
          <DropdownSelector
            label="date range"
            value={whereFilter}
            onChange={(event) => {
              const value = event.target.value
              setWhereFilter(value)
              // handle 30/60/90 day Date Range selection
                if (value && typeof DATE_RANGE_OPTIONS[value] !== "string"){
                  const min = subDays(Date.now(), DATE_RANGE_OPTIONS[value] as number).toISOString().slice(0, -1)
                  const max = new Date(Date.now()).toISOString().slice(0, -1)

                  setFormState({...formState, dateRange: [min, max]})
                }
            }}
            options={Object.values(DATE_RANGE_OPTIONS_LABELS)}
          />

          {whereFilter === DATE_RANGE_OPTIONS_LABELS.CUSTOM &&
            <span className='input-group'>

          <DatePicker
            label="min"
            value={formState.dateRange[0]}
            onChange={(event)=> {
              setFormState({ ...formState, dateRange: [event.target.value, formState.dateRange[1]] })
            }}
            />
          <DatePicker
            label="max"
            value={formState.dateRange[1]}
            onChange={(event)=> {
              setFormState({ ...formState, dateRange: [formState.dateRange[0], event.target.value] })
            }}
            />
            </span>
          }

        </span>
      </div>


    <div className='action-buttons'>
      <Button
        label='Search'
        disabled={isEqual(INITIAL_FORM_STATE, formState) && whereFilter === undefined}
        onClick={(event)=>submitSearch(event)}
      />
      <Button
        label='Clear'
        onClick={(event)=>clearForm(event)}
      />
    </div>

    {/* {typeof results === "number" && <p>{`Found ${results} results`}</p> } */}
  </form>);
};