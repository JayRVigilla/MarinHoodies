/** PropertySearchForm documentation
 */
"use client"
import {useCallback, useState, Dispatch} from 'react'
import "./styles.css";
import { TextInput } from '../../TextInput';
import { Button } from '../../Button';
import { getLongLatFromAddress } from '@/src/lib/positionstack';
import { tCoordsObject } from '@/src/constants';
import { DateRangeSelector } from '../../DateRangeSelector/DateRangeSelector';
import { iCrimeLocationMarker, iFoodInspectionMarker } from '../../Map/Marker/types';
import { getFoodInspections } from '@/src/lib/marinFoodInspection';
import { getCrimes } from '@/src/lib/marinCrime';

export interface iPropertySearchFormProps {
  "data-test-id"?: string;
  setLocationLatLong: Dispatch<tCoordsObject>;
  setFoodInspections: Dispatch<iFoodInspectionMarker[]>;
  setCrimes: Dispatch<iCrimeLocationMarker[]>;
}

export const PropertySearchForm = ({setLocationLatLong, setFoodInspections, setCrimes}: iPropertySearchFormProps) => {
  // * state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [whereFilter, setWhereFilter] = useState<string | undefined>(undefined);
  // Using lat,long from Wikipedia for Marin County
  const [dateRange, setDateRange] = useState<[string, string]>(["",""]); // [MinISOString, MaxISOString]

  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if(!address && !city && !state)return
    setAddress("")
    setCity("")
    setState("")
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if(!address && !city && !state) return
    const locationData = await getLongLatFromAddress({ address, city, state })
    if (locationData) {
      setLocationLatLong(locationData)

      const inspectionsData = await getFoodInspections({
        dateRange: dateRange,
        focalLatLong: [locationData.lat, locationData.lon]
      })
      if(inspectionsData) setFoodInspections(inspectionsData)

      const crimeData = await getCrimes({
        dateRange: dateRange,
        focalLatLong: [locationData.lat, locationData.lon]
      })
      setCrimes(crimeData!)
      }
  }, [address, city, state, dateRange])

  return (
    <form className='property-search-form'>


      <TextInput value={address} placeholder='' setValue={setAddress} label="address" />
    <span className='input-group'>
      <TextInput value={city } placeholder='' setValue={setCity } label="city" />
      <TextInput value={state } placeholder='' setValue={setState } label="state" />
    </span>

      <DateRangeSelector
        whereFilter={whereFilter}
        setWhereFilter={setWhereFilter}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />


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
