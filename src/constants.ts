export const WORDPRESS_PUBLIC_API_BASE_URL = `https://public-api.wordpress.com/wp/v2/sites`

// use .env to generate WordPress API base url
export const WORDPRESS_SITE_API = `${WORDPRESS_PUBLIC_API_BASE_URL}/${process.env.REACT_APP_WORDPRESS_URL}`

export const ATTOM_API_BASE_URL = "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property"

export const DATE_RANGE_OPTIONS_LABELS = {
  THIRTY_DAYS: "30 days",
  SIXTY_DAYS: "60 days",
  NINETY_DAYS: "90 days",
  CUSTOM: "Custom",
}

export const DATE_RANGE_OPTIONS = {
  [DATE_RANGE_OPTIONS_LABELS.THIRTY_DAYS]: 30,
  [DATE_RANGE_OPTIONS_LABELS.SIXTY_DAYS]: 60,
  [DATE_RANGE_OPTIONS_LABELS.NINETY_DAYS]: 90,
  [DATE_RANGE_OPTIONS_LABELS.CUSTOM]: "CUSTOM",
}

export type tCoordsObject = {
  lat: number;
  lon: number;
}

export const kinrossCords:tCoordsObject = {
  lat: 37.97659,
  lon: -122.49066,
}
export const millerCords: tCoordsObject = {
  lat: 37.3009732,
  lon: -122.01531605,
}

export const homeCords: tCoordsObject = {
  // * Sourced from positionstack.com API
  lat: 38.004357,
  lon: -122.561161,
}