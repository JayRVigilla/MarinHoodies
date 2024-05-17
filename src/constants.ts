export const WORDPRESS_PUBLIC_API_BASE_URL = `https://public-api.wordpress.com/wp/v2/sites`

// use .env to generate WordPress API base url
export const WORDPRESS_SITE_API = `${WORDPRESS_PUBLIC_API_BASE_URL}/${process.env.REACT_APP_WORDPRESS_URL}`

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