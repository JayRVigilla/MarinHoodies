import { tObjectStringToString } from "../types";
import { validQueries } from "../utils/api";
import { MARIN_CRIME_BASE_URL } from "../utils/marinCrimeAPI";


export type tCrimeQueries = {
  crime?: string;
  crime_class?: string;
  incident_city_town?: string;
  incident_city_town_mapping?: string;
  $where?: string;
}

/**
 * query strings seem to take limit & offset for pagination
 *
 *
 */

export const getCrimes = async (queries: tCrimeQueries) => {
  try {
    const url = `${MARIN_CRIME_BASE_URL}?${validQueries(queries)}`
    console.log("getCrimes: ", {url})
    const data = fetch(url)
    .then(res => res.json())
    .then(res => {
      return res
    })
    return data
  } catch (error) {
    console.error(`ERROR getCrimes(${queries}): ${error}`)
  }
}