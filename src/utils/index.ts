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

type tMaxMinTuple = [tCoordsObject, tCoordsObject, tCoordsObject, tCoordsObject]


export const calcMaxMinLatLong = (coords: tCoordsObject): tMaxMinTuple => {
  // TODO: keep transforming betwen number and string
  // const result: iMaxMinObj = {
  //   max: { lat: "", lon: "" },
  //   min: { lat: "", lon: "" },
  // }
  const latLong = coordsObjToLatLngExp(coords)
  const diff = .019
  const result: tMaxMinTuple = [
    { lat: (latLong[0] - diff).toString(), lon: (latLong[1] - diff).toString() },
    { lat: (latLong[0] + diff).toString(), lon: (latLong[1] - diff).toString() },
    { lat: (latLong[0] + diff).toString(), lon: (latLong[1] + diff).toString() },
    { lat: (latLong[0] - diff).toString(), lon: (latLong[1] + diff).toString() },
]
console.log([{ lat: (latLong[0] + diff).toString(), lon: (latLong[1] + diff).toString() },
    { lat: (latLong[0] - diff).toString(), lon: (latLong[1] + diff).toString() }])
  return result
}