import { LatLngExpression, LatLngTuple } from "leaflet";

type tCoordsObject = {
  lat: string;
  lon: string;
}

export const roundStringToFloat = (floatString: string, places: number) => {
  return parseFloat(parseFloat(floatString).toFixed(places))
}

export const coordsObjToLatLngExp = (coords: tCoordsObject) => {
  return [parseFloat(coords.lat), parseFloat(coords.lon)] as LatLngTuple
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
    { lat: (latLong[0] - DIFF).toString(), lon: (latLong[1] - DIFF).toString() },
    { lat: (latLong[0] + DIFF).toString(), lon: (latLong[1] - DIFF).toString() },
    { lat: (latLong[0] + DIFF).toString(), lon: (latLong[1] + DIFF).toString() },
    { lat: (latLong[0] - DIFF).toString(), lon: (latLong[1] + DIFF).toString() },
]
console.log([{ lat: (latLong[0] + DIFF).toString(), lon: (latLong[1] + DIFF).toString() },
    { lat: (latLong[0] - DIFF).toString(), lon: (latLong[1] + DIFF).toString() }])
  return result
}