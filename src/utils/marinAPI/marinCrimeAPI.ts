import { ISOStringFormat } from "date-fns"
import { tObjectStringToString, tObjectStringToStringArray } from "../../types"

export const MARIN_CRIME_BASE_URL = "https://data.marincounty.org/resource/ahxi-5nsc.json"



export const CRIME_CLASSES_TO_CRIMES: tObjectStringToStringArray = {
  "THEFT": ["THEFT", "SHOPLIFTNG"],
  "TRAFFIC INCIDENT": ["VTOW", "VEH CODE", "PARK", "PURSUIT"],
  "FRAUD": ["IDENT THEF", "FRAUD"],
  "ASSAULT - OTHER": ["ASSAULT", "BATTERY", "CHILD ABUS"],
  "ALL OTHER - NON-CRIMINAL": ["MENTAL", "SUS CIRC", "ALAW", "CIV", "ACIT", "ACHP", "WELFAR CHK", "LOST", "FOUND", "MISS PERS", "OTHER", "AOTH", "TRESPASS", "ADEATH", "AFIRE", "BODY", "AMED", "UNSUB", "MCSO", "ANML", "MAST"],
  "ALL OTHER - CRIMINAL": ["WARR ARR", "TRO", "MISC PC", "THREATS", "DOM VIOL", "RESIST ARR", "MS", "EXPLODE", "ESCAPE", "BOMB"],
  "VANDALISM": ["VANDALISM"],
  "DRUGS / NARCOTICS VIOLATION": ["HS", "DRUGS", "DRUNK"],
  "WEAPONS VIOLATION": ["WEAPONS"],
  "SEXUAL OFFENSE - OTHER": ["SEX", "290", "INDEC EXPO"],
  "BURGLARY FROM MOTOR VEHICLE": ["BURG AUTO"],
  "ROBBERY - INDIVIDUAL": ["ROBBERY"],
  "MOTOR VEHICLE THEFT": ["VEH RECV"],
  "BURGLARY - RESIDENTIAL": ["BURG RES"],
  "BURGLARY - COMMERCIAL": ["BURG COMM"],
  "DISORDERLY CONDUCT": ["RUNAWAY", "DIST PEACE", "PROWLER"],
  "SEXUAL ASSAULT": ["RAPE"],
  "DEATH INVESTIGATION": ["SUICIDE"]
}

export const CRIME_ABBREVIATION_TO_DESCRIPTION: tObjectStringToString = {
  "SHOPLIFTNG": "SHOP LIFTING",
  "VTOW": "VEHICLE TOW",
  "VEH CODE": "VEHICULAR CODE",
  "IDENT THEF": "IDENTITY THEFT",
  "CHILD ABUS": "CHILD ABUSE",
  "SUS CIRC": "SUSPICIOUS CIRCUMSTANCE",
  "ALAW": "ALAW",
  "CIV": "CIV",
  "ACIT": "ACIT",
  "ACHP": "ACHP",
  "WELFAR CHK": "WELFARE CHECK",
  "MISS PERS": "MISSING PERSON",
  "290": "REGISTRATION OF SEX OFFENDERS",
  "WARR ARR": "WARRANT ARREST",
  "DOM VIOL": "DOMESTIC VIOLENCE",
  "INDEC EXPO": "INDECENT EXPOSURE",
  "RESIST ARR": "RESIST ARREST",
  "BURG AUTO": "BURGLARY - AUTO",
  "BURG COMM": "BURG COMMERCIAL",
  "ANML":"ANIMAL",
  "VEH RECV": "VEHICLE RECV",
  "BURG RES": "BURGLARY RESIDENTIAL",
  "DIST PEACE": "DISTURBING THE PEACE",


  // need translation for below
  "AOTH":"AOTH",
  "ADEATH":"ADEATH",
  "AFIRE": "AFIRE",
  "HS": "HS",
  "AMED":"AMED",
  "UNSUB":"UNSUB",
  "MCSO":"MCSO",
  "MAST": "MAST",
  "TRO": "TRO",
  "MISC PC": "MISC PC",
  "MS": "MS",
}

const MAPPING_TO_TOWNS = {
    "MARIN CITY": ["MARIN CITY"],
    "MILL VALLEY": ["STRAWBERRY", "TAM VALLEY", "HOMESTEAD", "MILL VALLEY", "ALMONTE", "ALTO", "MUIR WOODS PK"],
    "NOVATO": ["NOVATO"],
    "POINT REYES": ["POINT REYES"],
    "KENTFIELD": ["KENTFIELD"],
    "SAN RAFAEL": ["SAN RAFAEL", "SANTA VENETIA", "MARINWOOD", "LUCAS VALLEY"],
    "TIBURON": ["TIBURON"],
    "CORTE MADERA": ["CORTE MADERA"],
    "LARKSPUR": ["LARKSPUR"],
    "MARIN COUNTY": ["GG RECRE AREA", "SAN GERON VLY", "MOUNT TAM"],
    "SAUSALITO": ["SAUSALITO"],
    "FAIRFAX": ["FAIRFAX"],
    "SAN GERONIMO": ["SAN GERONIMO"],
    "SAN ANSELMO": ["SAN ANSELMO", "SLEEPY HOLLOW"],
    "NICASIO": ["NICASIO"],
    "BOLINAS": ["BOLINAS"],
    "DILLON BEACH": ["DILLON BEACH"],
    "PETALUMA": ["CHILENO VLY", "HICKS VALLEY"],
    "FOREST KNOLLS": ["FOREST KNOLLS"],
    "GREENBRAE": ["GREENBRAE"],
    "INVERNESS": ["INVERNESS", "INVERNESS PK"],
    "WOODACRE": ["WOODACRE"],
    "MUIR BEACH": ["MUIR BEACH"],
    "SAN QUENTIN": ["SAN QUENTIN V"],
    "TOMALES": ["TOMALES"],
    "POINT REYES STATION": ["OLEMA", "PT REYES STN"],
    "BELVEDERE": ["BELVEDERE"],
    "OLEMA": ["PT REYES"],
    "STINSON BEACH": ["STINSON BEACH"],
    "LAGUNITAS": ["LAGUNITAS"],
    "MARSHALL": ["MARSHALL"]
}

export const TOWN_ABBREVIATION_TO_NAME: tObjectStringToString = {
  "MUIR WOODS PK": "MUIR WOODS PARK",
  "GG RECRE AREA": "GOLDEN GATE RECREATION AREA",
  "SAN GERON VLY": "SAN GERONIMO VALLEY",
  "CHILENO VLY": "CHILENO VALLEY",
  "INVERNESS PK": "INVERNESS PARK",
  "SAN QUENTIN V": "SAN QUENTIN VALLEY",
  "PT REYES STN": "POINT REYES STATION",
  "PT REYES": "POINT REYES",
}

export const MARIN_TOWNS = ['ALMONTE', 'ALTO', 'BELVEDERE', 'BOLINAS', 'CHILENO VLY', 'CORTE MADERA', 'DILLON BEACH', 'FAIRFAX', 'FOREST KNOLLS', 'GG RECRE AREA', 'GREENBRAE', 'HICKS VALLEY', 'HOMESTEAD', 'INVERNESS', 'INVERNESS PK', 'KENTFIELD', 'LAGUNITAS', 'LARKSPUR', 'LUCAS VALLEY', 'MARIN CITY', 'MARINWOOD', 'MARSHALL', 'MILL VALLEY', 'MOUNT TAM', 'MUIR BEACH', 'MUIR WOODS PK', 'NICASIO', 'NOVATO', 'OLEMA', 'POINT REYES', 'PT REYES', 'PT REYES STN', 'SAN ANSELMO', 'SAN GERON VLY', 'SAN GERONIMO', 'SAN QUENTIN V', 'SAN RAFAEL', 'SANTA VENETIA', 'SAUSALITO', 'SLEEPY HOLLOW', 'STINSON BEACH', 'STRAWBERRY', 'TAM VALLEY', 'TIBURON', 'TOMALES', 'WOODACRE']

export type tCrime =     {
        "im_dr":string;
        "crime":string;
        "crime_class":string;
        "incident_date_time":string;
        "incident_street_address":string;
        "incident_city_town":string;
        "incident_city_town_mapping":string;
        "jurisdiction":string;
        "latitude"?: string;
        "longitude"?:string;
        "location"?: {
            "latitude": string;
            "longitude":string;
        },
        "unique_id": string;
        ":@computed_region_6s5y_serh": string;
        ":@computed_region_bgqc_3apt": string;
        ":@computed_region_nyxm_p3bi": string;
        ":@computed_region_3c6h_y28d": string;
}

type tWhereStringProps = {
  from?: Date;
  to?: Date;
}

export const whereString = ({ }) => {

}