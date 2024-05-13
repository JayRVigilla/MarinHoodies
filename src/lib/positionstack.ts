// https://positionstack.com/documentation

import { tCoordsObject } from "../constants";
import { tGeoCodeResponse } from "../utils/positionstackAPI";

const BASE_URL = "http://api.positionstack.com/v1/forward"

type tGetLongLatFromAddressProps = {
  address: string;
  city: string;
  state: string;
}
// TODO: For some reason this API call goes to HTTPS not HTTP
export const getLongLatFromAddress = async ({
  address,
city,
state,
}:tGetLongLatFromAddressProps) => {
  try {
    const url = `${BASE_URL}?access_key=${process.env.NEXT_PUBLIC_POSITIONSTACK_API_KEY}&query=${address} ${city} ${state}`

    const response = await fetch(url)
    const res = await response.json()
    const data = res.data?.[0]

    console.log("getLongLatFromAddress", { url, data, res, response })
    // return data

    const { longitude, latitude } = data
    return {lon: longitude, lat: latitude}

  } catch (error) {
    console.error(`ERROR getLongLatFromAddress (${address}): ${error}`)
  }
}