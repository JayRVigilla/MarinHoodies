import { LatLngExpression, LatLngTuple } from "leaflet";
import { tCoordsObject } from "../constants";

export const roundStringToFloat = (floatString: string, places: number) => {
  return parseFloat(parseFloat(floatString).toFixed(places));
};

export const coordsObjToLatLngExp = (coords: tCoordsObject) => {
  return [coords.lat, coords.lon] as LatLngTuple;
};

// TODO: make a prop after learning what lat/long values = 1 mile
const DIFF = 0.02;

interface iMaxMinObj {
  max: LatLngTuple;
  min: LatLngTuple;
}

export const calcMaxMinLatLong = (coords: tCoordsObject): iMaxMinObj => {
  // TODO: keep transforming betwen number and string
  const latLong = coordsObjToLatLngExp(coords);
  return {
    max: [latLong[0] + DIFF, latLong[1] + DIFF],
    min: [latLong[0] - DIFF, latLong[1] - DIFF],
  };
};

type tMaxMinTuple = [
  tCoordsObject,
  tCoordsObject,
  tCoordsObject,
  tCoordsObject,
];

export const calcMaxMinLatLongCorners = (
  coords: tCoordsObject,
): tMaxMinTuple => {
  // TODO: refactor to prevent transforming betwen number and string
  const latLong = coordsObjToLatLngExp(coords);
  const result: tMaxMinTuple = [
    { lat: latLong[0] - DIFF, lon: latLong[1] - DIFF },
    { lat: latLong[0] + DIFF, lon: latLong[1] - DIFF },
    { lat: latLong[0] + DIFF, lon: latLong[1] + DIFF },
    { lat: latLong[0] - DIFF, lon: latLong[1] + DIFF },
  ];
  return result;
};

export const milesToMeters = (miles: number) => 1609.344 * miles;

export const secondsToMilliseconds = (seconds: number) => seconds * 1000;
export const minutesToMilliseconds = (minutes: number) =>
  secondsToMilliseconds(minutes * 60);
export const hoursToMilliseconds = (hours: number) =>
  minutesToMilliseconds(hours * 60);
