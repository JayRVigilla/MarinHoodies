/** PropertySearchForm documentation
 */
"use client"
import {useCallback, useState, Dispatch} from 'react'
import "./styles.css";
import { TextInput } from '../../TextInput';
import { Button } from '../../Button';
import { getLongLatFromAddress } from '@/src/lib/positionstack';
import { DATE_RANGE_OPTIONS, DATE_RANGE_OPTIONS_LABELS, tCoordsObject } from '@/src/constants';
import { DropdownSelector } from '../../DropdownSelector';
import { DatePicker } from '../../DatePicker';
import { subDays } from 'date-fns';

export interface iPropertySearchFormProps {
  "data-test-id"?: string;
  setLocationLatLong: Dispatch<tCoordsObject>;

}

export const PropertySearchForm = ({setLocationLatLong}: iPropertySearchFormProps) => {
  // * state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [whereFilter, setWhereFilter] = useState<string | undefined>(undefined);
  // Using lat,long from Wikipedia for Marin County
  const [dateRange, setDateRange] = useState<[string, string]>(["38.04","-122.74"]); // [MinISOString, MaxISOString]

  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if(!address && !city && !state)return
    setAddress("")
    setCity("")
    setState("")
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if(!address && !city && !state)return
    const data = await getLongLatFromAddress({ address, city, state })
    if (data) setLocationLatLong(data)

    // TODO: add search for Crime and FoodInspections



  }, [address, city, state])

  return (
    <form className='property-search-form'>

    <TextInput value={address} placeholder='' setValue={setAddress} label="address" />

    <span className='input-group'>
      <TextInput value={city } placeholder='' setValue={setCity } label="city" />
      <TextInput value={state } placeholder='' setValue={setState } label="state" />
    </span>

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

                  setDateRange([min, max])
                }
            }}
            options={Object.values(DATE_RANGE_OPTIONS_LABELS)}
          />

          {whereFilter === DATE_RANGE_OPTIONS_LABELS.CUSTOM &&
            <span className='input-group'>

          <DatePicker
            label="min"
            value={dateRange[0]}
            onChange={(event)=> {
              ([event.target.value, dateRange[1]])
            }}
            />
          <DatePicker
            label="max"
            value={dateRange[1]}
            onChange={(event)=> {
              ([dateRange[0], event.target.value] )
            }}
            />
            </span>
          }

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
  </form>
  );
};
