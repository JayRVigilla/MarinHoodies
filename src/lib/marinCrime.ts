import { dateRangeClean, iBetweenProps, whereString } from "../utils/marinAPI";
import { MARIN_CRIME_BASE_URL } from "../utils/marinAPI/marinCrimeAPI";
import { calcMaxMinLatLong } from "../utils";


export type tCrimeQueries = {
  crime?: string;
  crime_class?: string;
  incident_city_town?: string;
  incident_city_town_mapping?: string;
  $where?: string;
  dateRange: [string, string]; // [MinISOString, MaxISOString]
  focalLatLong: [string, string]; // [lat,long] float strings
}

export const getCrimes = async (queries: tCrimeQueries) => {
  try {
    const {dateRange, focalLatLong} = queries

    const qStrings: string[] = []

    const dateProps: iBetweenProps = {
      max: dateRangeClean(dateRange[1]),
      min: dateRangeClean(dateRange[0]),
      param: "incident_date_time",
    }

    const maxMinLatLong = calcMaxMinLatLong({
      lat:focalLatLong[0],
      lon:focalLatLong[1],
    })

    const latProps: iBetweenProps = {
      max: maxMinLatLong.max[0].toString(),
      min: maxMinLatLong.min[0].toString(),
      param: "latitude",
    }

    const longProps: iBetweenProps = {
      max: maxMinLatLong.max[1].toString(),
      min: maxMinLatLong.min[1].toString(),
      param: "longitude",
    }

    qStrings.push(whereString.betweenISOStrings(dateProps))

    const props = [latProps, longProps]
    props.forEach(prop => {
      qStrings.push(whereString.betweenNums(prop))
    })

    const selects = [
      "longitude",
      "latitude",
      "incident_street_address",
      "incident_city_town",
      "crime",
      "incident_date_time"
    ]

    const url = `${MARIN_CRIME_BASE_URL}?$select=${selects.join(", ")}&$where=${qStrings.join(" AND ")}`

    const data = fetch(url)
    .then(response => response.json())
    .then(result => {
      return result
    })
    console.log("crimes", data)
    return data
  } catch (error) {
    console.error(`ERROR getCrimes(${queries}): ${error}`)
  }
}