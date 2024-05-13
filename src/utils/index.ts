import { LatLngExpression, LatLngTuple } from "leaflet";
import { tCoordsObject } from "../constants";


export const roundStringToFloat = (floatString: string, places: number) => {
  return parseFloat(parseFloat(floatString).toFixed(places))
}

export const coordsObjToLatLngExp = (coords: tCoordsObject) => {
  return [coords.lat, coords.lon] as LatLngTuple
}

// TODO: make a prop after learning what lat/long values = 1 mile
const DIFF = .02

interface iMaxMinObj {
  max: LatLngTuple;
  min: LatLngTuple;
}

export const calcMaxMinLatLong = (coords: tCoordsObject): iMaxMinObj => {
  // TODO: keep transforming betwen number and string
  const latLong = coordsObjToLatLngExp(coords)
  return {
      max: [latLong[0] + DIFF, latLong[1] + DIFF],
      min: [latLong[0] - DIFF, latLong[1] - DIFF],
    }

}

  type tMaxMinTuple = [tCoordsObject, tCoordsObject, tCoordsObject, tCoordsObject]

export const calcMaxMinLatLongCorners = (coords: tCoordsObject): tMaxMinTuple => {
  // TODO: refactor to prevent transforming betwen number and string
  const latLong = coordsObjToLatLngExp(coords)
  const result: tMaxMinTuple = [
    { lat: (latLong[0] - DIFF), lon: (latLong[1] - DIFF) },
    { lat: (latLong[0] + DIFF), lon: (latLong[1] - DIFF) },
    { lat: (latLong[0] + DIFF), lon: (latLong[1] + DIFF) },
    { lat: (latLong[0] - DIFF), lon: (latLong[1] + DIFF) },
]
  return result
}