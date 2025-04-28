export interface tImage {
  src: string;
  alt: string;
}

export interface tContentObject {
  text: string[];
  img: tImage[];
}

export interface tObjectStringToString {
  [key: string]: string;
}

export interface tObjectStringToStringArray {
  [key: string]: string[];
}

export type tLatitudeLongitudeCoords = [number, number]; // floats for lat, long
