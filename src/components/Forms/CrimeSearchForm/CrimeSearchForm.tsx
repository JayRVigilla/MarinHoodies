/** CrimeSearchForm documentation
 */
"use client"
import {Dispatch, useCallback, useState} from 'react'
import "./styles.css";
import { Button } from '../../Button';
import { getCrimes } from '@/src/lib/marinCrime';
import { CRIME_CLASSES_TO_CRIMES, MARIN_TOWNS, tCrime } from '@/src/utils/marinCrimeAPI';
import { DropdownSelector } from '../../DropdownSelector';
import { DatePicker } from '../../DatePicker';
import { subDays } from 'date-fns';
import isEqual from "lodash/isEqual"

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

type tWhereObject = { from: string, to: string }

export const CrimeSearchForm = ({setCrimes}: iCrimeSearchFormProps) => {
  // * state
  const [formState, setFormState] = useState<tFormState>(INITIAL_FORM_STATE);
  const [whereFilter, setWhereFilter] = useState<string|undefined>(undefined);
  const [where, setWhere] = useState<tWhereObject>({ from: "", to: "" });
  const [results, setResults] = useState<number | undefined>(undefined)


  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setFormState(INITIAL_FORM_STATE)
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // if (isEqual(INITIAL_FORM_STATE, formState) && whereFilter === undefined) return

    let $where = ''
    // handle Date Range selection
    if (whereFilter === DATE_RANGE_OPTIONS_LABELS.CUSTOM) {
      // $where becomes a string using toFrom values
      $where = `incident_date_time between
      '${new Date(where.from).toISOString().slice(0, -1)}' and
      '${new Date(where.to).toISOString().slice(0, -1)}'`
    } else if (whereFilter && typeof DATE_RANGE_OPTIONS[whereFilter] !== "string"){
      // $where becomes a string of the given amount of days in the past
      $where = `incident_date_time between
        '${subDays(Date.now(), DATE_RANGE_OPTIONS[whereFilter] as number).toISOString().slice(0, -1)}' and
        '${new Date(Date.now()).toISOString().slice(0, -1)}'`

    }

    const data = await getCrimes({...formState,  "$where": $where})
    setResults(data.length)
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

        <span className='input-group date-range'>
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

          <DatePicker
            label="from"
            value={where.from}
            onChange={(event)=> {
              setWhere({...where, from: event.target.value})
            }}
            />
          <DatePicker
            label="to"
            value={where.to}
            onChange={(event)=> {
              setWhere({...where, to: event.target.value})
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

    {typeof results === "number" && <p>{`Found ${results} results`}</p> }
  </form>);
};