export type tImage = {
  src: string;
  alt: string;
}

export type tContentObject = {
  text: string[];
  img: tImage[];
}

export type tObjectStringToString = {
  [key: string]: string;
}

export type tObjectStringToStringArray = {
  [key: string]: string[];
}

export type tLatitudeLongitudeCoords = [number, number]; // floats for lat, long