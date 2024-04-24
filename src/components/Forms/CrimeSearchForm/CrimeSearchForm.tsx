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
  // whereFilter: string,
  limit?: string | number;
  offset?: string | number;
}

const INITIAL_FORM_STATE = {
  crime_class: "",
  crime: "",
  incident_city_town: "",
  // $where: "",
  // whereFilter: "",
  // limit: 1000,
  // offset: 0,
}

const DATE_RANGE_OPTIONS_LABELS = {
  THIRTY_DAYS: "30 days",
  SIXTY_DAYS: "60 days",
  NINETY_DAYS: "90 days",
  CUSTOM: "Custom",
}

const DATE_RANGE_OPTIONS = {
  [DATE_RANGE_OPTIONS_LABELS.THIRTY_DAYS]: 30,
  [DATE_RANGE_OPTIONS_LABELS.SIXTY_DAYS]: 60,
  [DATE_RANGE_OPTIONS_LABELS.NINETY_DAYS]: 90,
  [DATE_RANGE_OPTIONS_LABELS.CUSTOM]: "CUSTOM",
}


export const CrimeSearchForm = ({setCrimes}: iCrimeSearchFormProps) => {
  // * state
  const [formState, setFormState] = useState<tFormState>(INITIAL_FORM_STATE);
  const [whereFilter, setWhereFilter] = useState<string|undefined>(undefined);
  const [where, setWhere] = useState<{ from: string, to: string }>({from:"", to: ""});


  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setFormState(INITIAL_FORM_STATE)
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log("SEARCH CLICKED", formState)
    let [from, to] = [undefined, undefined]
    // handle Date Range selection
    if (whereFilter === DATE_RANGE_OPTIONS_LABELS.CUSTOM) {
      // $where becomes a string using toFrom values
    } else {
      // $where becomes a string of the given amount of days in the past
    }

    const data = await getCrimes(formState)
    console.log("page/.submitSearch data length ", data.length)
    setCrimes(data)
  }, [formState, where, whereFilter])

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
        <span className='input-group'>
          <DropdownSelector
            label="date range"
            value={whereFilter}
            onChange={(event)=> {
              setWhereFilter( event.target.value)
            }}
            options={Object.values(DATE_RANGE_OPTIONS_LABELS)}
          />

          {whereFilter === DATE_RANGE_OPTIONS_LABELS.CUSTOM &&
            <span className='input-group'>

          <DropdownSelector
            label="from"
            value={where.from}
            onChange={(event)=> {
              setWhere({...where, from: event.target.value})
            }}
            options={[""]}
            />
          <DropdownSelector
            label="to"
            value={where.to}
            onChange={(event)=> {
              setWhere({...where, to: event.target.value})
            }}
            options={[""]}
            />
            </span>
          }

        </span>
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
