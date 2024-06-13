/** PropertySearchForm documentation
 */
"use client"
import {useCallback, useState, Dispatch} from 'react'
import "./styles.css";
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { getLongLatFromAddress } from '@/src/lib/positionstack';
import { tCoordsObject } from '@/src/constants';
import { DateRangeSelector } from '../DateRangeSelector/DateRangeSelector';
import { iCrimeLocationMarker, iFoodInspectionMarker } from '../Map/Marker/types';
import { getFoodInspections } from '@/src/lib/marinFoodInspection';
import { getCrimes } from '@/src/lib/marinCrime';

export interface iPropertySearchFormProps {
  "data-test-id"?: string;
  // setLocationLatLong: Dispatch<tCoordsObject>;
  // setFoodInspections: Dispatch<iFoodInspectionMarker[]>;
  // setCrimes: Dispatch<iCrimeLocationMarker[]>;
}

// export const PropertySearchForm = ({setLocationLatLong, setFoodInspections, setCrimes}: iPropertySearchFormProps) => {
export const PropertySearchForm = ({}: iPropertySearchFormProps) => {
  // * state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [whereFilter, setWhereFilter] = useState<string | undefined>(undefined);
  // [MinISOString, MaxISOString]
  // const [dateRange, setDateRange] = useState<[string, string]>(["", ""]);

  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // if(!address && !city && !state)return
    if(!address && !city )return
    setAddress("")
    setCity("")
    // setState("")
  }

  const submitSearch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // if(!address && !city && !state) return
    if(!address && !city) return
    const locationData = await getLongLatFromAddress({ address, city, state: "CA" })
    if (locationData) {
      console.log(locationData)
      // setLocationLatLong(locationData)

      // const inspectionsData = await getFoodInspections({
      //   dateRange: dateRange,
      //   focalLatLong: [locationData.lat, locationData.lon]
      // })
      // if(inspectionsData) setFoodInspections(inspectionsData)

      // const crimeData = await getCrimes({
      //   dateRange: dateRange,
      //   focalLatLong: [locationData.lat, locationData.lon]
      // })
      // setCrimes(crimeData!)
      }
  // }, [address, city, state, dateRange])
  }, [address, city])

  return (
    <form className='property-search-form'>


      <TextInput value={address} placeholder='' setValue={setAddress} label="address" />

      <TextInput value={city } placeholder='' setValue={setCity } label="city" />
      {/* <TextInput value={state } placeholder='' setValue={setState } label="state" /> */}
      {/* <span className='input-group'>
    </span> */}

      {/* <DateRangeSelector
        whereFilter={whereFilter}
        setWhereFilter={setWhereFilter}
        dateRange={dateRange}
        setDateRange={setDateRange}
      /> */}


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
