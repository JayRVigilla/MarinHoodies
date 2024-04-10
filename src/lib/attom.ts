import { ATTOM_API_BASE_URL } from "../constants";

const BASE_HEADERS = {
  apiKey: process.env.REACT_APP_ATTOM_KEY,
  "Content-Type": "application/json"
}

const BASE_PARAMS = {
  pageSize: 10,
}

export const getPropertyById = () => { }

export const searchProperties = () => {
  /* allow search by:
  - postalcode
  - minBed/maxBed
  - minBathsTotal/maxBathsTotal
  - minUniversalSize/maxUniversalSize
  - page
  */
}
