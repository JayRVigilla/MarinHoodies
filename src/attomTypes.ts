
export type tIdentifier = {
  Id: number;
  fips: string;
  apn: string; // numbers in this format 03-1033-32-2-20-03-0000
  attomId: number;
}

export type tLot = {
  lotnum: string;
    lotsize1: number,
    lotsize2: number,
    pooltype?: string
    poolind?: string
}
export type tArea = {
  blockNum:string;
  loctype:string;
  countrysecsubd:string;
  countyuse1:string;
  muncode:string;
  munname:string;
  srvyRange:string;
  srvySection:string;
  srvyTownship:string;
  subdname:string;
  taxcodearea:string;
}

export type tAddress = {
    country: string;
    countrySubd: string;
    line1: string;
    line2: string;
    locality: string;
    matchCode: string;
    oneLine: string;
    postal1: string;
    postal2: string;
    postal3: string;
}


export type tGeoIdV4 = {
  CO: string;
  CS: string;
  DB: string;
  N2: string;
  PL: string;
  SB: string;
  ZI: string;
}

export type tLocation =  {
  accuracy: string;
  latitude: string;
  longitude: string;
  distance: number;
  geoid: string;
  geoIdV4: tGeoIdV4;
}

export type tUtilities = {
    coolingtype: string;
    heatingfuel: string;
    heatingtype: string;
    sewertype: string;
    waterType: string;
}

export type tSummary = {
  absenteeInd: string;
  propclass: string;
  propsubtype: string;
  proptype: string;
  propertyType: string;
  yearbuilt: number;
  propLandUse: string;
  propIndicator: string;
  legal1: string;
  utilities: tUtilities;
}

type tBuildingSize = {
  bldgsize: number;
  grosssize: number;
  grosssizeadjusted: number;
  groundfloorsize: number;
  livingsize: number;
  sizeInd: string;
  universalsize: number;
}

type tBuildingRooms = {
  bathfixtures: number;
  bathsfull: number;
  bathstotal: number;
  beds: number;
  roomsTotal: number;
}


type tBuiltingInterior = {
  bsmtsize: number;
  bsmttype: string;
  fplccount: number;
  fplcind: string;
  fplctype: string;
}

type tBuildingConstruction = {
  condition: string;
  constructiontype: string;
  foundationtype: string;
  frameType: string;
  roofcover: string;
  roofShape: string;
  wallType: string;
}

type tBuildingParking = {
  garagetype: string;
  prkgSize: number;
  prkgSpaces: string;
  prkgType: string;
}

type tBuildingSummary = {
  archStyle: string;
  bldgType: string;
  imprType: string;
  quality: string;
  storyDesc: string;
  view: string;
  bldgsNum: number;
  levels: number;
  yearbuilteffective: number;
}

export type tBuilding = {
  size: tBuildingSize;
  rooms: tBuildingRooms;
  interior: tBuiltingInterior;
  construction: tBuildingConstruction;
  parking: tBuildingParking;
  summary: tBuildingSummary;
}

type tVintage = {
    lastModified: string; // DateString "2023-08-08",
    pubDate: string; // DateString "2023-08-08"
}

export type tPropertyResponse = {
  identifier: tIdentifier;
  lot: tLot;
  area: tArea;
  address: tAddress;
  location: tLocation;
  summary: tSummary;
  building: tBuilding;
  vintage: tVintage;
}