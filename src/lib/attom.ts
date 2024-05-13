import { tAddressRequestBody, tPropertyResponse } from "../attomTypes";
import { ATTOM_API_BASE_URL } from "../constants";
import { BASE_REQUEST } from "../utils/api";


const BASE_HEADERS: HeadersInit = {
  "apikey": `${process.env.NEXT_PUBLIC_ATTOM_KEY}`,
  "Content-Type": "application/json"
}

const BASE_PARAMS = {
  pageSize: 10,
}

const options = {
    ...BASE_REQUEST,
    headers: {
      ...BASE_REQUEST.headers,
      ...BASE_HEADERS
    }
  }

export const getPropertyById = (houseId: string) => {
  // "use server"
  try {
    const data = fetch(`${ATTOM_API_BASE_URL}/detail?attomid=${houseId}`, options)
      .then(res => res.json())
      .then(data => {
        return data.property?.[0]
      })
    return data
  } catch (error) {
    console.error(`ERROR getPropertyById(${houseId}): ${error}`)
  }
}


export const getPropertyByAddress = async ({address1, address2}:tAddressRequestBody): Promise<undefined | tPropertyResponse[]> => {
  // "use server"
  try {
    console.log("getPropertyByAddress PRE", options)
    const data = fetch(`${ATTOM_API_BASE_URL}/basicprofile?address1=${address1}&address2=${address2}`, options)
      .then(res => res.json())
      .then(res => {
        return res.property
      })
    console.log("getPropertyByAddress", data)
    return data
  } catch (error) {
    console.error(`ERROR getPropertyByAddress(${address1}): ${error}`)
  }
}

export const searchProperties = () => {
  /* allow search by:
  - postalcode
  - minBed/maxBed
  - minBathsTotal/maxBathsTotal
  - minUniversalSize/maxUniversalSize
  - page
  */

}

export const getPropertyPermits = (houseId: string) => {
  try {
    const data = fetch(`${ATTOM_API_BASE_URL}/buildingpermits?attomid=${houseId}`, options)
      .then(res => res.json())

      // data = {status, property}
      .then(data => { return data.property[0] })
    return data
  } catch (error) {
    console.error(`ERROR getPropertyPermits(${houseId}): ${error}`)
  }
};